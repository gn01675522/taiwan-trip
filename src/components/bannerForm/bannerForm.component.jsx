//* Parent： banner.component.jsx

import { ReactComponent as Search } from "../../assets/search.svg";
import { FormContainer, SubmitButton } from "./bannerForm.styles";
import SortSelected from "../UI/select/Select.component";

const SELECTED_OPTION = [
  {
    category: "categories",
    selectedOption: [
      { tcTitle: "類別", enTitle: "category" },
      { tcTitle: "美食", enTitle: "food" },
      { tcTitle: "住宿", enTitle: "stay" },
    ],
  },
  {
    category: "counties",
    selectedOption: [
      { tcTitle: "不分縣市", enTitle: "no choose" },
      { tcTitle: "臺 北 市", enTitle: "Taipei City" },
      { tcTitle: "新 北 市", enTitle: "New Taipei City" },
      { tcTitle: "桃 園 市", enTitle: "Taoyuan City" },
      { tcTitle: "台 中 市", enTitle: "Taichung City" },
      { tcTitle: "台 南 市", enTitle: "Tainan City" },
      { tcTitle: "高 雄 市", enTitle: "Kaohsiung City" },
      { tcTitle: "基 隆 市", enTitle: "Keelung City" },
      { tcTitle: "新 竹 市", enTitle: "Hsinchu City" },
      { tcTitle: "新 竹 縣", enTitle: "Hsinchu County" },
      { tcTitle: "苗 栗 縣", enTitle: "Miaoli County" },
      { tcTitle: "彰 化 縣", enTitle: "Changhua County" },
      { tcTitle: "南 投 縣", enTitle: "Nantou County" },
      { tcTitle: "雲 林 縣", enTitle: "Yunlin County" },
      { tcTitle: "嘉 義 縣", enTitle: "Chiayi County" },
      { tcTitle: "嘉 義 市", enTitle: "Chiayi City" },
      { tcTitle: "屏 東 縣", enTitle: "Pingtung County" },
      { tcTitle: "宜 蘭 縣", enTitle: "Yilan County" },
      { tcTitle: "花 蓮 縣", enTitle: "Hualien County" },
      { tcTitle: "台 東 縣", enTitle: "Taitung County" },
      { tcTitle: "金 門 縣", enTitle: "Kinmen County" },
    ],
  },
];

const BannerForm = () => {
  const onClickHandler = (event) => {
    event.preventDefault();
  };

  return (
    <FormContainer>
      <input type="text" placeholder="搜尋關鍵字" />
      {SELECTED_OPTION.map((selectedType) => {
        return (
          <SortSelected key={selectedType.category} selected={selectedType} />
        );
      })}
      <SubmitButton type="submit" onClick={onClickHandler}>
        <Search />
      </SubmitButton>
    </FormContainer>
  );
};

export default BannerForm;
