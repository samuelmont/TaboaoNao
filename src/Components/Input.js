import React from "react";
import styled from "styled-components";

const ContainerInput = styled.View`
  display: flex;
  width: 100%;
`;

const Input = styled.TextInput`
  background-color: rgba(254, 254, 254, 0.65);
  border-radius: 10px;
  margin: 12px 25px;
  padding-left: 15px;
  height: 55px
`;

export const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <ContainerInput>
      <Input
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      />
    </ContainerInput>
  )
}
