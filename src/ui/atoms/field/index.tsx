import * as React from "react";
import styled from "styled-components";
import { Event } from "effector";

const Input = styled.input``;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

type FieldProps = {
  name: string;
  label: string;
  type: string;
  handleChange: Event<React.ChangeEvent<HTMLInputElement>>;
};

export const Field = ({ name, label, type, handleChange }: FieldProps) => {
  return (
    <Label htmlFor={name}>
      <span>{label}</span>
      <Input id={name} name={name} type={type} onChange={handleChange} />
    </Label>
  );
};
