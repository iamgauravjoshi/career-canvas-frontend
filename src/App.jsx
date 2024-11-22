import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";
import HomeLayoutTemplate from "./templates/HomeLayoutTemplate";
import ErrorPage from "./pages/StaticPages/ErrorPage";
import Homepage from "./pages/Home/Homepage";
import ContactUs from "./pages/StaticPages/ContactUs";
import FAQ from "./pages/StaticPages/faq";
import Login from "./components/AuthComponents/Login";
import Signup, { SignupSuccess } from "./components/AuthComponents/Signup";
import ForgotPassword from "./components/AuthComponents/ForgotPassword";
import ResetPassword from "./components/AuthComponents/ResetPassword";
import EmailVerification from "./components/AuthComponents/EmailVerification";
import LoadingSpinner from "./components/common/LoadingSpinner";
import Dashboard from "./pages/Dashboard/Dashboard";
import ResumeEditor from "./pages/Resume/ResumeEditor";
import ResumeViewer from "./pages/Resume/ResumeViewer";

// protect routes that require authentication
const ProtectedRoute = ({ children }) => {
   const { isAuthenticated, user } = useAuthStore();

   if (!isAuthenticated) {
      return <Navigate to='/login' replace />;
   }

   if (!user.isVerified) {
      return <Navigate to='/verify-email' replace />;
   }

   return children;
};

// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
   const { isAuthenticated, user } = useAuthStore();

   if (isAuthenticated && user.isVerified) {
      return <Navigate to='/' replace />;
   }

   return children;
};

function App() {
   const { isCheckingAuth, checkAuth, isAuthenticated, user } = useAuthStore();

   useEffect(() => {
      checkAuth();
   }, [checkAuth]);

   if (isCheckingAuth) return <LoadingSpinner />;

   console.log("isAuthenticated: ", isAuthenticated);
   console.log("user: ", user);

   return (
      <div className='resume-app'>
         <Routes>
            <Route path='/' Component={HomeLayoutTemplate}>
               <Route path='/' element={<Homepage />} />
               <Route path='contact-us' element={<ContactUs />} />
               <Route path='faq' element={<FAQ />} />
               <Route exact path='dashboard' element={<Dashboard />} />
            </Route>
            <Route
               exact
               path='/dashboard/resume/:resumeId/edit'
               element={<ResumeEditor />}
            />
            <Route
               exact
               path='/dashboard/resume/:resumeId/view'
               element={<ResumeViewer />}
            />
            <Route
               exact
               path='dashboard'
               element={
                  <ProtectedRoute>
                     <HomeLayoutTemplate>
                        <Dashboard />
                     </HomeLayoutTemplate>
                  </ProtectedRoute>
               }
            />
            <Route
               path='/signup'
               element={
                  <RedirectAuthenticatedUser>
                     <Signup />
                  </RedirectAuthenticatedUser>
               }
            />
            <Route
               path='/login'
               element={
                  <RedirectAuthenticatedUser>
                     <Login />
                  </RedirectAuthenticatedUser>
               }
            />
            <Route path='/verify-email' element={<EmailVerification />} />
            <Route
               path='/forgot-password'
               element={
                  <RedirectAuthenticatedUser>
                     <ForgotPassword />
                  </RedirectAuthenticatedUser>
               }
            />
            <Route
               path='/email-verified'
               element={
                  <RedirectAuthenticatedUser>
                     <SignupSuccess />
                  </RedirectAuthenticatedUser>
               }
            />
            {/* /email-verified */}
            <Route
               path='/reset-password/:token'
               element={
                  <RedirectAuthenticatedUser>
                     <ResetPassword />
                  </RedirectAuthenticatedUser>
               }
            />
            <Route path='*' element={<ErrorPage />} />
            {/* <Route path='*' element={<Navigate to='/' replace />} /> */}
         </Routes>
         <Toaster />
      </div>
   );
}

export default App;
