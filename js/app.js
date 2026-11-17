document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('spirits-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    let allSpirits = [];

    // 讀取 JSON 資料庫
    fetch('./data/spirits.json')
        .then(response => response.json())
        .then(data => {
            allSpirits = data;
            renderCards(allSpirits);
        })
        .catch(error => {
            console.error('載入酒類資料失敗:', error);
            grid.innerHTML = '<p style="color: #ef4444;">無法載入資料，請確認是否透過伺服器或 GitHub Pages 開啟網頁。</p>';
        });

    // 渲染卡片畫面
    function renderCards(spirits) {
        grid.innerHTML = '';
        spirits.forEach(item => {
            const tagsHtml = item.flavorProfile.map(tag => `<span class="tag">${tag}</span>`).join('');
            
            const card = document.createElement('div');
            card.className = 'spirit-card';
            card.innerHTML = `
                <div>
                    <div class="card-header">
                        <div class="card-title">
                            <h2>${item.name}</h2>
                            <span>${item.englishName}</span>
                        </div>
                        <span class="abv-badge">${item.abv}</span>
                    </div>
                    <div class="meta-info">分類：${item.category} ｜ 產地/起源：${item.origin}</div>
                    <div class="flavor-tags">${tagsHtml}</div>
                    <p class="description">${item.description}</p>
                </div>
                <div class="serve-box">
                    <strong>🍸 推薦喝法與配方：</strong><br>
                    ${item.serveSuggestion}
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // 分類按鈕篩選功能
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-category');
            if (category === 'all') {
                renderCards(allSpirits);
            } else {
                const filtered = allSpirits.filter(item => item.category === category);
                renderCards(filtered);
            }
        });
    });
});