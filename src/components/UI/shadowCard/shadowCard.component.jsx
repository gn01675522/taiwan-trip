//* who call this： banner.component.jsx

import { CardOutline, Shadow } from "./shadowCard.styles";

const ShadowCard = ({ children }) => {
  return (
    <>
      <CardOutline>{children}</CardOutline>
      <Shadow />
    </>
  );
};

export default ShadowCard;
