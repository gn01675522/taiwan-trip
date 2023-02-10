import { ReactComponent as WhiteMapSymbol } from "../../assets/svg/whiteMapSymbol.svg";

import { CityCardOutline } from "./cityCard.styles";

const CityCard = ({ cityTitle }) => {
  return (
    <CityCardOutline>
      <WhiteMapSymbol />
      {cityTitle}
    </CityCardOutline>
  );
};

export default CityCard;
