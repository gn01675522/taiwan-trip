//* Parent： bannerForm.component.jsx

import { SelectInput, Option, SelectWrap } from "./Select.styles";

const SortSelected = ({ selected }) => {
  const { selectedOption } = selected;

  return (
    <SelectWrap>
      <SelectInput>
        {selectedOption.map((option) => {
          return (
            <Option id={option.id} key={option.id} name={option.id}>
              {option.tcTitle}
            </Option>
          );
        })}
      </SelectInput>
    </SelectWrap>
  );
};

export default SortSelected;

//* 差 option hover 顏色
