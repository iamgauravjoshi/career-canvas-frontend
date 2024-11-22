import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ResumeContextProvider } from "./context/ResumeContext.jsx";

createRoot(document.getElementById("root")).render(
   // <StrictMode>
   <ResumeContextProvider>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </ResumeContextProvider>
   // </StrictMode>
);
