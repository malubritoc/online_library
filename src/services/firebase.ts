import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { ProductType } from "@/@types/Product";

export const firebaseConfig = {
  apiKey: "AIzaSyB1tgR8etnTCnbHcf_x_5dNWZLl-349x3g",
  authDomain: "online-library-865eb.firebaseapp.com",
  projectId: "online-library-865eb",
  storageBucket: "online-library-865eb.appspot.com",
  messagingSenderId: "550623443469",
  appId: "1:550623443469:web:b4b75a467b64377b3a3344",
  measurementId: "G-BGE8LK7JX8"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const productsCollectionRef = collection(db, "books");
const usersCollectionRef = collection(db, "users");

export async function getAllProducts() {
  return getDocs(productsCollectionRef).then((querySnapshot) => {
    let data = <any>[];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    return data;
  });
}

export async function getAllUsers() {
  return getDocs(usersCollectionRef).then((querySnapshot) => {
    let data = <any>[];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    return data;
  });
}