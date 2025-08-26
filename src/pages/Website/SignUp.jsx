import { useState } from "react";
import axios from "axios";
import Header from "../../Components/Header";
import { useNavigate}from "react-router-dom";
export default function SignUp() {
const[form,setForm]=useState({
  username:"",
  email:"",
  password:"",
  user_type: null,
});
const[laoding,setLaoding]=useState(false);
const[err,setErr]=useState("");
const navigate=useNavigate();
const handleChange = (e) => {
  console.log("id",e.target.id,"valu",e.target.value);
  setForm({...setForm,[e.target.id] : e.target.value.trim()});
}
const handleSubmit =async(e) => {
  e.preventDefault();
      setAccept(true);

  if(!form.username||!form.email||!form.password){
    return setErr("please file")
  }
  setLaoding(true);
  setErr(null);
  try{
    const res= await axios.post(
          "http://127.0.0.1:8000/api/users/register/",
        form,{headers:{
          'Content-Type':'application/json',
        },}
        );
          console.log("server",res.data);

        if(res.status==201){
            console.log("succ");
        navigate("/")
        setLaoding(false);

        }
  }
  catch (err) {
 setErr("somthing went worng");
 setLaoding(false);
}
}

  return (
    
    <div className="signup-container bg-primary-color min-h-screen flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
     <Header/>
      <form
        className="signup-form w-full max-w-lg bg-white p-8 sm:p-10 rounded-2xl shadow-lg mt-8"
        onSubmit={handleSubmit}
      >
        <h2 className="signup-title text-secondary-color text-center mb-6 text-2xl sm:text-3xl font-bold relative">
          <i className="fas fa-tooth dental-icon text-gradient-to-r from-sky-blue to-secondary-color text-xl mr-2 align-middle"></i>
           
          Create New Account
          <span className="block w-16 h-1 bg-gradient-to-r from-sky-blue to-secondary-color rounded mx-auto mt-2"></span>
        </h2>

        <div className="form-group mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-gray-800 font-semibold text-base"
          >
            First Name:
          </label>
          <input
            id="username"
            type="text"
            value={form.username}
            placeholder="Enter first name..."
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400"
          />
         
        </div>

        <div className="form-group mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-gray-800 font-semibold text-base"
          >
            Email:
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter email..."
            required
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400"
          />
        
        </div>

        <div className="form-group mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-gray-800 font-semibold text-base"
          >
            Password:
          </label>
          <input
            id="password"
            type="password"
            value={form.password}
            placeholder="Enter password..."
            required
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400"
          />
        
        </div>

        {/* <div className="form-group mb-6">
          <label
            htmlFor="repeatpassword"
            className="block mb-2 text-gray-800 font-semibold text-base"
          >
            Repeat Password:
          </label>
          <input
            id="repeatpassword"
            type="password"
            value={repeatpassword}
            placeholder="Repeat password..."
            required
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400"
          />
          {repeatpassword !== password  && (
            <span className="error-message text-red-600 text-sm mt-1 block">
              Passwords do not match
            </span>
          )}
        </div> */}

        <button
           disabled={laoding}
          type="submit"
          className="signup-button w-full py-3 bg-gradient-to-r from-secondary-color to-buttons-color text-white border-none rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 mt-2 hover:from-sky-blu hover:to-secondary-color hover:-translate-y-0.5 hover:shadow-lg"
        >
          {/* {laoding?(<>
          <Spinner size="sm"/>
          <span className="pl-3">Laoding...</span>
          </>):("sign up")} */}

          Sinup
        </button>

        <p className="login-link text-center mt-6 text-gray-600 text-sm">
          You already have an account
          <a
            href="/login"
            className="text-secondary-color font-extrabold ml-1 hover:underline"
          >
            Log in here
          </a>
        </p>
      </form>
    </div>
  );
}
