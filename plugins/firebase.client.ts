import { initializeApp } from "firebase/app";

export default defineNuxtPlugin(async () => {
  const {
    public: { FIREBASE_API_KEY },
  } = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: "storage-example-d144f.firebaseapp.com",
    projectId: "storage-example-d144f",
    storageBucket: "storage-example-d144f.appspot.com",
    messagingSenderId: "395502496933",
    appId: "1:395502496933:web:d41b039bb2ccd569c6b14c",
    measurementId: "G-EY96M53MYQ",
  };

  initializeApp(firebaseConfig);
});
