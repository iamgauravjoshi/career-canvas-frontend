import React from "react";
import dummy from "../../../data/dummy";

function PersonalDetailPreview({ resumeInfo }) {
   return (
      <div>
         <h2
            className='font-bold text-xl text-center'
            style={{
               color: resumeInfo?.themeColor || dummy.themeColor,
            }}>
            {resumeInfo?.firstName || dummy.firstName} {resumeInfo?.lastName || dummy.lastName}
         </h2>
         <h2 className='text-center text-sm font-medium'>
            {resumeInfo?.jobTitle || dummy.jobTitle}
         </h2>
         <h2
            className='text-center font-normal text-xs'
            style={{
               color: resumeInfo?.themeColor || dummy.themeColor,
            }}>
            {resumeInfo?.address || dummy.address}
         </h2>

         <div className='flex justify-between'>
            <h2
               className='font-normal text-xs'
               style={{
                  color: resumeInfo?.themeColor || dummy.themeColor,
               }}>
               {resumeInfo?.phone || dummy.phone}
            </h2>
            <h2
               className='font-normal text-xs'
               style={{
                  color: resumeInfo?.themeColor || dummy.themeColor,
               }}>
               {resumeInfo?.email || dummy.email}
            </h2>
         </div>
         <hr
            className='border-[1.5px] my-2'
            style={{
               borderColor: resumeInfo?.themeColor || dummy.themeColor,
            }}
         />
      </div>
   );
}

export default PersonalDetailPreview;
