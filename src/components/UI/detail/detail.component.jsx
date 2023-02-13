import ModalPortal from "../modal/modalPortal.component";
import DetailContent from "../../detailContent/detailContent.component";

import { DetailCardOutline } from "./detail.styles";

const Detail = () => {
  return (
    <ModalPortal>
      <DetailCardOutline>
        <DetailContent />
      </DetailCardOutline>
    </ModalPortal>
  );
};

export default Detail;
