import React, { useContext } from "react";
import { ResumeInfoContext } from "../../../context/ResumeInfoContext";
import PersonalDetailPreview from "../preview/PersonalDetailPreview";
import EducationPreview from "../preview/EducationPreview";
import ExperiencePreview from "../preview/ExperiencePreview";
import SkillsPreview from "../preview/SkillsPreview";
import SummaryPreview from "../preview/SummaryPreview";

function ResumePreview() {
   const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
   return (
      <div
         className='shadow-xl h-full p-10 border-t-[20px]'
         style={{ borderColor: resumeInfo?.themeColor }}>
         <PersonalDetailPreview resumeInfo={resumeInfo} />
         <SummaryPreview resumeInfo={resumeInfo} />
         {resumeInfo?.experience?.length > 0 && (
            <ExperiencePreview resumeInfo={resumeInfo} />
         )}
         {resumeInfo?.education?.length > 0 && (
            <EducationPreview resumeInfo={resumeInfo} />
         )}
         {resumeInfo?.skills?.length > 0 && (
            <SkillsPreview resumeInfo={resumeInfo} />
         )}
      </div>
   );
}

export default ResumePreview;
