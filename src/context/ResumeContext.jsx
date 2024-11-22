import React, { createContext, useState } from "react";
import { getValueFromLocalStorage } from "../utils/utilities";

const ResumeContext = createContext({});

export const ResumeContextProvider = ({ children }) => {
   const [resume, setResume] = useState(
      getValueFromLocalStorage("resume", {})
   );

   console.log("Resume Data from Context: ", resume);

   return (
      <ResumeContext.Provider
         value={{
            resume,
            setResume,
         }}>
         {children}
      </ResumeContext.Provider>
   );
};

export default ResumeContext;
