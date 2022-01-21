import React from "react";
import Select from "react-select";

const SelectBox = ({ options, placeholder, single }) => {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      width: state.selectProps.width,
      color: state.selectProps.menuColor,
    }),

    menuList: (provided, state) => ({
      paddingTop: 0,
      paddingBottom: 0,
      hover: "red",
      overflowY: "scroll",
      background: "#FDFEFF",
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),

    placeholder: (provided, state) => ({
      color: "#000",
      position: "relative",
      bottom: ".8rem",
    }),

    control: (base, state) => ({
      ...base,
      // border: state.isFocused ? 0 : 0,
      boxShadow: state.isFocused ? 0 : 0,
      "&:hover": {
        border: state.isFocused ? 0 : 0,
      },
      border: "none",
      background: "#F6F7F9",
      color: "#666666",
      opacity: "0.8",
    }),
  };
  return (
    <>
      <Select
        maxMenuHeight={5}
        options={options}
        styles={customStyles}
        isSearchable={false}
        className="select-field"
        placeholder={single ? placeholder : single}
        value={single}
        // onChange={(value) => setSingle(value.value)}
        autoFocus={true}
      />
    </>
  );
};

export default SelectBox;
