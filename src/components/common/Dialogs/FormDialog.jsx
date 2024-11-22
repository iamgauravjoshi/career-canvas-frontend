import React from "react";
import { X } from "lucide-react";
import { CloseButton, PrimaryButton } from "../Buttons/Buttons";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";

function FormDialog({ ...dialogProps }) {
   return (
      <>
         {dialogProps?.isModalOpen && (
            <div
               onClick={dialogProps?.handleOutsideClick}
               className='w-full h-full fixed top-0 right-0 left-0 md:inset-0 max-h-full bg-[#365CCE] bg-opacity-70  transition-all duration-300 ease-in-out z-10'>
               <div className='absolute top-0 right-0 left-0 bottom-0 max-w-md max-h-fit m-auto p-4 z-[999] transition-all duration-900 ease-in-out'>
                  <div className=' bg-white rounded-lg dark:bg-gray-700'>
                     <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
                        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                           {dialogProps?.dialogHeading}
                        </h3>
                        {dialogProps?.dialogDescription && (
                           <p className='text-sm text-gray-600'>
                              {dialogProps?.dialogDescription}
                           </p>
                        )}

                        <button
                           className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
                           onClick={dialogProps?.closeModal}>
                           <X />
                        </button>
                     </div>
                     <form
                        onSubmit={dialogProps?.onSubmit}
                        className='p-4 md:p-5'>
                        <div className='grid gap-4 mb-4 grid-cols-2'>
                           {dialogProps &&
                              dialogProps?.inputFields?.map((input, index) => (
                                 <Input {...input} key={index} />
                              ))}

                           {dialogProps &&
                              dialogProps?.textarea?.map((item, index) => (
                                 <Textarea {...item} key={index} />
                              ))}
                        </div>
                        <div className='flex items-center justify-end gap-4'>
                           <CloseButton
                              type='button'
                              buttonText={"Close"}
                              onClick={dialogProps.closeModal}
                           />
                           <PrimaryButton
                              type='submit'
                              icon={dialogProps.submitButtonIcon}
                              buttonText={dialogProps.submitButtonText}
                           />
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         )}
      </>
   );
}

export default FormDialog;
