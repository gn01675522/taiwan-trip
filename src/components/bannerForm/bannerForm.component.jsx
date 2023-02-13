//* Parent： banner.component.jsx

import { FormContainer } from "./bannerForm.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../UI/button/button.component";
import SortSelected from "../UI/select/Select.component";
import { SELECTED_OPTION } from "../../dummy_data/DUMMY_DATA";

const BannerForm = ({ $pageType }) => {
  const exceptTraffic = $pageType !== "traffic";
  const onClickHandler = (event) => {
    event.preventDefault();
  };

  return (
    <FormContainer $pageType={$pageType}>
      {exceptTraffic && <input type="text" placeholder="搜尋關鍵字" />}
      {SELECTED_OPTION.map((selectedType, index) => {
        return (
          <SortSelected
            key={selectedType.category}
            gridArea={index}
            selected={selectedType}
          />
        );
      })}
      <Button
        type="submit"
        gridArea="btn"
        buttonType={BUTTON_TYPE_CLASSES.search}
        onClick={onClickHandler}
      />
    </FormContainer>
  );
};

export default BannerForm;
