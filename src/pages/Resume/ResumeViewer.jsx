import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { PrimaryButton } from "../../components/common/Buttons/Buttons";
import { ResumeInfoContext } from "../../context/ResumeInfoContext";
import ResumePreview from "./components/ResumePreview";
// import GlobalApi from "../../store/GlobalAPI"
import { RWebShare } from "react-web-share";
import { Download, Send } from "lucide-react";
import toast from "react-hot-toast";
import dummy from "../../data/dummy";

function ResumeViewer() {
   const [resumeInfo, setResumeInfo] = useState();
   const { resumeId } = useParams();

   useEffect(() => {
      setResumeInfo(dummy);
      //  GetResumeInfo();
   }, []);

   //    const GetResumeInfo = () => {
   //       GlobalApi.GetResumeById(resumeId).then((resp) => {
   //          console.log(resp.data.data);
   //          setResumeInfo(resp.data.data);
   //       });
   //    };

   const HandleDownload = () => {
      window.print();
   };

   return (
      <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
         <div id='no-print'>
            <Header />
            <div className='my-10 mx-10 md:mx-20 lg:mx-36'>
               <h2 className='text-center text-2xl font-semibold tracking-tight'>
                  {/* Voila! Your just created a new Resume for you!{" "} */}
                  Thanks for using <span className="text-[#5F00D9] font-bold">Career Canvas !!</span> 😊
               </h2>
               <p className='text-center text-gray-400'>
                  Now you are ready to download your resume and you can share
                  unique resume url with your friends and family{" "}
               </p>
               <div className='flex justify-between px-44 my-10'>
                  <PrimaryButton
                     buttonText='Download'
                     icon={<Download size={18} />}
                     onClick={HandleDownload}
                  />
                  {/* <RWebShare
                     data={{
                        text: "Hello Everyone, This is my resume please open url to see it",
                        url:
                           import.meta.env.VITE_BASE_URL +
                           "/dashboard/resume/" +
                           resumeId +
                           "/view",
                        title:
                           resumeInfo?.firstName +
                           " " +
                           resumeInfo?.lastName +
                           " resume",
                     }}
                     onClick={() => {
                        console.log("shared successfully!");
                        toast.success("Resume shared successfully!");
                     }}>
                     {" "}
                     <PrimaryButton
                        buttonText='Share'
                        icon={<Send size={18} />}
                     />
                  </RWebShare> */}
                  <PrimaryButton buttonText='Share' icon={<Send size={18} />} />
               </div>
            </div>
         </div>
         <div className='my-10 mx-10 md:mx-20 lg:mx-36'>
            <div id='print-area'>
               <ResumePreview />
            </div>
         </div>
      </ResumeInfoContext.Provider>
   );
}

export default ResumeViewer;
