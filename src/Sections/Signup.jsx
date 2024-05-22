import React, { useState } from "react";
import createUser from "../fb/firebaseFunctions";

function Signup() {
  const [email, setEmail] = useState();
  const [pass, setpass] = useState();
  const [Uname, setUname] = useState();
  const handlesignup = async (e) => {
    e.preventDefault();
    const createRes = await createUser(email, pass, Uname);
    console.log("Signed up", createRes);
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
        <input
          type="text"
          name="uname"
          onChange={(e) => {
            setUname(e.target.value);
          }}
        />
        <button>signup</button>
      </form>
    </>
  );
}

export default Signup;
