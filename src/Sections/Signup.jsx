import React, { useState } from "react";
import createUser from "../fb/firebaseFunctions";
import { Link, useNavigate } from "react-router-dom";
import { headerLogo } from "../assets/images";

function Signup() {
  const [email, setEmail] = useState();
  const [pass, setpass] = useState();
  const [Uname, setUname] = useState();
  const navigate = useNavigate();
  const handlesignup = async (e) => {
    e.preventDefault();
    const createRes = await createUser(email, pass, Uname);
    if (createRes != null) {
      navigate("/login");
      console.log("Signed up", createRes);
    } else {
      console.error("Sign up failed", createRes);
    }
  };
  return (
    <div className="w-full flex flex-col h-[100vh]">
      <div className="w-full px-8 py-8">
        <Link to="/">
          <img src={headerLogo} alt="headerlogo" width={130} height={29} />
        </Link>
      </div>
      <div className="w-full h-full  flex justify-center items-center flex-col gap-8">
        <div className="text-4xl font-palanquin font-medium">Register</div>
        <form
          onSubmit={handlesignup}
          className="flex flex-col justify-center gap-5 w-[23%]"
        >
          <div className="flex flex-row justify-between">
            <label>Name</label>

            <input
              type="text"
              name="uname"
              className="border-[1px] border-slate-500 outline-none rounded-lg"
              onChange={(e) => {
                setUname(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-row justify-between ">
            <label>Email ID</label>
            <input
              type="email"
              name="email"
              className="border-[1px] border-slate-500 outline-none rounded-lg ml-2"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>{" "}
          <div className="flex flex-row justify-between">
            <label>Password</label>
            <input
              type="password"
              name="pass"
              className="border-[1px] border-slate-500 outline-none rounded-lg"
              onChange={(e) => {
                setpass(e.target.value);
              }}
            />
          </div>
          <button className="rounded-xl bg-coral-red py-1">signup</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
