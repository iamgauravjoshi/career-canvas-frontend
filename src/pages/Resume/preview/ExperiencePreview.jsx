import React from "react";
import dummy from "../../../data/dummy";

function ExperiencePreview({ resumeInfo }) {
   // if (resumeInfo?.experience?.length <= 1) {
   //    resumeInfo.experience = dummy.experience;
   // }

   return (
      <div className='my-6'>
         <h2
            className='text-center font-bold text-sm mb-2'
            style={{
               color: resumeInfo?.themeColor || dummy.themeColor,
            }}>
            Professional Experience
         </h2>
         <hr
            style={{
               borderColor: resumeInfo?.themeColor || dummy.themeColor,
            }}
         />

         {resumeInfo?.experience?.map((experience, index) => (
            <div key={index} className='my-5'>
               <h2
                  className='text-sm font-bold'
                  style={{
                     color: resumeInfo?.themeColor,
                  }}>
                  {experience?.title}
               </h2>
               <h2 className='text-xs flex justify-between'>
                  {experience?.companyName},{experience?.city},
                  {experience?.state}
                  <span>
                     {experience?.startDate} To{" "}
                     {experience?.currentlyWorking
                        ? "Present"
                        : experience.endDate}{" "}
                  </span>
               </h2>
               {/* <p className='text-xs my-2'>
                    {experience.workSummary}
                </p> */}
               <div
                  className='text-xs my-2'
                  dangerouslySetInnerHTML={{ __html: experience?.workSummary }}
               />
            </div>
         ))}
      </div>
   );
}

export default ExperiencePreview;
