import ShadowCard from "../shadowCard/shadowCard.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { Backdrop, ModalBody } from "./modal.styles";

const Modal = ({ children }) => {
  return (
    <Backdrop>
      <ModalBody>
        <ShadowCard $contentType="detail">{children}</ShadowCard>
        <Button $buttonType={BUTTON_TYPE_CLASSES.cancel} />
      </ModalBody>
      
    </Backdrop>
  );
};

export default Modal;
