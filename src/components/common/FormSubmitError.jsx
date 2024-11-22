import React from "react";
import { Info } from "lucide-react";

function FormSubmitError({ error }) {
   return (
      <div className='flex justify-start text-left mb-4'>
         <Info size={18} color='#ef4444' />
         <p className='text-red-500 font-medium text-sm text-left ml-2'>
            {error}
         </p>
      </div>
   );
}

export default FormSubmitError;
