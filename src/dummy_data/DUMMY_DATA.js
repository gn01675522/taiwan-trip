//* which use this：
//* bannerForm.component.jsx

export const HOME_SELECTED_OPTION = [
  {
    category: "categories",
    selectedOption: [
      { id: "default", tcTitle: "類別" },
      { id: "scenicSpot", tcTitle: "景點" },
      { id: "event", tcTitle: "活動" },
    ],
  },
  {
    category: "counties",
    selectedOption: [
      { id: "default", tcTitle: "不分縣市" },
      { id: "Taipei", tcTitle: "臺 北 市" },
      { id: "NewTaipei", tcTitle: "新 北 市" },
      { id: "Taoyuan", tcTitle: "桃 園 市" },
      { id: "Taichung", tcTitle: "台 中 市" },
      { id: "Tainan", tcTitle: "台 南 市" },
      { id: "Kaohsiung", tcTitle: "高 雄 市" },
      { id: "Keelung", tcTitle: "基 隆 市" },
      { id: "Hsinchu", tcTitle: "新 竹 市" },
      { id: "HsinchuCounty", tcTitle: "新 竹 縣" },
      { id: "MiaoliCounty", tcTitle: "苗 栗 縣" },
      { id: "ChanghuaCounty", tcTitle: "彰 化 縣" },
      { id: "NantouCounty", tcTitle: "南 投 縣" },
      { id: "YunlinCounty", tcTitle: "雲 林 縣" },
      { id: "ChiayiCounty", tcTitle: "嘉 義 縣" },
      { id: "Chiayi", tcTitle: "嘉 義 市" },
      { id: "PingtungCounty", tcTitle: "屏 東 縣" },
      { id: "YilanCounty", tcTitle: "宜 蘭 縣" },
      { id: "HualienCounty", tcTitle: "花 蓮 縣" },
      { id: "TaitungCounty", tcTitle: "台 東 縣" },
      { id: "KinmenCounty", tcTitle: "金 門 縣" },
    ],
  },
];

export const FOOD_SELECTED_OPTION = [
  {
    category: "categories",
    selectedOption: [
      { id: "default", tcTitle: "類別" },
      { id: "food", tcTitle: "美食" },
      { id: "hotel", tcTitle: "住宿" },
    ],
  },
  {
    category: "counties",
    selectedOption: [
      { id: "default", tcTitle: "不分縣市" },
      { id: "Taipei", tcTitle: "臺 北 市" },
      { id: "NewTaipei", tcTitle: "新 北 市" },
      { id: "Taoyuan", tcTitle: "桃 園 市" },
      { id: "Taichung", tcTitle: "台 中 市" },
      { id: "Tainan", tcTitle: "台 南 市" },
      { id: "Kaohsiung", tcTitle: "高 雄 市" },
      { id: "Keelung", tcTitle: "基 隆 市" },
      { id: "Hsinchu", tcTitle: "新 竹 市" },
      { id: "HsinchuCounty", tcTitle: "新 竹 縣" },
      { id: "MiaoliCounty", tcTitle: "苗 栗 縣" },
      { id: "ChanghuaCounty", tcTitle: "彰 化 縣" },
      { id: "NantouCounty", tcTitle: "南 投 縣" },
      { id: "YunlinCounty", tcTitle: "雲 林 縣" },
      { id: "ChiayiCounty", tcTitle: "嘉 義 縣" },
      { id: "Chiayi", tcTitle: "嘉 義 市" },
      { id: "PingtungCounty", tcTitle: "屏 東 縣" },
      { id: "YilanCounty", tcTitle: "宜 蘭 縣" },
      { id: "HualienCounty", tcTitle: "花 蓮 縣" },
      { id: "TaitungCounty", tcTitle: "台 東 縣" },
      { id: "KinmenCounty", tcTitle: "金 門 縣" },
    ],
  },
];

export const TRAFFIC_SELECTED_OPTION = [
  {
    category: "counties",
    selectedOption: [
      { id: "default", tcTitle: "選擇縣市" },
      { id: "Taipei", tcTitle: "臺 北 市" },
      { id: "NewTaipei", tcTitle: "新 北 市" },
      { id: "Taoyuan", tcTitle: "桃 園 市" },
      { id: "Taichung", tcTitle: "台 中 市" },
      { id: "Tainan", tcTitle: "台 南 市" },
      { id: "Kaohsiung", tcTitle: "高 雄 市" },
      { id: "Keelung", tcTitle: "基 隆 市" },
      { id: "Hsinchu", tcTitle: "新 竹 市" },
      { id: "HsinchuCounty", tcTitle: "新 竹 縣" },
      { id: "MiaoliCounty", tcTitle: "苗 栗 縣" },
      { id: "ChanghuaCounty", tcTitle: "彰 化 縣" },
      { id: "NantouCounty", tcTitle: "南 投 縣" },
      { id: "YunlinCounty", tcTitle: "雲 林 縣" },
      { id: "ChiayiCounty", tcTitle: "嘉 義 縣" },
      { id: "Chiayi", tcTitle: "嘉 義 市" },
      { id: "PingtungCounty", tcTitle: "屏 東 縣" },
      { id: "YilanCounty", tcTitle: "宜 蘭 縣" },
      { id: "HualienCounty", tcTitle: "花 蓮 縣" },
      { id: "TaitungCounty", tcTitle: "台 東 縣" },
      { id: "KinmenCounty", tcTitle: "金 門 縣" },
    ],
  },
  {
    category: "route",
    selectedOption: [
      { id: "default", tcTitle: "選擇路線" },
      { id: "food", tcTitle: "暫存" },
      { id: "stay", tcTitle: "暫存" },
    ],
  },
];
// 交通部分尚未開啟建構，故先以固定資料做測試

export const PAGE_TYPE = {
  home: "home",
  food: "food",
  traffic: "traffic",
  scenicSpot: "scenicSpot",
};
