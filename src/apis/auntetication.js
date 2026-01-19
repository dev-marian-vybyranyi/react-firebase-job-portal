import CryptoJS from "crypto-js";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { fireDB } from "../firebaseConfig";

export const RegisterUser = async (payload) => {
  try {
    const qry = query(
      collection(fireDB, "users"),
      where("email", "==", payload.email),
    );
    const querySnapshot = await getDocs(qry);
    if (querySnapshot.size > 0) {
      return {
        success: false,
        message: "Email already exists",
      };
    }

    const encryptedPassword = CryptoJS.AES.encrypt(
      payload.password,
      import.meta.env.VITE_ENCRYPTION_KEY,
    ).toString();
    payload.password = encryptedPassword;

    const response = await addDoc(collection(fireDB, "users"), payload);
    return {
      success: true,
      message: "User Registered Successfully",
      data: response,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
      data: null,
    };
  }
};
