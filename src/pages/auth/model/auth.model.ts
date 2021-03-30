import { ChangeEvent, FormEvent } from "react";
import { root } from "lib/effector-root";

type UserCredentials = {
  email: string;
  password: string;
};

type ChangeField = {
  key: string;
  value: string;
};

const submit = root.createEvent<FormEvent<UserCredentials>>();
const changeField = root.createEvent<ChangeField>();
const handleChangeField = changeField.prepend<ChangeEvent<HTMLInputElement>>(
  (e) => ({
    key: e.target.name,
    value: e.target.value
  })
);

const auth = root.createEffect<UserCredentials, any>();

const $credentials = root.createStore<UserCredentials>({
  email: "",
  password: ""
});

submit.watch((e) => e.preventDefault());

export { submit, changeField, handleChangeField, auth, $credentials };
