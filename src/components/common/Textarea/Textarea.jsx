import React, { useId } from "react";

function Textarea({ label, type = "text", className="", ...props }, ref) {
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
         <textarea
            ref={ref}
            id={id}
            {...props}
            className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 ${className}`}
         />
      </div>
   );
}

export default React.forwardRef(Textarea);
