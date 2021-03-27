import { changeField, submitForm, $credentials } from "./auth.model";

$credentials.on(changeField, (state, { key, value }) => ({
  ...state,
  [key]: value
}));
