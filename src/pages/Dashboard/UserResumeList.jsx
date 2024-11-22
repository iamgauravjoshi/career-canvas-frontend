import React, { useState } from "react";
import { Link } from "react-router-dom";
// import * as AlertDialog from "@radix-ui/react-alert-dialog";
import {
   GiAbstract020,
   GiAbstract024,
   GiAbstract041,
   GiAbstract104,
} from "react-icons/gi";
import { Eye, Pencil, Download, Trash2, EllipsisVertical } from "lucide-react";
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "../../components/common/Popover/Popover";
import AlertDialog from "../../components/common/Dialogs/AlertDialog";

const UserResumeData = [
   {
      resumeId: 1,
      heading: "Resume 1",
      color: "#fcf4ff",
      icon: <GiAbstract020 size='2.5rem' className='text-[#D566FF]' />,
   },
   {
      resumeId: 2,
      heading: "Resume 2",
      color: "#fefaf0",
      icon: <GiAbstract024 size='2.5rem' className='text-[#DDA10C]' />,
   },
   {
      resumeId: 3,
      heading: "Resume 3",
      color: "#fff4f4",
      icon: <GiAbstract041 size='2.5rem' className='text-[#FF6080]' />,
   },
   {
      resumeId: 4,
      heading: "Resume 4",
      color: "#f3faff",
      icon: <GiAbstract104 size='2.5rem' className='text-[#269FFF]' />,
   },
];

function UserResumeList({ resume }) {
   const [openAlert, setOpenAlert] = useState(false);

   // const openAlertDialog = () => {
   //    setOpenAlert(true);
   //    alert("Delete button clicked!!");
   // }
   const openAlertDialog = () => setOpenAlert(true);
   const closeAlertDialog = () => setOpenAlert(false);

   const handleOutsideClick = (event) => {
      if (event.target === event.currentTarget) {
         closeAlertDialog();
      }
   };

   const handleResumeDelete = () => {
      // setLoading(true);
      // GlobalApi.DeleteResumeById(resume.documentId).then(
      //    (resp) => {
      //       console.log(resp);
      //       toast("Resume Deleted!");
      //       refreshData();
      //       setLoading(false);
      //       setOpenAlert(false);
      //    },
      //    (error) => {
      //       setLoading(false);
      //    }
      // );
      console.log("Resume Deleted Successfully!");
      closeAlertDialog();
   };

   const alertProps = {
      isDialogOpen: openAlert,
      closeAlertDialog: closeAlertDialog,
      handleDialogAction: handleResumeDelete,
      handleOutsideClick: handleOutsideClick,
      dialogHeading: "Are you sure to delete the resume?",
      dialogDescription:
         "This action cannot be undone. This will permanently delete resume data from our servers.",
   };

   return (
      <div className='grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-3 sm:p-8'>
         {resume && resume?.resumeId && (
            <div
               key={resume?.resumeId}
               className='flex gap-4 bg-[#fcf4ff] border-2 border-[#D566FF] rounded-xl shadow-sm p-6'>
               <div className='min-w-max'>
                  <GiAbstract020 size='2.5rem' className='text-[#D566FF]' />
               </div>
               <div className='space-y-2 w-full'>
                  <h3 className='text-[22px] font-semibold tracking-tight'>
                     {resume?.resumeName}
                  </h3>
                  <span className='text-sm font-medium'>
                     {resume?.category}
                  </span>
                  <p className='leading-8 text-gray-600 font-normal'>
                     {resume?.description}
                  </p>
               </div>
               <ResumeListDropdown
                  resumeId={resume?.resumeId}
                  openAlertDialog={openAlertDialog}
               />
               <AlertDialog {...alertProps} />
            </div>
         )}

         {UserResumeData?.map((resume, index) => {
            return (
               <>
                  <div
                     key={resume?.resumeId}
                     className={`flex gap-4 relative border-2 border-gray-200 rounded-xl shadow-sm p-6 bg-[${resume?.color}]`}>
                     <div className='min-w-max'>{resume?.icon}</div>
                     <div className='space-y-2'>
                        <h3 className='text-[22px] font-semibold'>
                           {resume?.heading}
                        </h3>
                        <p className='leading-8 text-gray-500 font-normal'>
                           Lorem ipsum dolor sit amet, consectetuer adipiscing
                           elit, sed diam euismod volutpat.
                        </p>
                     </div>
                     <ResumeListDropdown
                        resumeId={resume?.resumeId}
                        openAlertDialog={openAlertDialog}
                     />
                  </div>
               </>
            );
         })}
      </div>
   );
}

const ResumeListDropdown = ({ resumeId, openAlertDialog }) => {
   return (
      <Popover>
         <PopoverTrigger asChild>
            <EllipsisVertical className='text-xl cursor-pointer text-zinc-500' />
         </PopoverTrigger>
         <PopoverContent className='max-w-44 px-2 py-2 overflow-y-auto rounded-lg bg-white border border-zinc-200 drop-shadow-lg '>
            <div className='py-2 first:pt-0 last:pb-0'>
               <Link
                  to={`/dashboard/resume/${resumeId}/view`}
                  className='flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 transition-colors hover:bg-blue-100 hover:text-blue-600'>
                  <Eye size={18} />
                  View
               </Link>
               <Link
                  to={`/dashboard/resume/${resumeId}/edit`}
                  className='flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 transition-colors hover:bg-blue-100 hover:text-blue-600'>
                  <Pencil size={18} />
                  Edit
               </Link>
               <Link
                  to={`/dashboard/resume/${resumeId}/view`}
                  className='flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 transition-colors hover:bg-blue-100 hover:text-blue-600'>
                  <Download size={18} />
                  Download
               </Link>
               <button
                  onClick={openAlertDialog}
                  type='button'
                  className='flex items-center w-full gap-x-3.5 py-2 px-3 border-0 outline-none rounded-md text-sm text-gray-800 transition-colors hover:bg-red-200 hover:text-red-700'>
                  <Trash2 size={18} />
                  Delete
               </button>
            </div>
         </PopoverContent>
      </Popover>
   );
};

export default UserResumeList;
