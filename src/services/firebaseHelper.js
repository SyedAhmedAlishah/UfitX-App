import * as firebase from "firebase";
import "@firebase/firestore";
import "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCc9uSC7JjcWxblduEBx3jm0yvNq4FZZbo",
  authDomain: "rn-app-af35d.firebaseapp.com",
  projectId: "rn-app-af35d",
  storageBucket: "rn-app-af35d.appspot.com",
  messagingSenderId: "188391277806",
  appId: "1:188391277806:web:14b64b72e28c4419015fff",
};

if (firebase.apps.length > 0 === false) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
