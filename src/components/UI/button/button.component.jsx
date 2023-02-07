import { SearchBtn, NextBtn, PreviousBtn } from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  search: "search",
  next: "next",
  previous: "previous",
};

const getButton = (buttonType) =>
  ({
    [BUTTON_TYPE_CLASSES.search]: SearchBtn,
    [BUTTON_TYPE_CLASSES.next]: NextBtn,
    [BUTTON_TYPE_CLASSES.previous]: PreviousBtn,
  }[buttonType]);

const Button = ({ children, buttonType }) => {
  const CustomBtn = getButton(buttonType);
  return (
    <>
      <CustomBtn />
    </>
  );
};

export default Button;
