import React from "react";
import { Link } from "react-router-dom";
import {
   FaFacebook,
   FaInstagram,
   FaLinkedin,
   FaTwitter,
   FaHeart,
} from "react-icons/fa";

const QuickLinks = [
   {
      name: "About Us",
      link: "/about-us",
   },
   {
      name: "Privacy Policy",
      link: "/privacy-policy",
   },
   {
      name: "FAQ",
      link: "/faq",
   },
   {
      name: "Contact Us",
      link: "/contact-us",
   },
];

function Footer() {
   return (
      // #244855  -- #283190  -- #5680E9
      <footer className='px-4 pt-16 mx-auto md:px-24 lg:px-16 bg-slate-50 text-slate-700 border-t border-slate-200'>
         {/* sm:max-w-xl md:max-w-full lg:max-w-screen-xl */}
         <div className='grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4'>
            <div className='sm:col-span-2'>
               <a
                  href='/'
                  aria-label='Go home'
                  title='Company'
                  className='inline-flex items-center'>
                  <img
                     alt='logo'
                     src='logo-dark.svg'
                     color='black'
                     className='w-7'
                  />
                  <span className='ml-2 text-2xl font-bold tracking-tight uppercase'>
                     Career Canvas
                  </span>
               </a>
               <div className='mt-6 lg:max-w-sm'>
                  <p>
                     Empower your job search with our intuitive Career Canvas.
                  </p>
                  <p className='mt-4'>
                     Create professional, eye-catching resumes tailored to your
                     career goals and stand out from the competition. Start
                     crafting your path to success today!
                  </p>
               </div>
            </div>
            <div>
               <p className='font-bold text-xl tracking-wide mb-6'>
                  Quick Links
               </p>
               {QuickLinks.map((data, index) => (
                  <Link
                     to={data.link}
                     key={index}
                     className='text-m block mb-3 opacity-95 cursor-pointer w-fit hover:underline hover:decoration-2 hover:text-blue-600'>
                     {data.name}
                  </Link>
               ))}
            </div>
            <div>
               <div className='space-y-2 text-m'>
                  <p className='font-bold text-xl tracking-wide mb-6'>
                     Contacts
                  </p>
                  <a
                     href='tel:+91 6396973328'
                     aria-label='Our phone'
                     title='Our phone'
                     className='transition-colors block duration-300 w-fit hover:text-blue-600'>
                     +91 6396973328
                  </a>
                  <a
                     href='mailto:joshigaurav1122@gmail.com'
                     aria-label='Our email'
                     title='Our email'
                     className='transition-colors block duration-300 w-fit hover:text-blue-600'>
                     joshigaurav1122@gmail.com
                  </a>
               </div>
               <div className='flex items-center mt-16  gap-5'>
                  <Link to='https://www.facebook.com/' target='_blank'>
                     <FaFacebook className='text-3xl hover:text-blue-600' />
                  </Link>
                  <Link to='https://x.com/iamgauravjoshi' target='_blank'>
                     <FaTwitter className='text-3xl hover:text-blue-600' />
                  </Link>
                  <Link
                     to='https://www.linkedin.com/in/iamgauravjoshi/'
                     target='_blank'>
                     <FaLinkedin className='text-3xl hover:text-blue-600' />
                  </Link>
                  <Link to='https://www.instagram.com/' target='_blank'>
                     <FaInstagram className='text-3xl hover:text-blue-600' />
                  </Link>
               </div>
            </div>
         </div>
         <div className='grid gap-10 row-gap-6 sm:grid-cols-2 lg:grid-cols-4 pt-5 pb-10 border-t'>
            <p className="sm:col-span-3">
               {" "}
               &copy; Copyright {new Date().getFullYear()} CareerCanvas - All
               rights reserved.
            </p>
            <p className='flex items-center gap-1 lg:mb-0 sm:space-y-0'>
               Made with <FaHeart size='18' className='text-red-600' />
               by
               <Link
                  to={"https://gaurav-joshi.pages.dev/"}
                  target='_blank'
                  className='font-semibold hover:text-blue-600'>
                  Gaurav Joshi
               </Link>
            </p>
         </div>
      </footer>
   );
}

export default Footer;
