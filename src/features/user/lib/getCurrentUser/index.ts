import { onAuthStateChanged, User } from "firebase/auth";
import { service } from "features/common/authentication";

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      service.auth,
      (user) => {
        unsubscribe();
        resolve(user);
      },
      reject
    );
  });
};
