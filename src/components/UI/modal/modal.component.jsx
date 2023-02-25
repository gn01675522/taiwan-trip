import { useDispatch } from "react-redux";

import ShadowCard from "../shadowCard/shadowCard.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { ModalOutline, Backdrop, ModalBody } from "./modal.styles";

import { setModalOpen } from "../../../store/detail/detail.actions";

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  const onShowModal = () => {
    dispatch(setModalOpen(false));
  };

  return (
    <ModalOutline>
      <Backdrop onClick={onShowModal} />
      <ModalBody>
        <ShadowCard $contentType="detail" $pageType="banner">
          {children}
        </ShadowCard>
        <Button buttonType={BUTTON_TYPE_CLASSES.cancel} onClick={onShowModal} />
      </ModalBody>
    </ModalOutline>
  );
};

export default Modal;
