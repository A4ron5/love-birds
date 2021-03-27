import { ChangeEvent } from "react";
import { root } from "lib/effector-root";

type UserCredentials = {
  email: string;
  password: string;
};

type ChangeField = {
  key: string;
  value: string;
};

const submitForm = root.createEvent<UserCredentials>();
const changeField = root.createEvent<ChangeField>();
const handleChangeField = changeField.prepend<ChangeEvent<HTMLInputElement>>(
  (e) => ({
    key: e.target.name,
    value: e.target.value
  })
);

const $credentials = root.createStore<UserCredentials>({
  email: "",
  password: ""
});

export { submitForm, changeField, handleChangeField, $credentials };
