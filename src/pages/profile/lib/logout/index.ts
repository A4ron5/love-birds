import { signOut } from "firebase/auth";

import { service } from "features/common/authentication";

export const logout = async () => {
  try {
    return await signOut(service.auth);
  } catch (error) {
    throw new Error(error);
  }
};
