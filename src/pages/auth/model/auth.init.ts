import { sample } from "effector";

import { service } from "features/common/authentication";

import { changeField, submitForm, auth, $credentials } from "./auth.model";

auth.use(async ({ email, password }) => {
  return service.auth().signInWithEmailAndPassword(email, password);
});

$credentials.on(changeField, (state, { key, value }) => ({
  ...state,
  [key]: value
}));

sample({
  source: $credentials,
  clock: submitForm,
  target: auth
});
