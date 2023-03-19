//* which use this：
//* 1. bannerContent.component.jsx

import { useState, useEffect } from "react";
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
  const [isPcScreen, setIsPcScreen] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const inputRef = useRef();
  const selectRefs = useRef([]);
  const navigate = useNavigate();

  const selectType = getSelectType($pageType);
  const exceptTraffic = $pageType !== "traffic";

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const [path, pathParam] = selectRefs.current;
    if (isPcScreen <= 768) {
      navigate(`/${path.value}/${pathParam.value}`);
    } else {
      dispatch(setSearchKeyword(inputRef.current.value));
      navigate(`/${path.value}/${pathParam.value}`);
    }
  };
  //* 點擊搜尋後將 ref 的資訊傳至 reducer 裡面，並根據選擇的類別及城市切換到相對應的路由

  useEffect(() => {
    const screenWideChange = () => {
      setIsPcScreen(window.innerWidth);
    };

    window.addEventListener("resize", screenWideChange);

    return () => {
      window.removeEventListener("resize", screenWideChange);
    };
  }, [isPcScreen]);
  // 偵測螢幕尺寸，以判斷是否顯示 input

  return (
    <>
      <FormContainer $pageType={$pageType} onSubmit={onSubmitHandler}>
<<<<<<< HEAD
        {exceptTraffic && isPcScreen > 768 && (
=======
        {exceptTraffic && isPcScreen > 748 && (
>>>>>>> 73a4e75223032dc30051c85183b71a5f8297f62b
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
    </>
  );
};

export default BannerForm;
