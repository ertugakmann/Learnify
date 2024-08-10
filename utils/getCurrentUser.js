import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@lib/firebase";

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe();
        resolve(user || null);
      },
      reject
    );
  });
};

export default getCurrentUser;
