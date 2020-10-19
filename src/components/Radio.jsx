import React from "react";
import styled from "styled-components";

const Span = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 14px;
  width: 14px;
  border: 2px solid ${(props) => props.borderColor};
  border-radius: 50%;

  &:after {
    content: "";
    position: absolute;
    display: none;
    background: ${(props) => props.bgColor};
  }
`;

const RadioButton = styled.input``;

const Label = styled.label`
  display: block;
  position: relative;
  padding-left: 26px;
  margin: 0 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.color};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover ${RadioButton} ~ ${Span} {
    background-color: #fff;
  }

  ${RadioButton} {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  ${RadioButton}:checked ~ ${Span}:after {
    display: block;
  }

  ${Span}:after {
    top: 3px;
    left: 3px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
`;

const Radio = (props) => {
  const { label, name, color, borderColor, bgColor, onChange, value } = props;

  return (
    <Label color={color}>
      {label}
      <RadioButton
        type="radio"
        name={name}
        onChange={(event) => onChange(event, value)}
        value={value}
      />
      <Span bgColor={bgColor} borderColor={borderColor} />
    </Label>
  );
};

Radio.defaultProps = {
  color: "gray",
  bgColor: "black",
  borderColor: "black",
};

export default Radio;
