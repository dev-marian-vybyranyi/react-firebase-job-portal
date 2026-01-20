import { doc, getDoc, updateDoc } from "firebase/firestore";
import { fireDB } from "../firebaseConfig";

export const updateUserProfile = async (payload) => {
  const user = JSON.parse(localStorage.getItem("user"));
  try {
    await updateDoc(doc(fireDB, "users", user.id), payload);
    return {
      success: true,
      message: "User updated successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}; 
 
export const getUserProfile = async (id) => {
  try {
    const docRef = doc(fireDB, "users", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return {
        success: true,
        data: docSnap.data(),
      };
    } else {
      return {
        success: false,
        message: "User not found",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};
