import React, { useState } from "react";
import createUser from "../firebase/firebaseFunctions";

function Signup() {
  const [email, setEmail] = useState();
  const [pass, setpass] = useState();
  const handlesignup = async (e) => {
    e.preventDefault();
    const res = await createUser(email, pass);
    console.log("----", res);
  };
  return (
    <>
      <form onSubmit={handlesignup}>
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
        <button>signup</button>
      </form>
    </>
  );
}

export default Signup;
