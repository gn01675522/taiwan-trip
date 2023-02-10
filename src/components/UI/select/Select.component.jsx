//* Parent： bannerForm.component.jsx

import { SelectBar, Option, SelectWrap } from "./Select.styles";

const SortSelected = ({ selected, gridArea }) => {
  const { selectedOption } = selected;

  return (
    <SelectWrap gridArea={gridArea}>
      <SelectBar>
        {selectedOption.map((option) => {
          return (
            <Option id={option.id} key={option.id} name={option.id}>
              {option.tcTitle}
            </Option>
          );
        })}
      </SelectBar>
    </SelectWrap>
  );
};

export default SortSelected;

//* 差 option hover 顏色
