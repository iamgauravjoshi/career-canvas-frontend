import React, { useId } from "react";

function Select({ options, label, ...props }, ref) {
   const id = useId();
   return (
      <div className='col-span-2 sm:col-span-1'>
         {label && (
            <label
               htmlFor={id}
               className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
               {label}
            </label>
         )}
         <select
            {...props}
            id={id}
            ref={ref}
            defaultValue={`Select ${label}`}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 '>
            {options?.map((option) => (
               <option key={option} value={option}>
                  {option}
               </option>
            ))}
         </select>
      </div>
   );
}

export default React.forwardRef(Select);
