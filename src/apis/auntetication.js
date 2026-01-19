import CryptoJS from "crypto-js";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { fireDB } from "../firebaseConfig";

export const LoginUser = async (payload) => {
  try {
    const qry = query(
      collection(fireDB, "users"),
      where("email", "==", payload.email),
    );
    const querySnapshot = await getDocs(qry);
    if (querySnapshot.empty) {
      return {
        success: false,
        message: "User not found",
      };
    } else {
      const snapshotsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const user = snapshotsData[0];
      const decryptedPassword = CryptoJS.AES.decrypt(
        user.password,
        import.meta.env.VITE_ENCRYPTION_KEY,
      ).toString(CryptoJS.enc.Utf8);
      if (decryptedPassword === payload.password) {
        return {
          success: true,
          message: "Login successful",
          data: {
            ...user,
            password: "",
          },
        };
      } else {
        return {
          success: false,
          message: "Incorrect password",
        };
      }
    }
  } catch (error) {}
};

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
