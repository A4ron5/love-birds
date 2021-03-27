import * as React from "react";
import styled from "styled-components";

const Input = styled.input``;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

type FieldProps = {
  id: string;
  label: string;
  type: string;
  handleChange: () => { [key: string]: string };
};

export const Field = ({ id, label, type, handleChange }: FieldProps) => {
  return (
    <Label id={id}>
      <span>{label}</span>
      <Input id={id} type={type} onChange={handleChange} />
    </Label>
  );
};
