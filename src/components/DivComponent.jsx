import React from "react";
import styled from "styled-components";
import TextComponent from "./TextComponent";

const MainDiv = styled.div`
  padding: 20px;
  background-color: black;
  color: white;
  width: 200px;
  height: 200px;
`;

const MainDiv2 = styled(MainDiv)`
  background-color: blue;
  width: 300px;
  height: 300px;
`;

const DivComponent = () => {
  return (
    <>
      <MainDiv>
        <TextComponent color="yellow" size="25px">
          Este es mi primer texto
        </TextComponent>
      </MainDiv>
      <MainDiv2>
        <TextComponent color="red" size="15px">
          Este es mi segundo texto
        </TextComponent>
      </MainDiv2>
    </>
  );
};

export default DivComponent;
