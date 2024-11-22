import React from "react";
import { X } from "lucide-react";
import { CloseButton, DeleteButton } from "../Buttons/Buttons";

function AlertDialog(alertProps) {
   return (
      <>
         {alertProps?.isDialogOpen && (
            <div
               onClick={alertProps?.handleOutsideClick}
               className='alert-dialog w-full h-full fixed top-0 right-0 left-0 md:inset-0 max-h-full bg-[#365CCE] bg-opacity-70  transition-all duration-300 ease-in-out z-50'>
               <div className='absolute top-0 right-0 left-0 bottom-0 max-w-xl max-h-fit m-auto p-4 z-[999] transition-all duration-900 ease-in-out'>
                  <div className=' bg-white rounded-lg p-4 md:p-5'>
                     <div className='flex justify-between gap-6 rounded-t'>
                        <div className='flex flex-col gap-2 max-w-sm'>
                           {alertProps?.dialogHeading && (
                              <h3 className='text-lg font-semibold text-gray-900'>
                                 {alertProps?.dialogHeading}
                              </h3>
                           )}
                           {alertProps?.dialogDescription && (
                              <p className='text-sm text-gray-600'>
                                 {alertProps?.dialogDescription}
                              </p>
                           )}
                        </div>
                        <button
                           className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center'
                           onClick={alertProps?.closeAlertDialog}>
                           <X />
                        </button>
                     </div>
                     <div className='flex items-center justify-end gap-4 mt-6'>
                        <CloseButton
                           type='button'
                           buttonText={"Cancel"}
                           onClick={alertProps?.closeAlertDialog}
                        />
                        <DeleteButton
                           onClick={alertProps?.handleDialogAction}
                        />
                     </div>
                  </div>
               </div>
            </div>
         )}
      </>
   );
}

export default AlertDialog;
