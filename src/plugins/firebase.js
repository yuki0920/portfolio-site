import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAJHm7fKBRWInB0axN6rzQrzT9AFvi262M",
  authDomain: "portfolio-yuki0920.firebaseapp.com",
  databaseURL: "https://portfolio-yuki0920.firebaseio.com",
  projectId: "portfolio-yuki0920",
  storageBucket: "portfolio-yuki0920.appspot.com",
  messagingSenderId: "128360875758",
  appId: "1:128360875758:web:7ee19262a87918b91bd5ff",
  measurementId: "G-LZFP9FJH72"

};
firebase.initializeApp(config);
export const functions = firebase.functions();

// NOTE: プロジェクトの概要 -> プロジェクトを設定
// Reference
// var firebaseConfig = {
//   apiKey: "api-key",
//   authDomain: "project-id.firebaseapp.com",
//   databaseURL: "https://project-id.firebaseio.com",
//   projectId: "project-id",
//   storageBucket: "project-id.appspot.com",
//   messagingSenderId: "sender-id",
//   appID: "app-id",
// };
