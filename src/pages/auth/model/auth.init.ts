import { sample, forward, guard } from "effector";

import { service } from "features/common/authentication";
import { historyPush } from "features/common/routing";
import { $user } from "features/user/model";

import {
  changeField,
  submit,
  authFx,
  $credentials,
  $error,
  AuthPageGate
} from "./auth.model";

authFx.use(async ({ email, password }) => {
  const data = await service.auth().signInWithEmailAndPassword(email, password);

  return data.user;
});

$user.on(authFx.done, (state, { result }) => result);

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

guard({
  source: $user,
  clock: AuthPageGate.open,
  filter: (user) => Boolean(user?.email),
  target: historyPush.prepend(() => "/profile")
});
