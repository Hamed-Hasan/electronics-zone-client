import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
   
    // conceptual-react-auth 
    apiKey: "AIzaSyDfSDIUokmqc5CxXwSJvhUoDYcdBiVZ9n0",
  authDomain: "node-mongodb-jwt.firebaseapp.com",
  projectId: "node-mongodb-jwt",
  storageBucket: "node-mongodb-jwt.appspot.com",
  messagingSenderId: "162211539386",
  appId: "1:162211539386:web:5be7a6be00503e25da9583"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
