import { doc, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const createUser = async (email, password) => {
  try {
    const signedup = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(signedup, "signedup");
  } catch {}
};
export default createUser;
