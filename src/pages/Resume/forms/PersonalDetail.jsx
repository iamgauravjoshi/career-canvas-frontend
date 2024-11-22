import React, { useContext, useEffect, useState } from "react";
import { PrimaryButton } from "../../../components/common/Buttons/Buttons";
import Input from "../../../components/common/Input/Input";
import { ResumeInfoContext } from "../../../context/ResumeInfoContext";
import { LoaderCircle } from "lucide-react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

function PersonalDetail({ enabledNext }) {
   // const params = useParams();
   const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
   const [formData, setFormData] = useState();
   const [loading, setLoading] = useState(false);

   const handleInputChange = (e) => {
      enabledNext(false);
      const { name, value } = e.target;

      setFormData({
         ...formData,
         [name]: value,
      });
      setResumeInfo({
         ...resumeInfo,
         [name]: value,
      });
   };

   const onSave = (e) => {
      e.preventDefault();
      enabledNext(true);
      setLoading(true);
      toast.success("Details updated successfully!");
      const data = {
         data: formData,
      };

      // ******* API Calling Method *******
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
      <div className='p-5 shadow-xl rounded-lg border-t-[#5F00D9] border-t-4 mt-10'>
         <h2 className='font-bold text-lg'>Personal Detail</h2>
         <p>Get Started with the basic information</p>

         <form onSubmit={onSave}>
            <div className='grid grid-cols-2 mt-5 gap-3'>
               <div>
                  <Input
                     label='First Name'
                     name='firstName'
                     defaultValue={resumeInfo?.firstName}
                     onChange={handleInputChange}
                     required
                  />
               </div>
               <div>
                  <Input
                     label='Last Name'
                     name='lastName'
                     onChange={handleInputChange}
                     defaultValue={resumeInfo?.lastName}
                     required
                  />
               </div>
               <div className='col-span-2'>
                  <Input
                     label='Job Title'
                     name='jobTitle'
                     defaultValue={resumeInfo?.jobTitle}
                     onChange={handleInputChange}
                     required
                  />
               </div>
               <div className='col-span-2'>
                  <Input
                     label='Address'
                     name='address'
                     defaultValue={resumeInfo?.address}
                     onChange={handleInputChange}
                     required
                  />
               </div>
               <div>
                  <Input
                     label='Phone'
                     name='phone'
                     defaultValue={resumeInfo?.phone}
                     onChange={handleInputChange}
                     required
                  />
               </div>
               <div>
                  <Input
                     label='Email'
                     name='email'
                     defaultValue={resumeInfo?.email}
                     onChange={handleInputChange}
                     required
                  />
               </div>
            </div>
            <div className='mt-3 flex justify-end'>
               <PrimaryButton type='submit' disabled={loading}>
                  {loading ? <LoaderCircle className='animate-spin' /> : "Save"}
               </PrimaryButton>
            </div>
         </form>
      </div>
   );
}

export default PersonalDetail;
