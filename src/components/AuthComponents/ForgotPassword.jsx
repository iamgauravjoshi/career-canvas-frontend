import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Loader, Mail } from "lucide-react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import FormInput from "../common/formInput/FormInput";
import FormSubmitError from "../common/FormSubmitError";
import { useAuthStore } from "../../store/authStore";
import { FcOk } from "react-icons/fc";

function ForgotPassword() {
   useDocumentTitle("Forgot Password");
   const [email, setEmail] = useState("");
   const [isSubmitted, setIsSubmitted] = useState(false);

   const { isLoading, error, forgotPassword } = useAuthStore();

   const handleSubmit = async (e) => {
      e.preventDefault();
      await forgotPassword(email);
      setIsSubmitted(true);
   };

   return (
      <>
         {!isSubmitted ? (
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className='flex text-center overflow-hidden flex-col mx-auto p-10 bg-white rounded-2xl border-gray-100 border-solid border-[0.5px] max-w-[488px] max-md:px-5 drop-shadow-lg'>
               <header className='flex flex-col w-full'>
                  <Link to={"/login"} className='text-black hover:text-black'>
                     <ArrowLeft size={32} />
                  </Link>
                  <h1 className='mt-6 text-left text-2xl font-bold leading-none text-neutral-900'>
                     Forgot Password
                  </h1>
                  <p className='mt-4 text-left text-sm leading-5 text-zinc-500'>
                     Enter your email address in input box below.
                  </p>
               </header>
               <form
                  onSubmit={handleSubmit}
                  className='flex flex-col mt-8 w-full max-w-[408px]'>
                  <FormInput
                     label='Email'
                     icon={Mail}
                     placeholder='name@email.com'
                     type='email'
                     value={email}
                     required={true}
                     onChange={(e) => setEmail(e.target.value)}
                  />
                  {error && <FormSubmitError error={error} />}
                  <button
                     disabled={isLoading}
                     className={
                        "flex justify-center overflow-hidden gap-2 self-stretch px-4 py-2.5 w-full text-sm font-medium leading-none rounded-xl mt-4 bg-[#5F00D9] text-white disabled:bg-gray-300 disabled:text-zinc-500 disabled:cursor-not-allowed"
                     }
                     type='submit'>
                     {isLoading ? (
                        <Loader className='animate-spin' />
                     ) : (
                        "Send Reset Link"
                     )}
                  </button>
               </form>
            </motion.div>
         ) : (
            <EmailSuccessMessage userEmail={email} />
         )}
      </>
   );
}

function EmailSuccessMessage({ userEmail }) {
   return (
      <motion.div
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1 }}
         className='flex overflow-hidden mx-auto flex-col items-center p-10 text-center bg-white rounded-2xl border-gray-100 border-solid border-[0.5px] max-w-[488px] text-neutral-900 max-md:px-5 drop-shadow-lg'>
         <FcOk className='text-5xl animate-bounce' />
         <div className='flex flex-col items-center mt-6 w-full'>
            <h2 className='text-2xl font-bold leading-none text-neutral-900'>
               Successfully Sent
            </h2>
            <p className='mt-4 text-sm leading-5'>
               Please follow the instructions sent to{" "}
               <span className='font-bold text-neutral-900'>{userEmail}</span>.
               If it doesn't arrive, be sure to check your spam folder.
            </p>
            <Link
               to={"/login"}
               className='flex items-center justify-center gap-2 mt-6 text-sm font-bold text-[#5F00D9]'>
               <ArrowLeft size='18' color='#5F00D9' />
               Back to Log In
            </Link>
         </div>
      </motion.div>
   );
}

export default ForgotPassword;
