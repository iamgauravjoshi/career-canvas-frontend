import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../../../components/common/Input/Input";
import {
   PrimaryButton,
   PrimaryButtonOutlined,
   DeleteButtonOutlined,
} from "../../../components/common/Buttons/Buttons";
import { ResumeInfoContext } from "../../../context/ResumeInfoContext";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
// import GlobalApi from "./../../../../../service/GlobalApi";
import { toast } from "react-hot-toast";
import { LoaderCircle, Plus } from "lucide-react";

const SkillsFields = {
   name: "",
   rating: 0,
};

function Skills() {
   const [skillsList, setSkillsList] = useState([SkillsFields]);
   const { resumeId } = useParams();
   const [loading, setLoading] = useState(false);
   const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

   useEffect(() => {
      resumeInfo && setSkillsList(resumeInfo?.skills);
   }, []);

   const handleChange = (index, name, value) => {
      const newEntries = skillsList.slice();
      newEntries[index][name] = value;
      setSkillsList(newEntries);
   };

   const AddNewSkills = () => {
      setSkillsList([...skillsList, SkillsFields]);
   };

   const RemoveSkills = () => {
      setSkillsList((skillsList) => skillsList.slice(0, -1));
   };

   const onSave = () => {
      //   setLoading(true);
      const data = {
         data: {
            skills: skillsList.map(({ id, ...rest }) => rest),
         },
      };

      //   GlobalApi.UpdateResumeDetail(resumeId, data).then(
      //      (resp) => {
      //         console.log(resp);
      //         setLoading(false);
      //         toast("Details updated !");
      //      },
      //      (error) => {
      //         setLoading(false);
      //         toast("Server Error, Try again!");
      //      }
      //   );
   };

   useEffect(() => {
      setResumeInfo({
         ...resumeInfo,
         skills: skillsList,
      });
   }, [skillsList]);

   return (
      <div className='p-5 shadow-xl rounded-lg border-t-[#5F00D9] border-t-4 mt-10'>
         <h2 className='font-bold text-lg'>Skills</h2>
         <p>Add Your top professional key skills</p>
         <div>
            {skillsList.map((item, index) => (
               <div className='flex justify-between mb-2 border rounded-lg p-3 '>
                  <div>
                     <Input
                        label='Name'
                        name='name'
                        defaultValue={item.name}
                        onChange={(e) =>
                           handleChange(index, "name", e.target.value)
                        }
                        required
                     />
                  </div>
                  <Rating
                     style={{ maxWidth: 120 }}
                     value={item.rating}
                     onChange={(v) => handleChange(index, "rating", v)}
                  />
               </div>
            ))}
         </div>
         <div className='flex justify-between'>
            <div className='flex gap-2'>
               <PrimaryButtonOutlined
                  buttonText='Add More Skill'
                  icon={<Plus size={18} />}
                  onClick={AddNewSkills}
               />
               <DeleteButtonOutlined text='Remove' onClick={RemoveSkills} />
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

export default Skills;
