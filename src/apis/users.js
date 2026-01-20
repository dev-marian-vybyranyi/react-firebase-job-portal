import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import { fireDB } from "../firebaseConfig";
import {
  SetReadNotifications,
  SetUnreadNotifications,
} from "../redux/notifications";
import store from "../redux/store";

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

export const getAllUsers = async () => {
  try {
    const users = [];
    const querySnapshot = await getDocs(collection(fireDB, "users"));
    querySnapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });
    return {
      success: true,
      data: users,
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};

export const getUserNofications = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  try {
    const q = query(collection(fireDB, "users", user.id, "notifications"));
    onSnapshot(q, (querySnapshot) => {
      const notifications = [];
      querySnapshot.forEach((doc) => {
        notifications.push({ id: doc.id, ...doc.data() });
      });

      const readNotifications = notifications.filter(
        (notification) => notification.status === "read",
      );
      const unreadNotifications = notifications.filter(
        (notification) => notification.status === "unread",
      );
      store.dispatch(SetReadNotifications(readNotifications));
      store.dispatch(SetUnreadNotifications(unreadNotifications));
    });

    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};

export const changeNotificationStatus = async (id, status) => {
  const user = JSON.parse(localStorage.getItem("user"));
  try {
    await updateDoc(doc(fireDB, "users", user.id, "notifications", id), {
      status,
    });
    return {
      success: true,
      message: "Notification status changed",
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};
