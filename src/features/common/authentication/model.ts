import firebase from "firebase";
import "firebase/auth";

const config = {
  apiKey: process.env.firebaseApiKey,
  authDomain: process.env.firiebaseAuthDomain,
  projectId: process.env.firebaseProjectId,
  storageBucket: process.env.firebaseStorageBucket,
  messagingSenderId: process.env.firebaseMessagingSenderId,
  appId: process.env.firebaseAppId
};

firebase.initializeApp(config, "love-birds");

export const service = {
  auth: firebase.auth
};
