import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { validateForm } from "../utils/validateform";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUserInfo } from "../redux/userSlice";

const Signup = () => {
  const theme = useSelector((store) => store.config.isTheme);
  const [authErr, setAuthErr] = useState(null);
  const [signup, setSignup] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [signupErr, setSignupErr] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authuser = useSelector((store) => store?.users);

  const handleSignup = (e) => {
    const { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
  };

  const signupSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, signup.email, signup.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
        updateProfile(auth.currentUser, {
          displayName: signup.username,
          photoURL: signup.username.slice(0, 1),
        })
          .then(() => {
            // Profile updated!
            // ...
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUserInfo({ uid, email, displayName, photoURL }));

            navigate("/");
          })
          .catch((error) => {
            // An error occurred
            // ...
            console.log(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/email-already-in-use") {
          setAuthErr("Email already in use");
        } else {
          setSignupErr(validateForm(signup));
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
            onSubmit={signupSubmit}
            className={`mx-2 shadow-xl rounded-md p-5 ${
              theme ? "bg-[#f1f1f1]" : "bg-[#333]"
            }`}
          >
            <h1
              className={`${
                !theme ? "text-white" : "text-black"
              } text-2xl my-2 text-start`}
            >
              SignUp
            </h1>
            {authErr && <p className="text-sm text-[#ff0b37]">*{authErr}</p>}
            <input
              className="w-full p-2 rounded-md my-2"
              type="text"
              name="username"
              placeholder="enter your name..."
              value={signup?.username}
              onChange={handleSignup}
            />
            {signupErr?.username && (
              <p className="text-sm text-[#ff0b37]">*{signupErr.username}</p>
            )}
            <input
              className="w-full p-2 rounded-md my-2"
              type="text"
              name="email"
              placeholder="enter email..."
              value={signup.email}
              onChange={handleSignup}
            />
            {signupErr?.email && (
              <p className="text-sm text-[#ff0b37]">*{signupErr.email}</p>
            )}
            <input
              className="w-full p-2 rounded-md my-2"
              type="password"
              name="password"
              placeholder="enter password..."
              value={signup.password}
              onChange={handleSignup}
            />
            {signupErr?.password && (
              <p className="text-sm text-[#ff0b37]">*{signupErr.password}</p>
            )}
            <button
              className={` text-white bg-[#ff0b37] p-2 rounded-md w-full my-2 cursor-pointer`}
            >
              SignUp
            </button>
            <p className={`${theme ? "text-black" : "text-white"}  my-2 `}>
              Already Registered?
              <Link to="/login">
                <span className="underline cursor-pointer">Login</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
