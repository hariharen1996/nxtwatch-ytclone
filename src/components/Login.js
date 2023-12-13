import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const theme = useSelector((store) => store.config.isTheme);
  const [login, setLogin] = useState({ email: "", password: "" });
  const [authError, setAuthError] = useState(null);
  const navigate = useNavigate();
  const authuser = useSelector((store) => store?.users);

  const handleLogin = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, login.email, login.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;

        if (!login.email) {
          setAuthError("Please enter your email");
        } else if (errorCode === "auth/invalid-email") {
          setAuthError("Your email id is not valid");
        } else if (!login.password) {
          setAuthError("Please enter your password");
        } else if (errorCode === "auth/missing-password") {
          setAuthError("Please enter your password");
        } else {
          setAuthError("Invalid Login Cerdentials");
        }
      });
  };

  return authuser ? (
    <Navigate to="/" />
  ) : (
    <>
      <div className="w-full flex justify-center items-center font-serif">
        <div className="w-96">
          <form
            onSubmit={loginSubmit}
            className={`mx-2 p-5 ${theme ? "bg-[#f1f1f1]" : "bg-[#333]"}`}
          >
            <h1
              className={`${
                !theme ? "text-white" : "text-black"
              } text-2xl my-2 text-start`}
            >
              Login
            </h1>
            <div>
              {authError && <p className="text-[#ff0b37] ">*{authError}</p>}
            </div>
            <input
              className="w-full p-2 rounded-md my-2"
              type="text"
              name="email"
              placeholder="enter email..."
              value={login.email}
              onChange={handleLogin}
            />
            <input
              className="w-full p-2 rounded-md my-2"
              type="password"
              name="password"
              placeholder="enter password..."
              value={login.password}
              onChange={handleLogin}
            />
            <button
              className={` text-white bg-[#ff0b37] p-2 rounded-md w-full my-2 cursor-pointer`}
            >
              Login
            </button>
            <p className={`${theme ? "text-black" : "text-white"}  my-2 `}>
              New to NxtWatch?
              <Link to="/signup">
                <span className="underline cursor-pointer"> SignUp</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
