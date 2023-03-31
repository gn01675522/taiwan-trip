import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Container from "../../components/UI/container/container.component";
import Button from "../../components/UI/button/button.component";

import {
  SearchBlock,
  Divider,
  SearchInput,
  SearchHistoryBlock,
  ClearHistoryButton,
  HistorySheet,
  HistoryOption,
} from "./search.styles";

import { PAGE_TYPE } from "../../dummy_data/DUMMY_DATA";
import { BUTTON_TYPE_CLASSES } from "../../components/UI/button/button.component";

import { setSearchKeyword } from "../../store/search/search.actions";

const Search = () => {
  const [historyKeyword, setHistoryKeyword] = useState([]);
  const inputRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSearchHandler = () => {
    setHistoryKeyword([...historyKeyword, inputRef.current.value]);
    dispatch(setSearchKeyword(inputRef.current.value));
    navigate(`/scenicSpot/${inputRef.current.value}`);
  };
  //todo 點擊搜尋後先儲存關鍵字，並且 dispatch 關鍵字並抓取資料，接著導向相對應路由；目前卡在 App 路由設定有衝突，待解決。

  const onClearHistoryHandler = () => {
    setHistoryKeyword([]);
  };
  //* 清除搜尋紀錄
  return (
    <Container pageType={PAGE_TYPE.search}>
      <SearchBlock>
        <SearchInput placeholder="請輸入景點關鍵字" ref={inputRef} />
        <Button
          buttonType={BUTTON_TYPE_CLASSES.search}
          onClick={onSearchHandler}
        />
      </SearchBlock>
      <Divider />
      <SearchHistoryBlock>
        <ClearHistoryButton onClick={onClearHistoryHandler}>
          清除搜尋紀錄
        </ClearHistoryButton>
        <HistorySheet>
          {historyKeyword.map((keyword, index) => (
            <HistoryOption key={index} onClick={onSearchHandler}>
              {keyword}
            </HistoryOption>
          ))}
        </HistorySheet>
      </SearchHistoryBlock>
    </Container>
  );
};

export default Search;
