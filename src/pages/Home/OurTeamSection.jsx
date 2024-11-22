import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const OurTeamDetails = [
   {
      name: "Gaurav Joshi",
      designation: "CEO/Co-Founder",
      profilePhoto: "https://avatars.githubusercontent.com/u/66554266?v=4",
      socialLinks: {
         facebook: "https://www.facebook.com/",
         twitter: "https://x.com/iamgauravjoshi",
         linkedin: "https://www.linkedin.com/in/iamgauravjoshi/",
         instagram: "https://www.instagram.com/",
      },
   },
   {
      name: "Jese Leos",
      designation: "CTO/Co-founder",
      profilePhoto:
         "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      socialLinks: {
         facebook: "https://www.facebook.com/",
         twitter: "https://www.x.com/",
         linkedin: "https://www.linkedin.com/",
         instagram: "https://www.instagram.com/",
      },
   },
   {
      name: "Helene Engels",
      designation: "Sr. Software Developer",
      profilePhoto:
         "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png",
      socialLinks: {
         facebook: "https://www.facebook.com/",
         twitter: "https://www.x.com/",
         linkedin: "https://www.linkedin.com/",
         instagram: "https://www.instagram.com/",
      },
   },
   {
      name: "Zayn Malik",
      designation: "Frontend Developer",
      profilePhoto:
         "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
      socialLinks: {
         facebook: "https://www.facebook.com/",
         twitter: "https://www.x.com/",
         linkedin: "https://www.linkedin.com/",
         instagram: "https://www.instagram.com/",
      },
   },
];

function OurTeamSection() {
   return (
      <>
         <section className='bg-white dark:bg-gray-900'>
            <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6'>
               <div className='mx-auto mb-8 max-w-screen-sm lg:mb-16'>
                  <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
                     Our team
                  </h2>
                  <p className='font-light text-gray-500 sm:text-xl dark:text-gray-400'>
                     Explore the whole collection of open-source web components
                     and elements built with the utility classes from Tailwind
                  </p>
               </div>
               <div className='grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                  {OurTeamDetails.map((member, index) => {
                     return (
                        <div
                           key={index}
                           className='text-center text-gray-500 dark:text-gray-400'>
                           <img
                              className='mx-auto mb-4 w-36 h-36 rounded-full'
                              src={member.profilePhoto}
                              alt={member.name}
                           />
                           <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                              {member.name}
                           </h3>
                           <p>{member.designation}</p>
                           <div className='flex justify-center items-center mt-4 space-x-4'>
                              <Link
                                 to={member.socialLinks.facebook}
                                 target='_blank'>
                                 <FaFacebook
                                    size={22}
                                    className='text-[#39569C] hover:text-blue-600'
                                 />
                              </Link>
                              <Link
                                 to={member.socialLinks.twitter}
                                 target='_blank'>
                                 <FaTwitter
                                    size={22}
                                    className='text-[#00ACEE] hover:text-blue-600'
                                 />
                              </Link>
                              <Link
                                 to={member.socialLinks.linkedin}
                                 target='_blank'>
                                 <FaLinkedin
                                    size={22}
                                    className='text-blue-700 hover:text-blue-600'
                                 />
                              </Link>
                              <Link
                                 to={member.socialLinks.instagram}
                                 target='_blank'>
                                 <FaInstagram
                                    size={22}
                                    className='text-[#EA4C89] hover:text-blue-600'
                                 />
                              </Link>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
         </section>
      </>
   );
}

export default OurTeamSection;
