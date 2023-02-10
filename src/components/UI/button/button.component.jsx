import { ReactComponent as Search } from "../../../assets/svg/search.svg";

import {
  BlackSquareWrapper,
  WhiteSquareWrapper,
  PinkSquareWrapper,
  WhiteTriangleSymbol,
  BlackTriangleSymbol,
  WhiteCrossSymbol,
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
      content: WhiteTriangleSymbol,
    },
    [BUTTON_TYPE_CLASSES.previous]: {
      wrapper: WhiteSquareWrapper,
      content: BlackTriangleSymbol,
    },
    [BUTTON_TYPE_CLASSES.cancel]: {
      wrapper: PinkSquareWrapper,
      content: WhiteCrossSymbol,
    },
  }[buttonType]);

const Button = ({ buttonType, ...otherProps }) => {
  const CustomBtnWrapper = getButton(buttonType).wrapper;
  const CustomBtnContent = getButton(buttonType).content;

  return (
    <>
      <CustomBtnWrapper {...otherProps}>
        <CustomBtnContent />
      </CustomBtnWrapper>
    </>
  );
};

export default Button;
