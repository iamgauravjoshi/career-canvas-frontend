import React, { useContext, useEffect, useState } from "react";
import { Plus } from "lucide-react";
import Input from "../../../components/common/Input/Input";
import {
   PrimaryButton,
   PrimaryButtonOutlined,
   DeleteButtonOutlined,
} from "../../../components/common/Buttons/Buttons";
import { ResumeInfoContext } from "../../../context/ResumeInfoContext";
// import RichTextEditor from '../RichTextEditor'
import { useParams } from "react-router-dom";
// import GlobalApi from './../../../../../service/GlobalApi'
import { toast } from "react-hot-toast";
import { LoaderCircle } from "lucide-react";
import RichTextEditor from "../components/RichTextEditor";

const ExperienceFormFields = {
   title: "",
   companyName: "",
   city: "",
   state: "",
   startDate: "",
   endDate: "",
   workSummary: "",
};

function Experience() {
   const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
   const [experinceList, setExperinceList] = useState([ExperienceFormFields]);
   // const params = useParams();
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      resumeInfo?.experience?.length > 0 &&
         setExperinceList(resumeInfo?.experience);
   }, []);

   const handleChange = (index, event) => {
      const { name, value } = event.target;
      const newEntries = experinceList.slice();
      newEntries[index][name] = value;
      setExperinceList(newEntries);
   };

   const AddNewExperience = () => {
      setExperinceList([...experinceList, ExperienceFormFields]);
   };

   const RemoveExperience = () => {
      setExperinceList((experinceList) => experinceList.slice(0, -1));
   };

   const handleRichTextEditor = (e, name, index) => {
      const newEntries = experinceList.slice();
      newEntries[index][name] = e.target.value;
      setExperinceList(newEntries);
   };

   useEffect(() => {
      setResumeInfo({
         ...resumeInfo,
         experience: experinceList,
      });

      //   console.log("experinceList: ", experinceList);
      //   console.log("resumeInfo: ", resumeInfo);
   }, [experinceList]);

   const onSave = () => {
      //   setLoading(true);
      const data = {
         data: {
            experience: experinceList.map(({ id, ...rest }) => rest),
         },
      };

      // GlobalApi.UpdateResumeDetail(params?.resumeId,data).then(res=>{
      //     setLoading(false);
      //     toast('Details updated !')
      // },(error)=>{
      //     setLoading(false);
      // })
   };
   return (
      <div>
         <div className='p-5 shadow-xl rounded-lg border-t-[#5F00D9] border-t-4 mt-10'>
            <h2 className='font-bold text-lg'>Professional Experience</h2>
            <p>Add Your previous Job experience</p>
            <div>
               {experinceList.map((item, index) => (
                  <div key={index}>
                     <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
                        <div>
                           <Input
                              label='Position Title'
                              name='title'
                              onChange={(event) => handleChange(index, event)}
                              defaultValue={item?.title}
                              required
                           />
                        </div>
                        <div>
                           <Input
                              label='Company Name'
                              name='companyName'
                              onChange={(event) => handleChange(index, event)}
                              defaultValue={item?.companyName}
                              required
                           />
                        </div>
                        <div>
                           <Input
                              label='City'
                              name='city'
                              onChange={(event) => handleChange(index, event)}
                              defaultValue={item?.city}
                           />
                        </div>
                        <div>
                           <Input
                              label='State'
                              name='state'
                              onChange={(event) => handleChange(index, event)}
                              defaultValue={item?.state}
                              required
                           />
                        </div>
                        <div>
                           <Input
                              label='Start Date'
                              type='date'
                              name='startDate'
                              onChange={(event) => handleChange(index, event)}
                              defaultValue={item?.startDate}
                              required
                           />
                        </div>
                        <div>
                           <Input
                              label='End Date'
                              type='date'
                              name='endDate'
                              onChange={(event) => handleChange(index, event)}
                              defaultValue={item?.endDate}
                              required
                           />
                        </div>
                        <div className='col-span-2'>
                           <RichTextEditor
                              index={index}
                              defaultValue={item?.workSummary}
                              onRichTextEditorChange={(event) =>
                                 handleRichTextEditor(
                                    event,
                                    "workSummary",
                                    index
                                 )
                              }
                           />
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            <div className='flex justify-between'>
               <div className='flex gap-2'>
                  <PrimaryButtonOutlined
                     buttonText='Add More Experience'
                     icon={<Plus size={18} />}
                     onClick={AddNewExperience}
                  />
                  <DeleteButtonOutlined
                     text='Remove'
                     onClick={RemoveExperience}
                  />
               </div>
               <PrimaryButton
                  buttonText={
                     loading ? (
                        <LoaderCircle className='animate-spin' />
                     ) : (
                        "Save"
                     )
                  }
                  disabled={loading}
                  onClick={() => onSave()}
               />
               {/* <Button disabled={loading} onClick={() => onSave()}>
                  {loading ? <LoaderCircle className='animate-spin' /> : "Save"}
               </Button> */}
            </div>
         </div>
      </div>
   );
}

export default Experience;
