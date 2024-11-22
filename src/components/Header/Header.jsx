import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LogIn } from "lucide-react";
import { useAuthStore } from "../../store/authStore";
import SideNavbar from "../common/sidebar/SideNavbar";

const NavbarList = [
   {
      name: "Home",
      link: "/",
   },
   {
      name: "About Us",
      link: "/about-us",
   },
];

export default function Header() {
   const [isNavOpen, setIsNavOpen] = useState(false);
   const [toggle, setToggle] = useState(false);
   const [isFlyoutOpen, setIsFlyoutOpen] = useState(false);
   const [selected, setSelected] = useState("Home");
   const toggleClass = () => {
      setIsNavOpen(!isNavOpen);
      const closeAfterClick = document.querySelector("#nav-icon4");
      closeAfterClick?.classList?.toggle("open");
   };

   const { isAuthenticated } = useAuthStore();

   return (
      <>
         {/* #7091E6  #283190  #1a91f0 */}
         {/* fixed right-0 left-0 z-50 top-0 */}
         <header className='sticky top-0 z-10 lg:px-14 xl:px-28 border-b border-slate-200 bg-slate-50 transition-all duration-700'>
            <div className='flex justify-between w-full max-w-screen-3xl mx-auto font-semibold h-20 px-5'>
               <Link to={"/"} className='flex items-center gap-2 mr-6'>
                  <img
                     alt='Logo'
                     src='./logo-dark.svg'
                     className='w-6 sm:w-7 h-5 sm:h-8'
                  />
                  <h1 className='font-sans text-xl sm:text-2xl font-bold uppercase tracking-tight leading-none'>
                     Career Canvas
                  </h1>
               </Link>
               <div className='flex items-center sm:gap-3 md:gap-8'>
                  {NavbarList.map((data, index) => (
                     <div
                        className='group'
                        data-testid={`${data.name}-navlink`}
                        key={index}
                        onClick={() => setSelected(data.name)}>
                        <Link
                           to={data.link}
                           className={`text-m text-center font-medium  opacity-95 cursor-pointer md:flex md:items-center hidden hover:text-blue-600 ${
                              selected == data?.name && "text-blue-600"
                           }`}>
                           {data.name}
                        </Link>
                        <div
                           className={`w-full h-[3px] rounded-full ${
                              selected == data?.name
                                 ? "bg-blue-600 opacity-90"
                                 : "group-hover:bg-blue-600 group-hover:opacity-90"
                           }`}></div>
                     </div>
                  ))}
                  {isAuthenticated ? (
                     <button
                        className='avatar pointer ml-5'
                        onClick={() => setIsFlyoutOpen(!isFlyoutOpen)}>
                        <img
                           className='w-10 h-10 rounded-full pointer'
                           src='https://avatars.githubusercontent.com/u/66554266?v=4'
                           alt='Rounded avatar'
                        />
                     </button>
                  ) : (
                     <Link
                        to='/login'
                        className='flex items-center gap-2 text-white bg-[#5F00D9] hover:bg-violet-700 font-medium rounded-lg text-sm px-4 py-2 text-center ml-5'>
                        <LogIn size={18} />
                        Log In
                     </Link>
                  )}

                  <button
                     className='w-12 h-12 relative focus:outline-none md:hidden'
                     onClick={() => {
                        toggleClass();
                        setToggle(!toggle);
                     }}>
                     <div className='block w-5 absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50'>
                        <span
                           className={`block absolute h-0.5 w-7  bg-current transform transition duration-300 ease-in-out ${
                              toggle ? "rotate-45" : "-translate-y-1.5"
                           }  
                `}></span>
                        <span
                           className={`block absolute h-0.5 w-7  bg-current transform transition duration-300 ease-in-out ${
                              toggle && "opacity-0"
                           }`}></span>
                        <span
                           className={`block absolute h-0.5 w-7  bg-current transform transition duration-300 ease-in-out ${
                              toggle ? "-rotate-45" : "translate-y-1.5"
                           }`}></span>
                     </div>
                  </button>
               </div>
               <div
                  className={`md:invisible w-full h-full flex flex-wrap flex-col justify-center fixed left-0 top-11 ${
                     toggle ? "visible z-20" : "invisible -z-10"
                  }`}>
                  <div
                     className={`w-full h-full bg-[#365CCE] absolute left-0 transition-all duration-300 ease-in-out top-8 ${
                        toggle ? "ssm:w-3/5 opacity-60" : "ssm:w-0 -z-10"
                     }`}
                  />
                  <div
                     data-tilt
                     data-tilt-perspective='2000'
                     className='relative z-20 text-center pt-24 w-full ssm:w-3/5'>
                     <div
                        className={`block min-h-[130px] w-fit mx-auto transform transition ${
                           toggle
                              ? "opacity-100 -translate-y-1/3 delay-[0.45s]"
                              : "opacity-0 -translate-y-0  delay-[0s]"
                        }`}>
                        <ul
                           className={`transition w-fit flex flex-col gap-5 my-5 ${
                              toggle ? "delay-[0.45s]" : "delay-[0s]"
                           }`}>
                           {NavbarList.map((data, index) => (
                              <span
                                 className='font-semibold  text-opacity-100 text-center cursor-pointer px-2 md:hidden'
                                 key={index}>
                                 {data.name}
                              </span>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <SideNavbar isFlyoutOpen={isFlyoutOpen} />
         {/* Add your content from below div */}
         {/* <div className="w-5 mt-20"></div> */}
      </>
   );
}
