## 使用方式

1. 請使用 `npm i` 來安裝關聯套件。
2. 關聯套件安裝完畢後請使用 `npm start` 啟動專案。

## 注意事項及提醒

1. 此專案之 API 來自 TDX 交通部運輸資料流通服務，故須使用 API KEY 及 API SECRET KEY；若沒有相對應的 KEY，則一日呼叫上限為 50 次！
2. 若您已自備 API KEY，專案內有提供 env.example，請依據內部環境變數名稱來設定 KEY 值，並將檔案改變為 .env。
3. 或您可至 https://taiwan-trip.netlify.app 觀看已部署好的 DEMO。

### 專案具備功能

1.  可於首頁，也就是台灣景點頁面，瀏覽熱門台灣活動，及熱門餐飲；由於資料源並無熱門與否之相關資訊，故此處是使用隨機挑選方式呈現。
2.  可於首頁，也就是台灣景點頁面，熱門城市列表中點擊以切換至該城市景點。
3.  可於美食住宿的頁面瀏覽熱門美食，及熱門住宿；此處也是以隨機方式呈現內容，理由同第 1 點。
4.  可於台灣景點頁面及美食住宿頁面，來進行搜尋；此處必須選擇類別及縣市。
5.  可點擊各個顯示卡片來開啟 MODAL 以查看詳細資訊。

### 專案使用套件及技術

#### 主要技術

1.  HTML
2.  CSS
3.  JavaScript

#### 主要框架

React.js

#### 其他套件

1.  styled component
2.  redux
3.  redux-logger
4.  redux-thunk
5.  react-router
6.  dotenv (dependency)
7.  lottie-web

# 視覺設計稿提供者：Facebook 社團 - Taiwan UI/UX Side Project 管理員 Doris KT；感謝提供設計稿！
