import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: process.env.firebaseApiKey,
  authDomain: process.env.firiebaseAuthDomain,
  projectId: process.env.firebaseProjectId,
  storageBucket: process.env.firebaseStorageBucket,
  messagingSenderId: process.env.firebaseMessagingSenderId,
  appId: process.env.firebaseAppId
};

firebase.initializeApp(config);

export const service = {
  auth: firebase.auth
};
