import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FcOk } from "react-icons/fc";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import FormInput from "../common/formInput/FormInput";
import { User, Mail, Lock, Loader, Info } from "lucide-react";
import PasswordStrengthMeter from "../common/PasswordStrengthMeter";
import { useAuthStore } from "../../store/authStore";

function Signup() {
   useDocumentTitle("Signup");
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();

   const SignupInputFields = [
      {
         label: "Name",
         icon: User,
         placeholder: "Gaurav Joshi",
         type: "name",
         isRequired: true,
         inputName: name,
         handleInput: setName,
      },
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

   const isSignupButtonEnabled =
      name.length && email.length && password.length !== 0;

   const { signup, error, isLoading } = useAuthStore();

   const handleSignUp = async (e) => {
      e.preventDefault();

      try {
         await signup(email, password, name);
         navigate("/verify-email");
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <>
         <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='flex overflow-hidden flex-col text-center mx-auto p-6 bg-white rounded-2xl drop-shadow-lg max-w-[456px]'>
            <header className='flex flex-col w-full'>
               <h1 className='text-3xl font-bold leading-none text-neutral-900 tracking-tight'>
                  Create an Account
               </h1>
            </header>
            <form
               onSubmit={handleSignUp}
               className='flex flex-col items-center mt-5 w-full max-w-[408px]'>
               {SignupInputFields.map((field, index) => (
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
               {error && (
                  <div className='flex w-full text-left mb-4'>
                     <Info size={18} color='#ef4444' />
                     <p className='text-red-500 font-medium text-sm text-left ml-2'>
                        {error}
                     </p>
                  </div>
               )}
               {password.length !== 0 && (
                  <PasswordStrengthMeter password={password} />
               )}

               <div className='flex gap-6 items-center mt-2 w-full text-xs leading-none'>
                  <label className='flex gap-2 items-center self-stretch my-auto'>
                     <input
                        type='checkbox'
                        className='w-4 h-4 bg-white rounded border border-gray-100 border-solid'
                     />
                     <span className='text-xs'>
                        I agree with{" "}
                        <Link to={"/login"} className='text-violet-700'>
                           Terms & Conditions
                        </Link>
                        .
                     </span>
                  </label>
               </div>
               <button
                  type='submit'
                  disabled={isLoading}
                  className={`flex justify-center mt-4 text-sm font-medium leading-none self-stretch px-4 py-2.5 w-full rounded-xl ${isSignupButtonEnabled ? "bg-[#5F00D9] text-white" : "bg-gray-300 text-zinc-500"}`}>
                  {isLoading ? (
                     <Loader className='animate-spin' size={18} color='white' />
                  ) : (
                     "Create an account"
                  )}
               </button>
               <p className='mt-6 text-xs font-medium leading-none'>
                  Already have an account?{" "}
                  <Link to={"/login"} className='text-violet-700 ml-1'>
                     Log In
                  </Link>
               </p>
            </form>
         </motion.div>
         <br />
         <br />
         <SignupSuccess />
      </>
   );
}

export function SignupSuccess() {
   return (
      <motion.div
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
         className='flex overflow-hidden flex-col items-center mx-auto p-10 text-center bg-white rounded-2xl border-gray-100 border-solid border-[0.5px] max-w-[488px] text-neutral-900 max-md:px-5 drop-shadow-lg'>
         <FcOk className='text-5xl animate-bounce' />
         <div className='flex flex-col items-center mt-6 w-full'>
            <h2 className='text-2xl font-bold leading-none text-neutral-900'>
               Successfully Registration
            </h2>
            <p className='mt-4 text-sm leading-5'>
               Hurray! You have successfully created your account. Enter the app
               to explore all it’s features.
            </p>
            <Link
               to={"/"}
               className='overflow-hidden gap-2 self-stretch px-4 py-2.5 mt-6 w-full text-sm font-medium leading-none bg-[#5F00D9] rounded-lg text-white hover:text-white'>
               Enter the App
            </Link>

            {/* <button className='overflow-hidden gap-2 self-stretch px-4 py-2.5 mt-6 w-full text-sm font-medium leading-none bg-[#5F00D9] rounded-xl text-white'>
          Enter the App
        </button> */}
         </div>
      </motion.div>
   );
}

export default Signup;
