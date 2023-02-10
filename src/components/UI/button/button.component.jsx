import { ReactComponent as Search } from "../../../assets/svg/search.svg";

import {
  BlackSquareWrapper,
  WhiteSquareWrapper,
  PinkSquareWrapper,
  WhiteTriangleSymbol,
  BlackTriangleSymbol,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  search: "search",
  next: "next",
  previous: "previous",
  cancel: "cancel",
  detail: "detail",
};

// const getButton = (buttonType) =>
//   ({
//     [BUTTON_TYPE_CLASSES.search]: SearchBtn,
//     [BUTTON_TYPE_CLASSES.next]: NextBtn,
//     [BUTTON_TYPE_CLASSES.previous]: PreviousBtn,
//     [BUTTON_TYPE_CLASSES.cancel]: SearchBtn,
//   }[buttonType]);

const Button = ({ buttonType, ...otherProps }) => {
  // const CustomBtn = getButton(buttonType);
  //* 暫存 看能不能讓 JSX 部分給簡單化

  return (
    <>
      {buttonType === "search" && (
        <PinkSquareWrapper {...otherProps}>
          <Search />
        </PinkSquareWrapper>
      )}
      {buttonType === "next" && (
        <BlackSquareWrapper {...otherProps}>
          <WhiteTriangleSymbol />
        </BlackSquareWrapper>
      )}
      {buttonType === "previous" && (
        <WhiteSquareWrapper {...otherProps}>
          <BlackTriangleSymbol />
        </WhiteSquareWrapper>
      )}
    </>
  );
};

export default Button;
