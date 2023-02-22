import { useState, createContext } from "react";

export const SelectContext = createContext({
  selectType: null,
  setSelectType: () => {},
});

export const SelectProvider = ({ children }) => {
  const [selectType, setSelectType] = useState(null);
  const value = { selectType, setSelectType };

  return (
    <SelectContext.Provider value={value}>{children}</SelectContext.Provider>
  );
};
