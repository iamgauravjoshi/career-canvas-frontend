import React from "react";
// import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

function ContactUs() {
   return (
      <section className='bg-white dark:bg-gray-900'>
         <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
            <div className='-mx-4 flex flex-wrap lg:justify-between'>
               <div className='w-full px-4 lg:w-1/2 xl:w-6/12'>
                  <div className='mb-12 max-w-[570px] lg:mb-0'>
                     <h2 className='mb-4 text-4xl tracking-tight font-extrabold  text-gray-900 dark:text-white'>
                        Contact Us
                     </h2>
                     <span className='mb-4 block text-base font-semibold text-primary'>
                        GET IN TOUCH WITH US
                     </span>
                     <p className='mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
                        Got a technical issue? Want to send feedback about a
                        beta feature? Need details about our Business plan? Let
                        us know.
                     </p>
                     <div className='mb-8 flex w-full max-w-[370px]'>
                        <div className='mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]'>
                           <MapPin />
                        </div>
                        <div className='w-full'>
                           <h4 className='mb-1 text-xl font-bold text-dark '>
                              Our Location
                           </h4>
                           <p className='text-base text-body-color '>
                              99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                           </p>
                        </div>
                     </div>
                     <div className='mb-8 flex w-full max-w-[370px]'>
                        <div className='mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]'>
                           <Phone />
                        </div>
                        <div className='w-full'>
                           <h4 className='mb-1 text-xl font-bold text-dark '>
                              Phone Number
                           </h4>
                           <p className='text-base text-body-color '>
                              (+62)81 414 257 9980
                           </p>
                        </div>
                     </div>
                     <div className='mb-8 flex w-full max-w-[370px]'>
                        <div className='mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]'>
                           <Mail />
                        </div>
                        <div className='w-full'>
                           <h4 className='mb-1 text-xl font-bold text-dark '>
                              Email Address
                           </h4>
                           <p className='text-base text-body-color '>
                              info@yourdomain.com
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='w-full px-4 lg:w-1/2 xl:w-5/12'>
                  <div className='relative rounded-lg bg-white p-8 shadow-lg sm:p-12'>
                     <form>
                        <ContactInputBox
                           type='text'
                           name='Name'
                           placeholder='Your Name'
                           isRequired={true}
                        />
                        <ContactInputBox
                           type='text'
                           name='Email'
                           placeholder='Your Email'
                           isRequired={true}
                        />
                        <ContactInputBox
                           type='text'
                           name='Phone'
                           placeholder='Your Phone'
                           isRequired={false}
                        />
                        <div className='sm:col-span-2'>
                           <label
                              for='message'
                              className='block mb-1 text-sm font-medium text-gray-900 dark:text-gray-400'>
                              Your message
                           </label>
                           <textarea
                              id='message'
                              rows='6'
                              className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                              placeholder='Leave a comment...'
                              isRequired={true}
                           />
                        </div>
                        <button
                           type='submit'
                           className='py-3 px-5 mt-4 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
                           Send message
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default ContactUs;

const ContactInputBox = ({ type, placeholder, name, isRequired }) => {
   return (
      <>
         <div className="mb-4">
            <label
               for={type}
               className='block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300'>
               {name}
            </label>
            <input
               type={type}
               id={type}
               className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
               placeholder={placeholder}
               required={isRequired}
            />
         </div>
      </>
   );
};
