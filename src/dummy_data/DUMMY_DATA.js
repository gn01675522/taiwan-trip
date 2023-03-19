export const PAGE_TYPE = {
  home: "home",
  event: "event",
  food: "food",
  hotel: "hotel",
  traffic: "traffic",
  scenicSpot: "scenicSpot",
};
//* which use this：
//* 1. container.component.jsx
//* 2. event.component.jsx
//* 3. food.component.jsx
//* 4. foodAndHotel.component.jsx
//* 5. home.component.jsx
//* 6. hotel.component.jsx
//* 7. scenicSpotComponent.jsx
//* 8. traffic.component.jsx

export const HOME_SELECTED_OPTION = [
  {
    category: "categories",
    selectedOption: [
      { id: "default", tcTitle: "類別", value: "" },
      { id: "scenicSpot", tcTitle: "景點", value: "scenicSpot" },
      { id: "event", tcTitle: "活動", value: "event" },
    ],
    required: true,
  },
  {
    category: "counties",
    selectedOption: [
      { id: "default", tcTitle: "不分縣市", value: "" },
      { id: "Taipei", tcTitle: "臺 北 市", value: "Taipei" },
      { id: "NewTaipei", tcTitle: "新 北 市", value: "NewTaipei" },
      { id: "Taoyuan", tcTitle: "桃 園 市", value: "Taoyuan" },
      { id: "Taichung", tcTitle: "台 中 市", value: "Taichung" },
      { id: "Tainan", tcTitle: "台 南 市", value: "Tainan" },
      { id: "Kaohsiung", tcTitle: "高 雄 市", value: "Kaohsiung" },
      { id: "Keelung", tcTitle: "基 隆 市", value: "Keelung" },
      { id: "Hsinchu", tcTitle: "新 竹 市", value: "Hsinchu" },
      { id: "HsinchuCounty", tcTitle: "新 竹 縣", value: "HsinchuCounty" },
      { id: "MiaoliCounty", tcTitle: "苗 栗 縣", value: "MiaoliCounty" },
      { id: "ChanghuaCounty", tcTitle: "彰 化 縣", value: "ChanghuaCounty" },
      { id: "NantouCounty", tcTitle: "南 投 縣", value: "NantouCounty" },
      { id: "YunlinCounty", tcTitle: "雲 林 縣", value: "YunlinCounty" },
      { id: "ChiayiCounty", tcTitle: "嘉 義 縣", value: "ChiayiCounty" },
      { id: "Chiayi", tcTitle: "嘉 義 市", value: "Chiayi" },
      { id: "PingtungCounty", tcTitle: "屏 東 縣", value: "PingtungCounty" },
      { id: "YilanCounty", tcTitle: "宜 蘭 縣", value: "YilanCounty" },
      { id: "HualienCounty", tcTitle: "花 蓮 縣", value: "HualienCounty" },
      { id: "TaitungCounty", tcTitle: "台 東 縣", value: "TaitungCounty" },
      { id: "KinmenCounty", tcTitle: "金 門 縣", value: "KinmenCounty" },
    ],
    required: false,
  },
];
//* which use this： bannerForm.component.jsx

export const FOOD_SELECTED_OPTION = [
  {
    category: "categories",
    selectedOption: [
      { id: "default", tcTitle: "類別", value: "" },
      { id: "food", tcTitle: "美食", value: "food" },
      { id: "hotel", tcTitle: "住宿", value: "hotel" },
    ],
    required: true,
  },
  {
    category: "counties",
    selectedOption: [
      { id: "default", tcTitle: "不分縣市", value: "" },
      { id: "Taipei", tcTitle: "臺 北 市", value: "Taipei" },
      { id: "NewTaipei", tcTitle: "新 北 市", value: "NewTaipei" },
      { id: "Taoyuan", tcTitle: "桃 園 市", value: "Taoyuan" },
      { id: "Taichung", tcTitle: "台 中 市", value: "Taichung" },
      { id: "Tainan", tcTitle: "台 南 市", value: "Tainan" },
      { id: "Kaohsiung", tcTitle: "高 雄 市", value: "Kaohsiung" },
      { id: "Keelung", tcTitle: "基 隆 市", value: "Keelung" },
      { id: "Hsinchu", tcTitle: "新 竹 市", value: "Hsinchu" },
      { id: "HsinchuCounty", tcTitle: "新 竹 縣", value: "HsinchuCounty" },
      { id: "MiaoliCounty", tcTitle: "苗 栗 縣", value: "MiaoliCounty" },
      { id: "ChanghuaCounty", tcTitle: "彰 化 縣", value: "ChanghuaCounty" },
      { id: "NantouCounty", tcTitle: "南 投 縣", value: "NantouCounty" },
      { id: "YunlinCounty", tcTitle: "雲 林 縣", value: "YunlinCounty" },
      { id: "ChiayiCounty", tcTitle: "嘉 義 縣", value: "ChiayiCounty" },
      { id: "Chiayi", tcTitle: "嘉 義 市", value: "Chiayi" },
      { id: "PingtungCounty", tcTitle: "屏 東 縣", value: "PingtungCounty" },
      { id: "YilanCounty", tcTitle: "宜 蘭 縣", value: "YilanCounty" },
      { id: "HualienCounty", tcTitle: "花 蓮 縣", value: "HualienCounty" },
      { id: "TaitungCounty", tcTitle: "台 東 縣", value: "TaitungCounty" },
      { id: "KinmenCounty", tcTitle: "金 門 縣", value: "KinmenCounty" },
    ],
  },
];
//* which use this： bannerForm.component.jsx

