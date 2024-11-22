import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function MainSection() {
   return (
      <section className='relative overflow-hidden bg-white'>
         <div className='pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40'>
            <div className='relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8'>
               <div className='sm:max-w-lg'>
                  <h1 className='text-6xl font-bold tracking-tighter text-gray-900 sm:text-6xl'>
                     A{" "}
                     <span className='bg-clip-text bg-gradient-to-tr	from-[#5F00D9] to-violet-700 text-transparent'>
                        Resume
                     </span>{" "}
                     that stands out!
                  </h1>
                  <p className='mt-4 text-xl text-gray-500'>
                     Easily create the perfect resume for any job using our
                     best-in-class resume builder platform.
                  </p>
               </div>
               <div>
                  <div className='mt-10'>
                     {/* Decorative image grid */}
                     <div
                        aria-hidden='true'
                        className='pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl'>
                        <div className='absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8'>
                           <div className='flex items-center space-x-6 lg:space-x-8'>
                              <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
                                 <motion.div
                                    initial={{ opacity: 0, y: 60 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7 }}
                                    className='h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100'>
                                    <img
                                       alt=''
                                       src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg'
                                       className='h-full w-full object-cover object-center'
                                    />
                                 </motion.div>
                                 <motion.div
                                    initial={{ opacity: 0, y: 80 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className='h-64 w-44 overflow-hidden rounded-lg'>
                                    <img
                                       alt=''
                                       src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg'
                                       className='h-full w-full object-cover object-center'
                                    />
                                 </motion.div>
                              </div>
                              <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
                                 <motion.div
                                    initial={{ opacity: 0, y: 60 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className='h-64 w-44 overflow-hidden rounded-lg'>
                                    <img
                                       alt=''
                                       src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg'
                                       className='h-full w-full object-cover object-center'
                                    />
                                 </motion.div>
                                 <motion.div
                                    initial={{ opacity: 0, y: 60 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className='h-64 w-44 overflow-hidden rounded-lg'>
                                    <img
                                       alt=''
                                       src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg'
                                       className='h-full w-full object-cover object-center'
                                    />
                                 </motion.div>
                                 <motion.div
                                    initial={{ opacity: 0, y: 60 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7 }}
                                    className='h-64 w-44 overflow-hidden rounded-lg'>
                                    <img
                                       alt=''
                                       src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg'
                                       className='h-full w-full object-cover object-center'
                                    />
                                 </motion.div>
                              </div>
                              <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
                                 <motion.div
                                    initial={{ opacity: 0, y: 70 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className='h-64 w-44 overflow-hidden rounded-lg'>
                                    <img
                                       alt=''
                                       src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg'
                                       className='h-full w-full object-cover object-center'
                                    />
                                 </motion.div>
                                 <motion.div
                                    initial={{ opacity: 0, y: 80 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className='h-64 w-44 overflow-hidden rounded-lg'>
                                    <img
                                       alt=''
                                       src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg'
                                       className='h-full w-full object-cover object-center'
                                    />
                                 </motion.div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className='flex gap-10 w-fit'>
                        <Link
                           to={"/dashboard"}
                           className='flex w-fit px-4 py-2.5 font-medium bg-[#5F00D9] rounded-md outline-0 text-white hover:opacity-90'>
                           Create Resume
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default MainSection;
