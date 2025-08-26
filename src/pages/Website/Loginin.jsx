import { useState } from "react";
import axios from "axios";
import Header from "../../Components/Header";
import LaodingSubmit from "./Laoding";
export default function Login() {
  const [email, setEmail] = useState("");
  const [PassWord, setPassWord] = useState("");
  const [emailerr, setemailerr] = useState("");
  const [accept, setAccept] = useState(false);
  const[laoding,setLaoding]=useState(false);


  async function Submit(e) {
    let flag = true;
    e.preventDefault();
    setLaoding(true);

    setAccept(true);
    if (PassWord.length < 8) {
      flag = false;
    } else flag = true;
    try {
      if (flag) {
        let res = await axios.post("http://127.0.0.1:8000/api/users/login/", {
          username: email,
          password: PassWord,
        });
         setLaoding(false);

        if (res.status === 200) {
          window.localStorage.setItem("email", email);
          window.location.pathname = "/ProfilePage";
        }
      }
    } catch (err) {
               setLaoding(false);

      setemailerr(err.response.status);
    }
  }

  return (
    <> 
    {laoding && <LaodingSubmit/>}

    <div className="min-h-screen flex flex-col items-center bg-primary-color py-8 px-4">
     <Header/>
      <form
        className="w-full max-w-lg bg-white p-8 md:p-10 rounded-2xl shadow-lg mt-8"
        onSubmit={Submit}
      >
        <h2 className="text-secondary-color text-center mb-6 text-2xl md:text-3xl font-bold relative">
          <i className="fas fa-tooth text-secondary-color text-xl md:text-2xl mr-2 align-middle"></i>
          Welcome back to log in
          <span className="block w-16 h-1.5 bg-gradient-to-r from-sky-blue to-secondary-color rounded mx-auto mt-2"></span>
        </h2>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-gray-800 font-semibold text-base md:text-lg"
          >
            Email :
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter email..."
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400"
          />
          {accept && emailerr === 422 && (
            <span className="text-red-600 text-sm mt-1 block">
              Email is already been taken
            </span>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-gray-800 font-semibold text-base md:text-lg"
          >
            Password:
          </label>
          <input
            id="password"
            type="password"
            value={PassWord}
            placeholder="Enter Password..."
            required
            onChange={(e) => setPassWord(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400"
          />
          {PassWord.length < 8 && accept && (
            <span className="text-red-600 text-sm mt-1 block">
              The password must be at least 8 characters long.
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-secondary-color to-buttons-color text-white rounded-lg text-base font-semibold transition-all duration-300 mt-2 hover:from-sky-blu hover:to-secondary-color hover:-translate-y-0.5 hover:shadow-lg"
        >
          Log in
        </button>

        <p className="text-center mt-6 text-gray-600 text-sm md:text-base">
          You already have an account
          <a
            href="/register"
            className="text-secondary-color font-extrabold ml-1 hover:underline"
          >
            SignUp here
          </a>
        </p>
      </form>
    </div>
    </>
  );
}
