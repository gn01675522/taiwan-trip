import { ReactComponent as Search } from "../../../assets/svg/search.svg";
import { ReactComponent as WhiteCross } from "../../../assets/svg/whiteCross.svg";

import {
  BlackSquareWrapper,
  WhiteSquareWrapper,
  PinkSquareWrapper,
  WhiteTriangularSymbol,
  BlackTriangularSymbol,
  RectangularWrapper,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  search: "search",
  next: "next",
  previous: "previous",
  cancel: "cancel",
  detail: "detail",
};

const getButton = (buttonType) =>
  ({
    [BUTTON_TYPE_CLASSES.search]: {
      wrapper: PinkSquareWrapper,
      content: Search,
    },
    [BUTTON_TYPE_CLASSES.next]: {
      wrapper: BlackSquareWrapper,
      content: WhiteTriangularSymbol,
    },
    [BUTTON_TYPE_CLASSES.previous]: {
      wrapper: WhiteSquareWrapper,
      content: BlackTriangularSymbol,
    },
    [BUTTON_TYPE_CLASSES.cancel]: {
      wrapper: PinkSquareWrapper,
      content: WhiteCross,
    },
    [BUTTON_TYPE_CLASSES.detail]: {
      wrapper: RectangularWrapper,
    },
  }[buttonType]);

const Button = ({ children, buttonType, btnInWhere, ...otherProps }) => {
  const CustomBtnWrapper = getButton(buttonType).wrapper;
  const CustomBtnContent = getButton(buttonType).content;

  return (
    <>
      <CustomBtnWrapper btnInWhere={btnInWhere} {...otherProps}>
        {CustomBtnContent ? <CustomBtnContent /> : children}
      </CustomBtnWrapper>
    </>
  );
};

export default Button;
