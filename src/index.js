import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "./index.css";

firebase.initializeApp({
  apiKey: "AIzaSyB_Dr30Zk46yvrFiQ6qCCoJN87uL8eZJyY",
  authDomain: "weather-with-chat-app.firebaseapp.com",
  projectId: "weather-with-chat-app",
  storageBucket: "weather-with-chat-app.appspot.com",
  messagingSenderId: "946258589850",
  appId: "1:946258589850:web:534e08bab54a0a16e5c723",
  measurementId: "G-NP2T4F7ZVF",
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider
    value={{
      firebase,
      auth,
      firestore,
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
