//* Parent： bannerForm.component.jsx

import { forwardRef } from "react";
import { SelectBar, Option, SelectWrap } from "./Select.styles";

const SortSelected = forwardRef(
  ({ selected, gridArea, index, category }, ref) => {
    const { selectedOption } = selected;

    return (
      <SelectWrap gridArea={gridArea}>
        <SelectBar ref={(prop) => (ref.current[index] = prop)} title={category}>
          {selectedOption.map((option) => {
            return (
              <Option id={option.id} key={option.id} value={option.id}>
                {option.tcTitle}
              </Option>
            );
          })}
        </SelectBar>
      </SelectWrap>
    );
  }
);

export default SortSelected;

//* 差 option hover 顏色
