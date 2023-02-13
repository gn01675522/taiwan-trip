//* who call this： bannerForm.component.jsx

export const SELECTED_OPTION = [
  {
    category: "categories",
    selectedOption: [
      { id: "category", tcTitle: "類別" },
      { id: "food", tcTitle: "美食" },
      { id: "stay", tcTitle: "住宿" },
    ],
  },
  {
    category: "counties",
    selectedOption: [
      { id: "no choose", tcTitle: "不分縣市" },
      { id: "Taipei City", tcTitle: "臺 北 市" },
      { id: "New Taipei City", tcTitle: "新 北 市" },
      { id: "Taoyuan City", tcTitle: "桃 園 市" },
      { id: "Taichung City", tcTitle: "台 中 市" },
      { id: "Tainan City", tcTitle: "台 南 市" },
      { id: "Kaohsiung City", tcTitle: "高 雄 市" },
      { id: "Keelung City", tcTitle: "基 隆 市" },
      { id: "Hsinchu City", tcTitle: "新 竹 市" },
      { id: "Hsinchu County", tcTitle: "新 竹 縣" },
      { id: "Miaoli County", tcTitle: "苗 栗 縣" },
      { id: "Changhua County", tcTitle: "彰 化 縣" },
      { id: "Nantou County", tcTitle: "南 投 縣" },
      { id: "Yunlin County", tcTitle: "雲 林 縣" },
      { id: "Chiayi County", tcTitle: "嘉 義 縣" },
      { id: "Chiayi City", tcTitle: "嘉 義 市" },
      { id: "Pingtung County", tcTitle: "屏 東 縣" },
      { id: "Yilan County", tcTitle: "宜 蘭 縣" },
      { id: "Hualien County", tcTitle: "花 蓮 縣" },
      { id: "Taitung County", tcTitle: "台 東 縣" },
      { id: "Kinmen County", tcTitle: "金 門 縣" },
    ],
  },
];

export const DATA_FOR_LIST_CONTENT = [
  { id: "Taipei County", tcTitle: "台北市" },
  { id: "New Taipei County", tcTitle: "新北市" },
  { id: "Taoyuan County", tcTitle: "桃園市" },
  { id: "Hsinchu County", tcTitle: "新竹市" },
  { id: "Taichung", tcTitle: "台 中" },
  { id: "Nantou", tcTitle: "南 投" },
  { id: "Chiayi", tcTitle: "嘉 義" },
  { id: "Tainan", tcTitle: "台 南" },
  { id: "Kaohsiung", tcTitle: "高 雄" },
  { id: "Pingtung", tcTitle: "屏 東" },
  { id: "Yilan", tcTitle: "宜 蘭" },
  { id: "Hualien", tcTitle: "花 蓮" },
  { id: "Taitung", tcTitle: "台 東" },
  { id: "Kinmen Matsu Penghu", tcTitle: "金門媽祖.澎湖" },
];

export const PAGE_TYPE = {
  home: "home",
  food: "food",
  traffic: "traffic",
};
