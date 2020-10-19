import React from "react";
import styled from "styled-components";

const Select = styled.select`
  background-color: white;
  border: 1px solid gray;
  border-radius: 4px;
  display: inline-block;
  font-family: source code pro;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5em;
  padding: 0.5em 3.5em 0.5em 1em;
  outline: none;
  box-sizing: border-box;
  appearance: none;
  border-color: ${(props) => props.borderColor};
  color: ${(props) => props.color};
  height: 56px;
  cursor: pointer;
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 20px) calc(1em + 10px),
    calc(100% - 15px) calc(1em + 10px), calc(100% - 2.5em) 1em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
  &:focus {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  }
`;

const Dropdown = (props) => {
  const { options, borderColor, color, onChange } = props;
  return (
    <Select borderColor={borderColor} color={color} onChange={onChange}>
      {options.map((option) => (
        <option key={`option-${option.id}`} value={option.value}>
          {option.value}
        </option>
      ))}
    </Select>
  );
};

Dropdown.defaultProps = {
  borderColor: "black",
  color: "black",
};

export default Dropdown;
