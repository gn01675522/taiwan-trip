import { NormalCardOutline } from "./normalCard.styles";

const NormalCard = ({ children, gridArea }) => {
  return <NormalCardOutline gridArea={gridArea}>{children}</NormalCardOutline>;
};

export default NormalCard;
