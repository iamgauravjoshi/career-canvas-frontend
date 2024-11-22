import { PrimaryButton } from "../../../components/common/Buttons/Buttons";
import Textarea from "../../../components/common/Textarea/Textarea";
import { ResumeInfoContext } from "../../../context/ResumeInfoContext";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import GlobalApi from "./../../../../../service/GlobalApi";
import { Brain, LoaderCircle } from "lucide-react";
import { toast } from "react-hot-toast";
import { AIChatSession } from "../../../store/GeminiAiModel";

const prompt =
   "Job Title: {jobTitle} , Depends on job title give me list of  summary for 3 experience level, Mid Level and Freasher level in 3 -4 lines in array format, With summary and experience_level Field in JSON Format";

function Summary({ enabledNext }) {
   const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
   const [summary, setSummary] = useState();
   const [loading, setLoading] = useState(false);
   const params = useParams();
   const [aiGeneratedSummaryList, setAiGenerateSummaryList] = useState();

   useEffect(() => {
      resumeInfo?.summary && setSummary(resumeInfo?.summary);
   }, []);

   useEffect(() => {
      setResumeInfo({
         ...resumeInfo,
         summary: summary,
      });
   }, [summary]);

   const GenerateSummaryFromAI = async () => {
      //   setLoading(true);
      const PROMPT = prompt.replace("{jobTitle}", resumeInfo?.jobTitle);
      console.log(PROMPT);
      const result = await AIChatSession.sendMessage(PROMPT);
      console.log(JSON.parse(result.response.text()));

      setAiGenerateSummaryList(JSON.parse(result.response.text()));
      //   setLoading(false);
   };

   const onSave = (e) => {
      e.preventDefault();

      //   setLoading(true);
      const data = {
         data: {
            summary: summary,
         },
      };
      //   GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(
      //      (resp) => {
      //         console.log(resp);
      //         enabledNext(true);
      //         setLoading(false);
      //         toast.success("Details updated");
      //      },
      //      (error) => {
      //         setLoading(false);
      //      }
      //   );
   };

   return (
      <div>
         <div className='p-5 shadow-xl rounded-lg border-t-[#5F00D9] border-t-4 mt-10'>
            <h2 className='font-bold text-lg'>Summary</h2>
            <p>Add Summary for your job title</p>

            <form className='flex flex-col gap-4 mt-7' onSubmit={onSave}>
               <button
                  className='flex gap-2 self-end items-center text-[#5F00D9] border-2 border-[#5F00D9] hover:bg-[#5F00D9] hover:text-white transition-all font-semibold rounded-lg text-sm px-4 py-2'
                  onClick={() => GenerateSummaryFromAI()}>
                  <Brain className='font-bold' size={18} />
                  Generate from AI
               </button>
               <Textarea
                  label='Resume Summary'
                  name='summary'
                  required={true}
                  rows={6}
                  //   value={summary}
                  defaultValue={summary ? summary : resumeInfo?.summary}
                  onChange={(e) => setSummary(e.target.value)}
               />
               <div className='mt-2 flex justify-end'>
                  <PrimaryButton
                     type='submit'
                     disabled={loading}
                     buttonText={
                        loading ? (
                           <LoaderCircle className='animate-spin' />
                        ) : (
                           "Save"
                        )
                     }
                     //   onClick={() => GenerateSummaryFromAI()}
                  />
               </div>
            </form>
         </div>

         {aiGeneratedSummaryList && (
            <div className='my-5'>
               <h2 className='font-bold text-lg'>Suggestions</h2>
               {aiGeneratedSummaryList?.map((item, index) => (
                  <div
                     key={index}
                     onClick={() => setSummary(item?.summary)}
                     className='p-5 shadow-lg my-4 rounded-lg cursor-pointer'>
                     <h2 className='font-bold my-1 text-primary'>
                        Level: {item?.experience_level}
                     </h2>
                     <p>{item?.summary}</p>
                  </div>
               ))}
            </div>
         )}
      </div>
   );
}

export default Summary;
