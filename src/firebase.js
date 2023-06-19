import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
const firebaseConfig = {
        apiKey: "AIzaSyAkKCOPprKRaTdbq7pL8S7FbdASo4QGMEw",
        authDomain: "fir-react-image-uploads-5c8a3.firebaseapp.com",
        projectId: "fir-react-image-uploads-5c8a3",
        storageBucket: "fir-react-image-uploads-5c8a3.appspot.com",
        messagingSenderId: "865046047660",
        appId: "1:865046047660:web:7bfa3c5846c7cc1d062809",
        
      };
      

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);