import firebase from "firebase";

export const logout = async () => {
  try {
    return await firebase.auth().signOut();
  } catch (error) {
    throw new Error(error);
  }
};
