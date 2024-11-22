import React from "react";

function FormInput({ icon: Icon, label, type, placeholder, id, ...props }) {
   return (
      <div className='flex flex-col justify-center w-full whitespace-nowrap mb-6'>
         <label
            htmlFor={id}
            className='text-left text-xs font-medium leading-none text-neutral-900'>
            {label}
         </label>
         <div
            className='relative mt-2'
            data-toggle-password={`${type === "password" ? true : false}`}>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
               <Icon className='size-5 text-[#8634f2]' />
               {/* text-[#5F00D9] */}
            </div>
            <input
               type={type}
               id="hs-toggle-password"
               placeholder={placeholder}
               required={props.required}
               {...props}
               className='w-full pl-12 pr-3 py-2.5 text-sm leading-none rounded-lg bg-white border border-gray-300 border-solid text-zinc-600 transition duration-200 focus:border-[#8634f2] focus:ring-0.5 focus:ring-[#8634f2] focus-visible:outline-none'
            />
            {type === "password" && (
               <>
                  <button
                     type='button'
                     data-hs-toggle-password='{
        "target": "#hs-toggle-password"
      }'
                     className='absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500'>
                     <svg
                        className='shrink-0 size-3.5'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'>
                        <path
                           className='hs-password-active:hidden'
                           d='M9.88 9.88a3 3 0 1 0 4.24 4.24'></path>
                        <path
                           className='hs-password-active:hidden'
                           d='M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68'></path>
                        <path
                           className='hs-password-active:hidden'
                           d='M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61'></path>
                        <line
                           className='hs-password-active:hidden'
                           x1='2'
                           x2='22'
                           y1='2'
                           y2='22'></line>
                        <path
                           className='hidden hs-password-active:block'
                           d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z'></path>
                        <circle
                           className='hidden hs-password-active:block'
                           cx='12'
                           cy='12'
                           r='3'></circle>
                     </svg>
                  </button>
               </>
            )}

            {/* <div className='input max-w-72' data-toggle-password='true'>
               <input placeholder='Password' type='password' />
               <div className='btn btn-icon' data-toggle-password-trigger='true'>
                  <i className='ki-outline ki-eye toggle-password-active:hidden'></i>
                  <i className='ki-outline ki-eye-slash hidden toggle-password-active:block'></i>
               </div>
            </div> */}
         </div>
      </div>
   );
}

export default FormInput;
