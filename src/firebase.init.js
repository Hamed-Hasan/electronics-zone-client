import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
   
    // electronics zone
    apiKey: "AIzaSyDPUaz7MhLrDZmZjra68FEb_0Zgh0bBNT8",
    authDomain: "electronics-zone.firebaseapp.com",
    projectId: "electronics-zone",
    storageBucket: "electronics-zone.appspot.com",
    messagingSenderId: "244874783397",
    appId: "1:244874783397:web:6c3a6654a7fde560f6fb4c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
