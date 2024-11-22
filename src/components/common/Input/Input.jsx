import React, { useId } from "react";

function Input({ label, type = "text", ...props }, ref) {
   const id = useId();
   return (
      <div key={props.name} className='col-span-2'>
         {label && (
            <label
               htmlFor={id}
               className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'>
               {label}
            </label>
         )}
         <input
            id={id}
            type={type}
            ref={ref}
            {...props}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
         />
      </div>
   );
}

export default React.forwardRef(Input);
