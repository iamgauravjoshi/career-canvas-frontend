import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { Mail, Lock, Loader, Info } from "lucide-react"; //gjoshi@okruti.com
import FormInput from "../common/formInput/FormInput";
import { useAuthStore } from "../../store/authStore";

function Login() {
   useDocumentTitle("Login");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const LoginInputFields = [
      {
         label: "Email",
         icon: Mail,
         placeholder: "name@email.com",
         type: "email",
         isRequired: true,
         inputName: email,
         handleInput: setEmail,
      },
      {
         label: "Password",
         icon: Lock,
         placeholder: "••••••••••••",
         type: "password",
         isRequired: true,
         inputName: password,
         handleInput: setPassword,
      },
   ];

   const { login, error, isLoading } = useAuthStore();

   const isLoginButtonEnabled = email.length && password.length !== 0;

   const handleLogin = async (e) => {
      e.preventDefault();
      await login(email, password);
   };

   return (
      <motion.div
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
         className='flex text-center overflow-hidden flex-col justify-center p-6 bg-white rounded-2xl drop-shadow-lg w-80 sm:w-96 mx-auto'>
         <header className='flex flex-col w-full'>
            <h1 className='text-3xl font-bold leading-none text-neutral-900 tracking-tight'>
               Welcome Back 👋
            </h1>
            <p className='mt-4 text-sm leading-none text-zinc-500'>
               Enter credentials to access the account.
            </p>
         </header>
         <form className='flex flex-col mt-10 w-full' onSubmit={handleLogin}>
            <div className='flex flex-col items-center w-full max-w-[408px]'>
               {LoginInputFields.map((field, index) => (
                  <FormInput
                     key={index}
                     label={field.label}
                     icon={field.icon}
                     placeholder={field.placeholder}
                     type={field.type}
                     required={field.isRequired}
                     value={field.inputName}
                     onChange={(e) => field.handleInput(e.target.value)}
                  />
               ))}
            </div>
            {error && (
               <div className='flex items-center mb-4'>
                  <Info size={18} color='#ef4444' />
                  <p className='text-red-500 font-medium text-sm text-left ml-2'>
                     {error}
                  </p>
               </div>
            )}
            <div className='flex gap-10 justify-between items-center mt-4 w-full text-xs leading-none'>
               <label className='flex gap-2 items-center self-stretch my-auto text-neutral-900 text-xs'>
                  <input
                     type='checkbox'
                     className='w-4 h-4 bg-white rounded border border-gray-100 border-solid'
                  />
                  Remember me
               </label>
               <Link
                  to={"/forgot-password"}
                  className='self-stretch my-auto font-medium text-right text-violet-700'>
                  Forgot Password?
               </Link>
            </div>
            <button
               type='submit'
               disabled={isLoading}
               className={`flex justify-center mt-6 text-sm font-medium leading-none self-stretch px-4 py-2.5 w-full rounded-xl ${isLoginButtonEnabled ? "bg-[#5F00D9] text-white" : "bg-gray-300 text-zinc-500 cursor-not-allowed"}`}>
               {isLoading ? (
                  <Loader className='animate-spin' size={18} color='white' />
               ) : (
                  "Login"
               )}
            </button>
         </form>

         {/* <button
        type='submit'
        // disabled={isLoading}
        className='flex justify-center text-sm font-medium leading-none self-stretch px-4 py-2.5 w-full rounded-xl bg-[#5F00D9] text-white disabled:bg-gray-300 disabled:text-zinc-500 disabled:cursor-not-allowed'>
        {isLoading ? (
          <Loader className='animate-spin' size={18} color="white" />
        ) : (
          "Login"
        )}
      </button> */}

         {/* <Button variant='primary'>Log In</Button> */}
         {/* <Button variant='secondary'>Create New Account</Button> */}
         <p className='mt-6 text-xs font-medium leading-none'>
            Don't have an account?{" "}
            <Link to={"/signup"} className='text-violet-700 ml-1'>
               Sign Up
            </Link>
         </p>
      </motion.div>
   );
}

// {isLoading ? <Loader className='w-6 h-6 animate-spin  mx-auto' /> : "Login"}

function Button({ children, variant }) {
   const baseClasses =
      "mt-6 text-sm font-medium leading-none self-stretch px-4 py-2.5 w-full rounded-xl";
   const variantClasses = {
      primary: "bg-gray-300 text-zinc-500",
      secondary: "bg-gray-100 text-neutral-900 mt-3",
   };

   return (
      <button className={`${baseClasses} ${variantClasses[variant]}`}>
         {children}
      </button>
   );
}

export default Login;
