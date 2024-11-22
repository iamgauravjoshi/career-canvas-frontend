import React, { useState, useContext } from "react";
import { ResumeInfoContext } from "../../../context/ResumeInfoContext";
import { PrimaryButtonOutlined } from "../../../components/common/Buttons/Buttons";
import { Brain, LoaderCircle } from "lucide-react";
import {
   BtnBold,
   BtnBulletList,
   BtnClearFormatting,
   BtnItalic,
   BtnLink,
   BtnNumberedList,
   BtnStrikeThrough,
   BtnStyles,
   BtnUnderline,
   Editor,
   EditorProvider,
   HtmlButton,
   Separator,
   Toolbar,
} from "react-simple-wysiwyg";
import { AIChatSession } from "../../../store/GeminiAiModel";
import { toast } from "react-hot-toast";

const PROMPT =
   "position title: {positionTitle} , Depends on position title give me 5-7 bullet points for my experience in resume (Please do not add experince level and No JSON array) , give me result in HTML tags";

function RichTextEditor({ onRichTextEditorChange, index, defaultValue }) {
   const [value, setValue] = useState(defaultValue);
   const { resumeInfo } = useContext(ResumeInfoContext);
   const [loading, setLoading] = useState(false);

   const GenerateSummaryFromAI = async () => {
      if (!resumeInfo?.experience[index]?.title) {
         toast.error("Please Add Position Title");
         return;
      }
      setLoading(true);
      const prompt = PROMPT.replace(
         "{positionTitle}",
         resumeInfo.experience[index].title
      );

      let result = await AIChatSession.sendMessage(prompt);
      result = JSON.parse(result.response.text());
      const resp = JSON.stringify(result.experience);
      console.log("Result: ", resp);
      console.log("Actual Result: ", resp.replace("[", "").replace("]", ""));
      setValue(resp.replace("[", "").replace("]", ""));
      setLoading(false);
   };

   return (
      <div>
         <div className='flex justify-between my-2'>
            <label className='text-xs'>Summary</label>
            <PrimaryButtonOutlined
               buttonText={
                  loading ? (
                     <LoaderCircle className='animate-spin' />
                  ) : (
                     <>
                        <Brain className='font-bold' size={18} />
                        Generate from AI
                     </>
                  )
               }
               onClick={GenerateSummaryFromAI}
               disabled={loading}
            />
         </div>
         <EditorProvider>
            <Editor
               value={value}
               onChange={(e) => {
                  setValue(e.target.value);
                  onRichTextEditorChange(e);
               }}>
               <Toolbar>
                  <BtnBold />
                  <BtnItalic />
                  <BtnUnderline />
                  <BtnStrikeThrough />
                  <Separator />
                  <BtnNumberedList />
                  <BtnBulletList />
                  <Separator />
                  <BtnLink />
               </Toolbar>
            </Editor>
         </EditorProvider>
      </div>
   );
}

export default RichTextEditor;
