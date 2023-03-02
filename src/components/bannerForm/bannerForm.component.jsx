//* which use this：
//* 1. banner.component.jsx

import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FormContainer } from "./bannerForm.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../UI/button/button.component";
import Selected from "../UI/select/Select.component";

import {
  HOME_SELECTED_OPTION,
  FOOD_SELECTED_OPTION,
  TRAFFIC_SELECTED_OPTION,
} from "../../dummy_data/DUMMY_DATA";

import { setSearchKeyword } from "../../store/search/search.actions";

const SELECT_TYPE_CLASSES = {
  home: "home",
  scenicSpot: "scenicSpot",
  food: "food",
  hotel: "hotel",
  traffic: "traffic",
};

const getSelectType = (pageType) =>
  ({
    [SELECT_TYPE_CLASSES.home]: HOME_SELECTED_OPTION,
    [SELECT_TYPE_CLASSES.scenicSpot]: HOME_SELECTED_OPTION,
    [SELECT_TYPE_CLASSES.food]: FOOD_SELECTED_OPTION,
    [SELECT_TYPE_CLASSES.hotel]: FOOD_SELECTED_OPTION,
    [SELECT_TYPE_CLASSES.traffic]: TRAFFIC_SELECTED_OPTION,
  }[pageType]);

const BannerForm = ({ $pageType }) => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const selectRefs = useRef([]);
  const navigate = useNavigate();

  const selectType = getSelectType($pageType);
  const exceptTraffic = $pageType !== "traffic";

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const [path, pathParam] = selectRefs.current;

    dispatch(setSearchKeyword(inputRef.current.value));
    navigate(`/${path.value}/${pathParam.value}`);
  };

  return (
    <FormContainer $pageType={$pageType} onSubmit={onSubmitHandler}>
      {exceptTraffic && (
        <input type="text" placeholder="搜尋關鍵字" ref={inputRef} />
      )}
      {selectType.map((selectedType, index) => {
        return (
          <Selected
            ref={selectRefs}
            index={index}
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
      />
    </FormContainer>
  );
};

export default BannerForm;
