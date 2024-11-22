import React, { useState } from "react";
import {
   LinkPrimary,
   PrimaryButton,
} from "../../../components/common/Buttons/Buttons";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import PersonalDetail from "../forms/PersonalDetail";
import Summary from "../forms/Summary";
import Experience from "../forms/Experience";
// import Education from "./forms/Education";
// import Skills from "./forms/Skills";
import { Link, Navigate, useParams } from "react-router-dom";
import ThemeColor from "./ThemeColor";
import Education from "../forms/Education";
import Skills from "../forms/Skills";

function FormSection() {
   const [activeFormIndex, setActiveFormIndex] = useState(1);
   const [enableNext, setEnableNext] = useState(false);
   const { resumeId } = useParams();
   return (
      <div>
         <div className='flex justify-between items-center'>
            <div className='flex gap-5'>
               <LinkPrimary
                  to='/dashboard'
                  linkText='Home'
                  icon={<Home size={16} />}
               />
               <ThemeColor />
            </div>
            <div className='flex gap-2'>
               {activeFormIndex > 1 && (
                  <PrimaryButton
                     buttonText=''
                     icon={<ArrowLeft size={16} />}
                     onClick={() => setActiveFormIndex(activeFormIndex - 1)}
                  />
               )}
               <PrimaryButton
                  // disabled={!enableNext}
                  buttonText='Next'
                  icon={<ArrowRight size={16} />}
                  onClick={() => setActiveFormIndex(activeFormIndex + 1)}
               />
            </div>
         </div>
         {/* Personal Detail  */}
         {/* {activeFormIndex == 1 ? (
            <PersonalDetail enabledNext={(v) => setEnableNext(v)} />
         ) : activeFormIndex == 2 ? (
            <Summary enabledNext={(v) => setEnableNext(v)} />
         ) : activeFormIndex == 3 ? (
            <Experience />
         ) : activeFormIndex == 4 ? (
            <Education />
         ) : activeFormIndex == 5 ? (
            <Skills />
         ) : activeFormIndex == 6 ? (
            <Navigate to={"/my-resume/" + resumeId + "/view"} />
         ) : null} */}

         {activeFormIndex == 1 ? (
            <PersonalDetail enabledNext={(v) => setEnableNext(v)} />
         ) : activeFormIndex == 2 ? (
            <Summary enabledNext={(v) => setEnableNext(v)} />
         ) : activeFormIndex == 3 ? (
            <Experience />
         ) : activeFormIndex == 4 ? (
            <Education />
         ) : activeFormIndex == 5 ? (
            <Skills />
         ) : activeFormIndex == 6 ? (
            <Navigate to={`/dashboard/resume/${resumeId}/view`} />
         ) : null}
         
      </div>
   );
}

export default FormSection;
