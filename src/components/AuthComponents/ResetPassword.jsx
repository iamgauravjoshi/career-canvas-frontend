import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FcOk } from "react-icons/fc";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { useNavigate, useParams } from "react-router-dom";
import { Lock, Loader, Info } from "lucide-react";
import FormInput from "../common/formInput/FormInput";
import { useAuthStore } from "../../store/authStore";
import toast from "react-hot-toast";
import PasswordStrengthMeter from "../common/PasswordStrengthMeter";

function ResetPassword() {
   useDocumentTitle("Reset Password");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [isPasswordResetSuccessful, setIPasswordResetSuccessful] =
      useState(false);
   const { resetPassword, error, isLoading, message } = useAuthStore();

   const { token } = useParams();
   const navigate = useNavigate();

   const resetPasswordFields = [
      {
         label: "New Password",
         icon: Lock,
         placeholder: "••••••••••••",
         type: "password",
         isRequired: true,
         inputName: password,
         handleInput: setPassword,
      },
      {
         label: "Repeat New Password",
         icon: Lock,
         placeholder: "••••••••••••",
         type: "password",
         isRequired: true,
         inputName: confirmPassword,
         handleInput: setConfirmPassword,
      },
   ];

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (password !== confirmPassword) {
         alert("Passwords do not match");
         return;
      }
      try {
         await resetPassword(token, password);
         setIPasswordResetSuccessful(true);
         toast.success(
            "Password reset successfully, redirecting to login page..."
         );
         setTimeout(() => {
            navigate("/login");
         }, 3000);
      } catch (error) {
         console.error(error);
         toast.error(error.message || "Error resetting password");
      }
   };

   return (
      <>
         {!isPasswordResetSuccessful ? (
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className='flex text-center overflow-hidden flex-col justify-center p-6 bg-white rounded-2xl drop-shadow-lg w-80 sm:w-96 mx-auto'>
               <header className='flex flex-col w-full'>
                  <h1 className='text-3xl font-bold leading-none text-neutral-900 tracking-tight'>
                     Reset Password
                  </h1>
                  <p className='text-center mt-4 text-sm leading-none text-zinc-500'>
                     Enter your new password.
                  </p>
               </header>
               <form
                  className='flex flex-col mt-10 w-full'
                  onSubmit={handleSubmit}>
                  <div className='flex flex-col items-center w-full max-w-[408px]'>
                     {resetPasswordFields.map((field, index) => (
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
                  {password.length !== 0 && (
                     <PasswordStrengthMeter password={password} />
                  )}
                  <button
                     type='submit'
                     disabled={isLoading}
                     className={
                        "flex justify-center mt-6 text-sm font-medium leading-none self-stretch px-4 py-2.5 w-full rounded-xl bg-[#5F00D9] text-white disabled:bg-gray-300 disabled:text-zinc-500 disabled:cursor-not-allowed"
                     }>
                     {isLoading ? (
                        <Loader
                           className='animate-spin'
                           size={18}
                           color='white'
                        />
                     ) : (
                        "Reset Password"
                     )}
                  </button>
               </form>
            </motion.div>
         ) : (
            <PasswordResetSuccess />
         )}
      </>
   );
}

function PasswordResetSuccess() {
   return (
      <motion.div
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1 }}
         className='flex flex-col items-center p-10 text-center bg-white rounded-2xl border-gray-100 border-solid border-[0.5px] max-w-[488px] text-neutral-900 max-md:px-5 drop-shadow-lg mx-auto'>
         <FcOk className='text-5xl' />
         <div className='flex flex-col items-center mt-6 w-full'>
            <h2 className='text-2xl font-bold leading-none text-neutral-900'>
               Password Reset Done
            </h2>
            <p className='mt-4 text-sm leading-5'>
               {/* Now you can access you account. */}
               Voila! Now you can Access your account.
            </p>
            {/* <Link
               to={"/login"}
               className='overflow-hidden gap-2 self-stretch px-4 py-2.5 mt-6 w-full text-sm font-medium leading-none bg-[#5F00D9] rounded-lg text-white hover:text-white'>
               Sign In
            </Link> */}
         </div>
      </motion.div>
   );
}

export default ResetPassword;
