//* which use this：
//* 1. popularCityList.component.jsx

import { useNavigate } from "react-router-dom";
import { ReactComponent as WhiteMapSymbol } from "../../assets/svg/whiteMapSymbol.svg";

import NormalCard from "../UI/normalCard/normalCard.component";

import {
  CityCardOutline,
  BlurBackground,
  CardContent,
} from "./cityCard.styles";

const CityCard = ({ cityList, gridArea }) => {
  const navigate = useNavigate();
  const { tcTitle, img, route } = cityList;

  const onNavigateHandler = () => navigate(`scenicSpot/${route}`);

  return (
    <NormalCard gridArea={gridArea} onClick={onNavigateHandler}>
      <CityCardOutline cityImg={img}>
        <BlurBackground>
          <CardContent>
            <WhiteMapSymbol />
            {tcTitle}
          </CardContent>
        </BlurBackground>
      </CityCardOutline>
    </NormalCard>
  );
};

export default CityCard;
