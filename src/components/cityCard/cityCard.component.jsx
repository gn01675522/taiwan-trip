import { ReactComponent as WhiteMapSymbol } from "../../assets/svg/whiteMapSymbol.svg";

import {
  CityCardOutline,
  BlurBackground,
  CardContent,
} from "./cityCard.styles";

const CityCard = ({ cityTitle, cityImg }) => {
  return (
    <CityCardOutline cityImg={cityImg}>
      <BlurBackground>
        <CardContent>
          <WhiteMapSymbol />
          {cityTitle}
        </CardContent>
      </BlurBackground>
    </CityCardOutline>
  );
};

export default CityCard;
