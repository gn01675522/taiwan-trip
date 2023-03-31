import styled from "styled-components";

export const SearchBlock = styled.div`
  display: grid;
  height: min-content;
  grid-template-rows: 40px;
  grid-template-columns: auto 40px;
  grid-gap: 6px;
  margin-bottom: 24px;
`;

export const Divider = styled.div`
  position: absolute;
  width: 100vw;
  height: 1px;
  left: 0;
  background: #d2d2d2;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 6px;
  padding: 8.5px 24px;
  font-size: 16px;
  line-height: 40px;
  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    color: #d2d2d2;
    font-family: "Noto Sans TC", sans-serif;
  }
  box-shadow: 0px 2px 4px rgba(13, 11, 12, 0.2);
`;

export const SearchHistoryBlock = styled.div`
  width: 100%;
  height: 100%;
  padding: 44px 0;
`;

export const ClearHistoryButton = styled.button`
  display: block;
  position: absolute;
  height: min-content;
  top: 111px;
  right: 16px;
  font-size: 14px;
  font-weight: 400;
  color: #ff1d6c;
  background: none;
  border: none;
  cursor: pointer;
`;

export const HistorySheet = styled.div`
  display: flex;
  width: 100%;
  min-height: 205px;
  flex-direction: column;
  gap: 9px;
  padding: 11px 10px;
  border-radius: 6px;
  background: white;
`;

export const HistoryOption = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #acacac;
  cursor: pointer;
`;
