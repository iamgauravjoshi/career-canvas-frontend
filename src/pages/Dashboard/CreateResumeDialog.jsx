import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Plus } from "lucide-react";
import { CreateButtonWithIcon } from "../../components/common/Buttons/Buttons";
import { setValueInLocalStorage } from "../../utils/utilities";
import ResumeContext from "../../context/ResumeContext";
import FormDialog from "../../components/common/Dialogs/FormDialog";
import { useForm } from "react-hook-form";
import { useResumeStore } from "../../store/resumeStore";
import { useAuthStore } from "../../store/authStore";

function CreateResumeDialog() {
   const { resume, setResume } = useContext(ResumeContext);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const navigate = useNavigate();
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const { isAuthenticated, isLoading } = useAuthStore();
   const { createResume } = useResumeStore();

   const openModal = () => setIsModalOpen(true);
   const closeModal = () => setIsModalOpen(false);

   const handleOutsideClick = (event) => {
      if (event.target === event.currentTarget) {
         closeModal();
      }
   };

   const onFormSubmit = async (values) => {
      // if (!isAuthenticated) {
      //    return;
      // }
      // const uuid = uuidv4();
      // const formValues = { resumeId: uuid, ...values, sections: [] };
      const formValues = { ...values };
      // setValueInLocalStorage("resume", formValues);

      const { data, error } = await createResume(formValues);

      // setResume(formValues);
      closeModal();

      // setTimeout(() => {
      //    navigate(`/dashboard/resume/${resume.resumeId}`);
      // }, 1500);
   };

   const dialogProps = {
      isModalOpen: isModalOpen,
      closeModal: closeModal,
      handleOutsideClick: handleOutsideClick,
      onSubmit: handleSubmit(onFormSubmit),
      dialogHeading: "Create New Resume",
      inputFields: [
         {
            label: "Resume Name",
            type: "text",
            placeholder: "Type your resume name",
            required: true,
            ...register("resumeName"),
         },
         {
            label: "Category",
            type: "text",
            placeholder: "Type the resume category",
            required: true,
            ...register("category"),
         },
      ],
      textarea: [
         {
            label: "Resume Description",
            rows: 4,
            placeholder: "Write resume description here",
            required: true,
            ...register("description"),
         },
      ],
      submitButtonIcon: <Plus size={16} />,
      submitButtonText: "Create Resume",
   };

   return (
      <div className='flex justify-center m-5'>
         <CreateButtonWithIcon
            onClick={openModal}
            buttonText='Create New Resume'
            icon={<Plus />}
         />
         <FormDialog {...dialogProps} />
      </div>
   );
}

export default CreateResumeDialog;
