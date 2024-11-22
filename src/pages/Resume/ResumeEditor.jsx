import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FormSection from "./components/FormSection";
import ResumePreview from "./components/ResumePreview";
import dummy from "../../data/dummy";
import { ResumeInfoContext } from "../../context/ResumeInfoContext";

function ResumeEditor() {
   const { resumeId } = useParams();
   const [resumeInfo, setResumeInfo] = useState();

   // const GetResumeInfo = () => {
   //    GlobalApi.GetResumeById(resumeId).then((resp) => {
   //       console.log(resp.data.data);
   //       setResumeInfo(resp.data.data);
   //    });
   // };

   useEffect(() => {
      setResumeInfo(dummy);
      // GetResumeInfo();
   }, []);

   return (
      <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
         <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
            <FormSection />
            <ResumePreview />
         </div>
      </ResumeInfoContext.Provider>
   );
}

// ResumeInfoContext

export default ResumeEditor;
