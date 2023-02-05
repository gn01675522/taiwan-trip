import { CardOutline,Shadow } from "./card.styles";
// import { ReactComponent as Shadow } from "../../assets/shadow.svg";

const Card = ({ children }) => {
  return (
    <>
      <CardOutline>{children}</CardOutline>
      <Shadow />
    </>
  );
};

export default Card;
