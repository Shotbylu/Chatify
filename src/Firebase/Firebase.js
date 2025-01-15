// Import the functions you need from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";  // Import auth from the modular SDK
import { getFirestore } from "firebase/firestore";  // Import firestore from the modular SDK
import { getStorage } from "firebase/storage";  // Import storage from the modular SDK

// Chatterbox Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIWc0F9A2XsT2ewg-NwhVsFIc7hi97QyQ",
  authDomain: "chatterbox-1409a.firebaseapp.com",
  projectId: "chatterbox-1409a",
  storageBucket: "chatterbox-1409a.firebasestorage.app",
  messagingSenderId: "874054559919",
  appId: "1:874054559919:web:87c58b8673ee1b9ec7cc5a",
  measurementId: "G-639MM6LFW2"
};

// Initialize Firebase and Analytics
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase services (auth, firestore, storage)
const auth = getAuth(app);  // Get the authentication service
const firestore = getFirestore(app);  // Get the firestore service
const storage = getStorage(app);  // Get the storage service

// Export the services for use in other parts of your app
export { auth, firestore, storage };
export default app;
