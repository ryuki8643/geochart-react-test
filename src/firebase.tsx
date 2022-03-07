import firebase from "firebase/compat";
// 認証周りやDB周りで必要なためimportしておく
import 'firebase/auth';
import 'firebase/database';
import {useMemo} from "react";

// コピーしてきたfirebaseConfigそのまま
// 元がvarで宣言されているので、constに変更
const firebaseConfig = {
    apiKey: "AIzaSyC04w9egokL9tYPGerCPgrl45u2ZlaWngk",
    authDomain: "gdsc-keio-solution2.firebaseapp.com",
    databaseURL: "https://gdsc-keio-solution2-default-rtdb.firebaseio.com",
    projectId: "gdsc-keio-solution2",
    storageBucket: "gdsc-keio-solution2.appspot.com",
    messagingSenderId: "799528708864",
    appId: "1:799528708864:web:ed985380233e74f44e21e5",
    measurementId: "G-X058RR7GVR"
    // コピペ
};

firebase.initializeApp(firebaseConfig);
export { firebase };
// カスタムフックにしておく

