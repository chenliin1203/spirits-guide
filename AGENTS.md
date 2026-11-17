# AGENTS.md - 微醺酒類資料網 (Spirits & Mixology Guide)

## 1. 專案目標
這是一個靜態的酒類與調酒知識資料網，用於收錄常見基酒、利口酒以及酒吧經典調酒配方。專案託管於 GitHub Pages。

## 2. 技術架構與限制
- **技術棧**：純原生 HTML5、CSS3、JavaScript (ES6+)。
- **禁止事項**：不使用 React、Vue 或外部大型 CSS 框架。
- **路徑規範**：所有資源引用（CSS、JS）一律使用相對路徑（如 `./css/style.css`）。

## 3. 視覺設計規範
- **風格定位**：夜間酒吧、暗色木質調（Dark Wood & Amber Glow）。
- **色票定義**：網頁背景 `#121110`、卡片背景 `#1E1C1A`、強調色 `#D4A373`（琥珀金）、標籤底色 `#2A3B4C`（深海藍）。

## 4. 新增酒類資料的標準作業程序 (SOP)
當使用者要求「新增酒類資料」或「擴充新酒譜」時，AI **必須**執行以下步驟，嚴禁直接修改 `index.html`：
1. 僅開啟 `data/spirits.json`，在陣列中新增物件。
2. 嚴格遵守以下 JSON 格式：
   ```json
   {
     "id": "英文小寫短網址代稱 (例如 belvedere-vodka)",
     "name": "酒款中文名稱",
     "englishName": "酒款英文名稱",
     "category": "分類（僅限：基酒 / 利口酒 / 經典調酒）",
     "abv": "酒精度數（例如：40% ABV）",
     "origin": "產地或起源地",
     "flavorProfile": ["風味標籤1", "風味標籤2"],
     "description": "簡短的酒款特色或背景故事說明（約 50-80 字）",
     "serveSuggestion": "推薦喝法或調酒配方"
   }