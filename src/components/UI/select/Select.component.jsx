//* which use this：
//* 1. bannerForm.component.jsx

import { useState, forwardRef } from "react";
import { SelectBar, Option, SelectWrap } from "./Select.styles";

const Selected = forwardRef(
  ({ selected, gridArea, index, ...otherProps }, ref) => {
    const [isHover, setIsHover] = useState(false);
    const { category, selectedOption } = selected;


    return (
      <SelectWrap gridArea={gridArea}>
        <SelectBar
          ref={(prop) => (ref.current[index] = prop)}
          title={category}
          required
          {...otherProps}
        >
          {selectedOption.map((option) => {
            return (
              <Option id={option.id} key={option.id} value={option.value}>
                {option.tcTitle}
              </Option>
            );
          })}
        </SelectBar>
      </SelectWrap>
    );
  }
);

export default Selected;

//todo 差 option hover 顏色；以及針對什麼都沒選擇時，到底要 fetch 什麼 api；
