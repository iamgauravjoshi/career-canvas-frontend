import React from "react";
import { CircleHelp } from "lucide-react";

function FAQ() {
   return (
      <section className='bg-white dark:bg-gray-900'>
         <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
            <h2 className='mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
               Frequently asked questions
            </h2>
            <div className='grid pt-8 text-left border-t text-zinc-600 dark:text-zinc-400 border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2'>
               <div>
                  <div className='mb-10'>
                     <h3 className='flex items-center mb-4 text-lg font-bold text-gray-900 dark:text-white'>
                        <CircleHelp className='flex-shrink-0 mr-2 w-5 h-5 text-gray-900' />
                        What do you mean by "Figma assets"?
                     </h3>
                     <p>
                        You will have access to download the full Figma project
                        including all of the pages, the components, responsive
                        pages, and also the icons, illustrations, and images
                        included in the screens.
                     </p>
                  </div>
                  <div className='mb-10'>
                     <h3 className='flex items-center mb-4 text-lg font-bold text-gray-900 dark:text-white'>
                        <CircleHelp className='flex-shrink-0 mr-2 w-5 h-5 text-gray-900' />
                        What does "lifetime access" exactly mean?
                     </h3>
                     <p>
                        Once you have purchased either the design, code, or both
                        packages, you will have access to all of the future
                        updates based on the roadmap, free of charge.
                     </p>
                  </div>
                  <div className='mb-10'>
                     <h3 className='flex items-center mb-4 text-lg font-bold text-gray-900 dark:text-white'>
                        <CircleHelp className='flex-shrink-0 mr-2 w-5 h-5 text-gray-900' />
                        How does support work?
                     </h3>
                     <p>
                        We're aware of the importance of well qualified support,
                        that is why we decided that support will only be
                        provided by the authors that actually worked on this
                        project.
                     </p>
                     <p>
                        Feel free to{" "}
                        <a
                           href='#'
                           className='font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline'
                           target='_blank'
                           rel='noreferrer'>
                           contact us
                        </a>{" "}
                        and we'll help you out as soon as we can.
                     </p>
                  </div>
                  <div className='mb-10'>
                     <h3 className='flex items-center mb-4 text-lg font-bold text-gray-900 dark:text-white'>
                        <CircleHelp className='flex-shrink-0 mr-2 w-5 h-5 text-gray-900' />
                        I want to build more than one project. Is that allowed?
                     </h3>
                     <p>
                        You can use Windster for an unlimited amount of
                        projects, whether it's a personal website, a SaaS app,
                        or a website for a client. As long as you don't build a
                        product that will directly compete with Windster either
                        as a UI kit, theme, or template, it's fine.
                     </p>
                     <p>
                        Find out more information by{" "}
                        <a
                           href='#'
                           className='font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline'>
                           reading the license
                        </a>
                        .
                     </p>
                  </div>
               </div>
               <div>
                  <div className='mb-10'>
                     <h3 className='flex items-center mb-4 text-lg font-bold text-gray-900 dark:text-white'>
                        <CircleHelp className='flex-shrink-0 mr-2 w-5 h-5 text-gray-900' />
                        What does "free updates" include?
                     </h3>
                     <p>
                        The free updates that will be provided is based on the{" "}
                        <a
                           href='#'
                           className='font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline'>
                           roadmap
                        </a>{" "}
                        that we have laid out for this project. It is also
                        possible that we will provide extra updates outside of
                        the roadmap as well.
                     </p>
                  </div>
                  <div className='mb-10'>
                     <h3 className='flex items-center mb-4 text-lg font-bold text-gray-900 dark:text-white'>
                        <CircleHelp className='flex-shrink-0 mr-2 w-5 h-5 text-gray-900' />
                        What does the free version include?
                     </h3>
                     <p>
                        The{" "}
                        <a
                           href='#'
                           className='font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline'>
                           free version
                        </a>{" "}
                        of Windster includes a minimal style guidelines,
                        component variants, and a dashboard page with the mobile
                        version alongside it.
                     </p>
                     <p>
                        You can use this version for any purposes, because it is
                        open-source under the MIT license.
                     </p>
                  </div>
                  <div className='mb-10'>
                     <h3 className='flex items-center mb-4 text-lg font-bold text-gray-900 dark:text-white'>
                        <CircleHelp className='flex-shrink-0 mr-2 w-5 h-5 text-gray-900' />
                        What is the difference between Windster and Tailwind UI?
                     </h3>
                     <p>
                        Although both Windster and Tailwind UI are built for
                        integration with Tailwind CSS, the main difference is in
                        the design, the pages, the extra components and UI
                        elements that Windster includes.
                     </p>
                     <p>
                        Additionally, Windster is a project that is still in
                        development, and later it will include both the
                        application, marketing, and e-commerce UI interfaces.
                     </p>
                  </div>
                  <div className='mb-10'>
                     <h3 className='flex items-center mb-4 text-lg font-bold text-gray-900 dark:text-white'>
                        <CircleHelp className='flex-shrink-0 mr-2 w-5 h-5 text-gray-900' />
                        Can I use Windster in open-source projects?
                     </h3>
                     <p>
                        Generally, it is accepted to use Windster in open-source
                        projects, as long as it is not a UI library, a theme, a
                        template, a page-builder that would be considered as an
                        alternative to Windster itself.
                     </p>
                     <p>
                        With that being said, feel free to use this design kit
                        for your open-source projects.
                     </p>
                     <p>
                        Find out more information by{" "}
                        <a
                           href='#'
                           className='font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline'>
                           reading the license
                        </a>
                        .
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default FAQ;
