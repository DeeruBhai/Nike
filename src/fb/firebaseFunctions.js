import { auth, db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const createUser = async (email, pass, Uname) => {
  try {
    const createResponse = await createUserWithEmailAndPassword(
      auth,
      email,
      pass
    );
    console.log("User Crreated!", createResponse);
    const dataInsert = await InsertDataWithUid(
      "users",
      { email, Uname },
      createResponse.user.uid
    );
  } catch (error) {
    console.log("Create user error", error);
  }
};
export const loginUser = async (email, pass) => {
  try {
    const createResponse = await signInWithEmailAndPassword(auth, email, pass);
    console.log("User Logged in!", createResponse);
  } catch (error) {
    console.log("login error", error);
  }
};
const InsertDataWithUid = async (collectionName, data, uid) => {
  // console.log("User ", collectionName, data, uid);
  try {
    const userRef = doc(db, collectionName, uid);
    await setDoc(userRef, data);
    const docSnapshot = await getDoc(userRef);
    if (docSnapshot.exists()) {
      const docData = { user_id: docSnapshot.id, ...docSnapshot.data() };
      // console.log(docSnapshot, "v", docData);

      // const docData = docSnapshot.data();
      return docData;
    } else {
      console.error("Document does not exist");
      return null;
    }
  } catch (error) {
    console.error("Error adding document:", error);
    return error;
  }
};
export default createUser;
