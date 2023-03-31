//* which use this：
//* 1. bannerContent.component.jsx

import { useState, useEffect } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FormContainer, Input, SelectBlock } from "./bannerForm.styles";
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
    if (isPcScreen < 768) {
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
        {exceptTraffic && isPcScreen >= 768 && (
          <Input type="text" placeholder="搜尋關鍵字" ref={inputRef} />
        )}
        <SelectBlock $pageType={$pageType}>
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

          {(isPcScreen < 768 ||
            isPcScreen >= 1024 ||
            $pageType !== "traffic") && (
            <Button
              type="submit"
              gridArea="btn"
              buttonType={
                isPcScreen >= 768
                  ? BUTTON_TYPE_CLASSES.search
                  : BUTTON_TYPE_CLASSES.mobileInBanner
              }
            />
          )}
        </SelectBlock>
      </FormContainer>
    </>
  );
};

export default BannerForm;
