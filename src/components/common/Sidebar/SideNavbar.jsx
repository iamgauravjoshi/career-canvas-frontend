import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { UserRound, Settings, LayoutDashboard, LogOut } from "lucide-react";
import { useAuthStore } from "../../../store/authStore";

function SideNavbar({ isFlyoutOpen }) {
   const { isAuthenticated, user, logout } = useAuthStore();

   const handleLogout = () => {
      logout();
   };

   return (
      <>
         <AnimatePresence>
            {isFlyoutOpen && (
               <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5 }}
                  className='fixed right-4 z-50 flex flex-col w-64 h-fit px-2 py-4 overflow-y-auto rounded-lg bg-white border border-zinc-200 drop-shadow-lg '>
                  <aside>
                     <div className='flex flex-col items-center -mx-2'>
                        <img
                           className='object-cover w-24 h-24 mx-2 rounded-full'
                           src='https://avatars.githubusercontent.com/u/66554266?v=4'
                           alt='avatar'
                        />
                        <h4 className='mx-2 mt-4 text-lg font-medium'>
                           {isAuthenticated ? user.name : "Gaurav Joshi"}
                        </h4>
                        <p className='mx-2 mt-1 text-base font-medium text-zinc-600'>
                           {isAuthenticated ? user.email : "gaurav@gmail.com"}
                        </p>
                     </div>
                     <div>
                        <nav className='flex flex-col gap-2 justify-between flex-1 mt-6 text-zinc-600 text-sm'>
                           <Link
                              to='user/dashboard'
                              className='flex items-center px-4 py-2 transition-colors duration-300 transform rounded-lg hover:bg-blue-100 hover:text-blue-600'>
                              <LayoutDashboard size={20} />
                              <span className='mx-4 font-medium'>
                                 Dashboard
                              </span>
                           </Link>
                           <Link
                              to='user/account'
                              className='flex items-center px-4 py-2 transition-colors duration-300 transform rounded-lg hover:bg-blue-100 hover:text-blue-600'>
                              <UserRound size={20} />
                              <span className='mx-4 font-medium'>Accounts</span>
                           </Link>
                           <Link
                              to='/user/settings'
                              className='flex items-center px-4 py-2 transition-colors duration-300 transform rounded-lg hover:bg-blue-100 hover:text-blue-600'>
                              <Settings size={20} />
                              <span className='mx-4 font-medium'>Settings</span>
                           </Link>
                           <button
                              onClick={handleLogout}
                              className='flex items-center px-4 py-2 transition-colors duration-300 transform rounded-lg hover:bg-red-200 hover:text-[#862633]'>
                              <LogOut size={20} />
                              <span className='mx-4 font-medium'>Log Out</span>
                           </button>
                        </nav>
                     </div>
                  </aside>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
}

export default SideNavbar;
