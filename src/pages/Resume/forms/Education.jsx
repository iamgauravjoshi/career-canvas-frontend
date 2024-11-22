import React, { useContext, useEffect, useState } from "react";
import Input from "../../../components/common/Input/Input";
import {
   PrimaryButton,
   PrimaryButtonOutlined,
   DeleteButtonOutlined,
} from "../../../components/common/Buttons/Buttons";
import { ResumeInfoContext } from "../../../context/ResumeInfoContext";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { LoaderCircle, Plus } from "lucide-react";
import Textarea from "../../../components/common/Textarea/Textarea";
// import GlobalApi from './../../../../../service/GlobalApi'

const EducationFormFields = {
   universityName: "",
   degree: "",
   major: "",
   startDate: "",
   endDate: "",
   description: "",
};

function Education() {
   const [loading, setLoading] = useState(false);
   const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
   const params = useParams();
   const [educationalList, setEducationalList] = useState([
      EducationFormFields,
   ]);

   useEffect(() => {
      resumeInfo && setEducationalList(resumeInfo?.education);
   }, []);

   const handleChange = (event, index) => {
      const newEntries = educationalList.slice();
      const { name, value } = event.target;
      newEntries[index][name] = value;
      setEducationalList(newEntries);
   };

   const AddNewEducation = () => {
      setEducationalList([...educationalList, EducationFormFields]);
   };

   const RemoveEducation = () => {
      setEducationalList((educationalList) => educationalList.slice(0, -1));
   };

   const onSave = () => {
      // setLoading(true);
      const data = {
         data: {
            education: educationalList.map(({ id, ...rest }) => rest),
         },
      };

      // GlobalApi.UpdateResumeDetail(params.resumeId, data).then(
      //    (resp) => {
      //       console.log(resp);
      //       setLoading(false);
      //       toast("Details updated !");
      //    },
      //    (error) => {
      //       setLoading(false);
      //       toast("Server Error, Please try again!");
      //    }
      // );
   };

   useEffect(() => {
      setResumeInfo({
         ...resumeInfo,
         education: educationalList,
      });
   }, [educationalList]);

   return (
      <div className='p-5 shadow-xl rounded-lg border-t-[#5F00D9] border-t-4 mt-10'>
         <h2 className='font-bold text-lg'>Education</h2>
         <p>Add Your educational details</p>

         <div>
            {educationalList.map((item, index) => (
               <div>
                  <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
                     <div className='col-span-2'>
                        <Input
                           label='University Name'
                           name='universityName'
                           defaultValue={item?.universityName}
                           onChange={(e) => handleChange(e, index)}
                           required
                        />
                     </div>
                     <div>
                        <Input
                           label='Degree'
                           name='degree'
                           onChange={(e) => handleChange(e, index)}
                           defaultValue={item?.degree}
                           required
                        />
                     </div>
                     <div>
                        <Input
                           label='Major'
                           name='major'
                           onChange={(e) => handleChange(e, index)}
                           defaultValue={item?.major}
                           required
                        />
                     </div>
                     <div>
                        <Input
                           label='Start Date'
                           type='date'
                           name='startDate'
                           onChange={(e) => handleChange(e, index)}
                           defaultValue={item?.startDate}
                           required
                        />
                     </div>
                     <div>
                        <Input
                           label='End Date'
                           type='date'
                           name='endDate'
                           onChange={(e) => handleChange(e, index)}
                           defaultValue={item?.endDate}
                           required
                        />
                     </div>
                     <div className='col-span-2'>
                        {/* <Textarea
                           name='description'
                           onChange={(e) => handleChange(e, index)}
                           defaultValue={item?.description}
                        /> */}
                        <Textarea
                           label='Description'
                           name='description'
                           required
                           rows={4}
                           //   value={summary}
                           defaultValue={item?.description}
                           onChange={(e) => handleChange(e, index)}
                        />
                     </div>
                  </div>
               </div>
            ))}
         </div>
         <div className='flex justify-between'>
            <div className='flex gap-2'>
               <PrimaryButtonOutlined
                  buttonText='Add More Education'
                  icon={<Plus size={18} />}
                  onClick={AddNewEducation}
               />
               <DeleteButtonOutlined text='Remove' onClick={RemoveEducation} />
            </div>
            <PrimaryButton
               disabled={loading}
               onClick={() => onSave()}
               buttonText={
                  loading ? <LoaderCircle className='animate-spin' /> : "Save"
               }
            />
         </div>
      </div>
   );
}

export default Education;
