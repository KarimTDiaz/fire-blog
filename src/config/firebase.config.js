// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBsqnEO5Kut0PpInYfPa7wtEhZtfTMV_Rk',
	authDomain: 'fir-blog-f9d08.firebaseapp.com',
	projectId: 'fir-blog-f9d08',
	storageBucket: 'fir-blog-f9d08.appspot.com',
	messagingSenderId: '897386201139',
	appId: '1:897386201139:web:e97de5faf21d9bd9c2e346',
	measurementId: 'G-2MNH1NEVC6'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Auth module
export const auth = getAuth(app);

// FireStore Module
const db = getFirestore(app);
export const blogCollectionReference = collection(db, 'blog');
