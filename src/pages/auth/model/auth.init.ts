import { sample, forward } from "effector";
import { signInWithEmailAndPassword } from "firebase/auth";

import { service } from "features/common/authentication";
import { historyPush } from "features/common/routing";

import {
  changeField,
  submit,
  authFx,
  $credentials,
  $error
} from "./auth.model";

authFx.use(async ({ email, password }) => {
  const data = await signInWithEmailAndPassword(service.auth, email, password);

  return data.user;
});

$credentials.on(changeField, (state, { key, value }) => ({
  ...state,
  [key]: value
}));

$error.on(authFx.fail, (state, { error }) => error).reset(authFx);

sample({
  source: $credentials,
  clock: submit,
  target: authFx
});

forward({
  from: authFx.done,
  to: historyPush.prepend(() => "/")
});
