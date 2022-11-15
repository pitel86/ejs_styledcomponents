import React from "react";
import styled from "styled-components";

const InputStyled = styled.input.attrs((props) => ({
  type: props.type,
  value: props.value,
  placeholder: props.placeholder,
}))`
  font-size: 20px;
  background-color: grey;
  color: black;
  padding: 20px;
`;

const InputComponent = (props) => {
  return <InputStyled {...props}></InputStyled>;
};

export default InputComponent;
