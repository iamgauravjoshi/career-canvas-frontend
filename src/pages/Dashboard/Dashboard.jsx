import React, { useState, useContext } from "react";
import CreateResumeDialog from "./CreateResumeDialog";
import UserResumeList from "./UserResumeList";
import ResumeContext from "../../context/ResumeContext";
// import { LinkPrimary } from "../../components/common/Buttons/Buttons";

function Dashboard() {
   const { resume } = useContext(ResumeContext);
   const [resumeList, setResumeList] = useState([]);
   // const { user } = useUser();

   // useEffect(() => {
   //    user && GetResumesList();
   // }, [user]);

   /* ----- Used to Get Users Resume List ----- */
   // const GetResumesList = () => {
   //    GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress).then(
   //       (resp) => {
   //          console.log(resp.data.data);
   //          setResumeList(resp.data.data);
   //       }
   //    );
   // };

   return (
      <>
         <div className='flex flex-col gap-6 items-center m-5'>
            <CreateResumeDialog />
            {/* {resumeList.length > 0
               ? resumeList.map((resume, index) => (
                    <>
                       <ResumeCardItem
                          resume={resume}
                          key={index}
                          refreshData={GetResumesList}
                       />
                       <UserResumeList />
                    </>
                 ))
               : [1, 2, 3, 4].map((item, index) => (
                    <div className='h-[280px] rounded-lg bg-slate-200 animate-pulse' />
                 ))} */}
            <UserResumeList resume={resume} />
         </div>
      </>
   );
}

export default Dashboard;
