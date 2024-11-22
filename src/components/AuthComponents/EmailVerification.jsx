import React, { useEffect, useRef, useState } from "react";
import { MdEmail } from "react-icons/md";
import { Info } from "lucide-react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import toast from "react-hot-toast";
import LoadingSpinner from "../common/LoadingSpinner";

function EmailVerification() {
   useDocumentTitle("Email Verification");

   const [code, setCode] = useState(["", "", "", "", "", ""]);
   const inputRefs = useRef([]);
   const navigate = useNavigate();
   const isUserVerified = false;

   const { error, isLoading, verifyEmail } = useAuthStore();

   const handleChange = (index, value) => {
      const newCode = [...code];

      // Handle pasted content
      if (value.length > 1) {
         const pastedCode = value.slice(0, 6).split("");
         for (let i = 0; i < 6; i++) {
            newCode[i] = pastedCode[i] || "";
         }
         setCode(newCode);

         // Focus on the last non-empty input or the first empty one
         const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
         const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
         inputRefs.current[focusIndex].focus();
      } else {
         newCode[index] = value;
         setCode(newCode);

         // Move focus to the next input field if value is entered
         if (value && index < 5) {
            inputRefs.current[index + 1].focus();
         }
      }
   };

   const handleKeyDown = (index, e) => {
      if (e.key === "Backspace" && !code[index] && index > 0) {
         inputRefs.current[index - 1].focus();
      }
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      const verificationCode = code.join("");
      try {
         await verifyEmail(verificationCode).then(() => {
            return <Navigate to='/email-verified' replace />;
         });

         toast.success("Email verified successfully");
      } catch (error) {
         console.log(error);
      }
   };

   if (isUserVerified) return <LoadingSpinner />;

   // Auto submit when all fields are filled
   useEffect(() => {
      async function fetchData() {
         if (code.every((digit) => digit !== "")) {
            await handleSubmit(new Event("submit"));
         }
      }
      fetchData();
   }, [code]);

   return (
      <main className='flex overflow-hidden flex-col items-center text-center mx-auto p-10 bg-white rounded-2xl border-gray-100 border-solid border-[0.5px] max-w-[488px] text-neutral-900 max-md:px-5 drop-shadow-lg'>
         <MdEmail fill='#5F00D9' className='text-6xl' />
         <section className='flex flex-col items-center mt-6 w-full text-center'>
            <h2 className='text-3xl font-bold leading-none text-neutral-900 tracking-tight'>
               Email Verification
            </h2>
            <p className='mt-4 text-sm leading-5'>
               We've sent an email with the 6-digit verification code
               {/* <span className='font-bold text-neutral-900'>
            gaurav.joshi@gmail.com
          </span> */}
            </p>
         </section>
         <form onSubmit={handleSubmit}>
            <div className='flex justify-between gap-2 mt-8'>
               {code.map((digit, index) => (
                  <input
                     key={index}
                     ref={(el) => (inputRefs.current[index] = el)}
                     type='text'
                     maxLength='6'
                     value={digit}
                     onChange={(e) => handleChange(index, e.target.value)}
                     onKeyDown={(e) => handleKeyDown(index, e)}
                     className='w-12 h-12 mb-2 rounded-md bg-gray-100 border border-gray-300 border-solid text-center font-bold text-2xl text-neutral-900 focus:bg-white focus:border-[#8634f2] focus:ring-0.5 focus:ring-[#8634f2]'
                  />
               ))}
            </div>
            {error && (
               <div className='flex items-center mb-8'>
                  <Info size={18} color='#ef4444' />
                  <p className='text-red-500 font-medium text-sm text-left ml-2'>
                     {error}
                  </p>
               </div>
            )}
            <button
               type='submit'
               disabled={isLoading || code.some((digit) => !digit)}
               className={`text-sm font-medium leading-none px-4 py-2.5 w-full rounded-lg bg-[#5F00D9] text-white disabled:bg-gray-300 disabled:text-zinc-500 disabled:cursor-not-allowed ${error ? "mt-0" : "mt-4"}`}>
               {isLoading ? "Verifying..." : "Verify Email"}
            </button>
         </form>
      </main>
   );
}

export default EmailVerification;
