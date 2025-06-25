// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "portfolio-blog-20eaf.firebaseapp.com",
  projectId: "portfolio-blog-20eaf",
  storageBucket: "portfolio-blog-20eaf.firebasestorage.app",
  messagingSenderId: "235345221450",
  appId: "1:235345221450:web:a2c4d75076ccf920f813b3",
  measurementId: "G-4DDVGRD51X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);