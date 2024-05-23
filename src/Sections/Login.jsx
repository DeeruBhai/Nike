import React, { useState } from "react";
import { loginUser } from "../fb/firebaseFunctions";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { headerLogo } from "../assets/images";
function Login() {
  const [email, setEmail] = useState();
  const [pass, setpass] = useState();
  const navigate = useNavigate();
  const handlelogin = async (e) => {
    e.preventDefault();
    const logRes = await loginUser(email, pass);
    console.log("Log in", logRes);

    if (logRes != null) {
      navigate("/");
      localStorage.setItem("uid", logRes.uid);
      // console.log("Logged in", logRes.uid);
    } else {
      console.error("login failed", logRes);
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
        <div className="text-4xl font-palanquin font-medium">Login</div>
        <form
          onSubmit={handlelogin}
          className="flex flex-col justify-center gap-5 w-[23%]"
        >
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
          <button className="rounded-xl bg-coral-red py-1">Login</button>
        </form>
        <div className="flex flex-row gap-1">
          Dont have account?{" "}
          <div onClick={() => navigate("/signup")} className="text-blue-800">
            Register
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
