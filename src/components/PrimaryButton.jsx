import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => (props.primary ? "#850112" : "white")};
  color: ${(props) => (props.primary ? "white" : "#850112")};
  font-size: 14px;
  font-weight: 600;
  margin: 8px;
  padding: 0 8px;
  border: 2px solid #850112;
  border-radius: 8px;
  height: 40px;
  cursor: pointer;
  outline: none;

  &:hover {
    background: white;
    color: #850112;
  }

  &:disabled {
    background: white;
    border: 2px solid #dddddd;
    color: #9a6969;
    cursor: not-allowed;
  }
`;

const PrimaryButton = (props) => {
  const { label, primary, onClick, disabled } = props;

  return (
    <Button primary={primary} onClick={onClick} disabled={disabled}>
      {label}
    </Button>
  );
};

export default PrimaryButton;
