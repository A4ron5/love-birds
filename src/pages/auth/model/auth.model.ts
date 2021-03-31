import { ChangeEvent, FormEvent } from "react";
import { createGate } from "effector-react";
import firebase from "firebase/app";

import { root } from "lib/effector-root";

type UserCredentials = {
  email: string;
  password: string;
};

type ChangeField = {
  key: string;
  value: string;
};

type User = firebase.User | null;

type Error = firebase.FirebaseError | null;

export const submit = root.createEvent<FormEvent<UserCredentials>>();
export const changeField = root.createEvent<ChangeField>();
export const handleChangeField = changeField.prepend<
  ChangeEvent<HTMLInputElement>
>((e) => ({
  key: e.target.name,
  value: e.target.value
}));

export const authFx = root.createEffect<UserCredentials, User, Error>();

export const $credentials = root.createStore<UserCredentials>({
  email: "",
  password: ""
});

export const $error = root.createStore<Error>(null);

export const AuthPageGate = createGate();

submit.watch((e) => e.preventDefault());