export const TRAFFIC_SELECTED_OPTION = [
  {
    category: "counties",
    selectedOption: [
      { id: "default", tcTitle: "不分縣市", value: "" },
      { id: "Taipei", tcTitle: "臺 北 市", value: "Taipei" },
      { id: "NewTaipei", tcTitle: "新 北 市", value: "NewTaipei" },
      { id: "Taoyuan", tcTitle: "桃 園 市", value: "Taoyuan" },
      { id: "Taichung", tcTitle: "台 中 市", value: "Taichung" },
      { id: "Tainan", tcTitle: "台 南 市", value: "Tainan" },
      { id: "Kaohsiung", tcTitle: "高 雄 市", value: "Kaohsiung" },
      { id: "Keelung", tcTitle: "基 隆 市", value: "Keelung" },
      { id: "Hsinchu", tcTitle: "新 竹 市", value: "Hsinchu" },
      { id: "HsinchuCounty", tcTitle: "新 竹 縣", value: "HsinchuCounty" },
      { id: "MiaoliCounty", tcTitle: "苗 栗 縣", value: "MiaoliCounty" },
      { id: "ChanghuaCounty", tcTitle: "彰 化 縣", value: "ChanghuaCounty" },
      { id: "NantouCounty", tcTitle: "南 投 縣", value: "NantouCounty" },
      { id: "YunlinCounty", tcTitle: "雲 林 縣", value: "YunlinCounty" },
      { id: "ChiayiCounty", tcTitle: "嘉 義 縣", value: "ChiayiCounty" },
      { id: "Chiayi", tcTitle: "嘉 義 市", value: "Chiayi" },
      { id: "PingtungCounty", tcTitle: "屏 東 縣", value: "PingtungCounty" },
      { id: "YilanCounty", tcTitle: "宜 蘭 縣", value: "YilanCounty" },
      { id: "HualienCounty", tcTitle: "花 蓮 縣", value: "HualienCounty" },
      { id: "TaitungCounty", tcTitle: "台 東 縣", value: "TaitungCounty" },
      { id: "KinmenCounty", tcTitle: "金 門 縣", value: "KinmenCounty" },
    ],
    required: true,
  },
  {
    category: "route",
    selectedOption: [
      { id: "default", tcTitle: "選擇路線", value: "" },
      { id: "food", tcTitle: "暫存", value: "" },
      { id: "stay", tcTitle: "暫存", value: "" },
    ],
    required: true,
  },
];
//* which use this： bannerForm.component.jsx
// 交通部分尚未開啟建構，故先以固定資料做測試

export const CITY_TITLE_EN_TO_TC = [
  { enTitle: "Taipei", tcTitle: "臺北市" },
  { enTitle: "NewTaipei", tcTitle: "新北市" },
  { enTitle: "Taoyuan", tcTitle: "桃園市" },
  { enTitle: "Taichung", tcTitle: "台中市" },
  { enTitle: "Tainan", tcTitle: "台南市" },
  { enTitle: "Kaohsiung", tcTitle: "高雄市" },
  { enTitle: "Keelung", tcTitle: "基隆市" },
  { enTitle: "Hsinchu", tcTitle: "新竹市" },
  { enTitle: "HsinchuCounty", tcTitle: "新竹縣" },
  { enTitle: "MiaoliCounty", tcTitle: "苗栗縣" },
  { enTitle: "ChanghuaCounty", tcTitle: "彰化縣" },
  { enTitle: "NantouCounty", tcTitle: "南投縣" },
  { enTitle: "YunlinCounty", tcTitle: "雲林縣" },
  { enTitle: "ChiayiCounty", tcTitle: "嘉義縣" },
  { enTitle: "Chiayi", tcTitle: "嘉義市" },
  { enTitle: "PingtungCounty", tcTitle: "屏東縣" },
  { enTitle: "YilanCounty", tcTitle: "宜蘭縣" },
  { enTitle: "HualienCounty", tcTitle: "花蓮縣" },
  { enTitle: "TaitungCounty", tcTitle: "台東縣" },
  { enTitle: "KinmenCounty", tcTitle: "金門縣" },
];

//* which use this：
//* 1. component.utils.js
//* 資料目的為做英文與繁體轉換

export const screenWide = {
  pad: "768px",
  pc: "1024px",
};
// 用來定義 RWD 尺寸
