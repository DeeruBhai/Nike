import React, { useState } from "react";
import { loginUser } from "../fb/firebaseFunctions";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState();
  const [pass, setpass] = useState();
  const handlelogin = async (e) => {
    e.preventDefault();
    const logRes = await loginUser(email, pass);
    console.log("Logged in", logRes, auth.currentUser);
  };
  return (
    <>
      <form onSubmit={handlelogin}>
        <label>email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>password</label>
        <input
          type="password"
          name="pass"
          onChange={(e) => {
            setpass(e.target.value);
          }}
        />
        <button>login</button>
      </form>
    </>
  );
}

export default Login;
