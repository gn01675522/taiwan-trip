import { NormalCardOutline } from "./normalCard.styles";

const NormalCard = ({ children, gridArea, ...otherProps }) => {
  return (
    <NormalCardOutline gridArea={gridArea} {...otherProps}>
      {children}
    </NormalCardOutline>
  );
};

export default NormalCard;
