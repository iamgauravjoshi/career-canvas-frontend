import React, { useState } from "react";
import {
   getValueFromLocalStorage,
   setValueInLocalStorage,
} from "../../utils/utilities";

const Sections = [
   "personal",
   "links",
   "skills",
   "work",
   "projects",
   "education",
   "certInt",
];

function SectionSwitcher() {
   const [selectedSection, setSelectedSection] = useState(
      getValueFromLocalStorage("selected-section", Sections[0])
   );
   // let [searchParams, setSearchParams] = useSearchParams();

   function handleSectionSelect(selectedSection) {
      setSelectedSection(selectedSection);
      setValueInLocalStorage("selected-section", selectedSection);
      // setSearchParams({ section: selectedSection}, false)
      // navigate({
      //     // pathname: `/${handleWhitespaceAndUppercase()}`,
      //     search: `?tableId=${handleWhitespaceAndUppercase(selectedSection)}`,
      // });
   }

   return (
      <>
         <section className='mx-auto relative'>
            <section className='flex justify-center text-white backdrop-blur-sm sticky top-20 pt-5'>
               <div className='flex justify-between gap-4 w-fit bg-black p-2 rounded-lg'>
                  {Sections.map((section, index) => (
                     <button
                        key={index}
                        className={`border-0 rounded-md px-3 py-1 hover:bg-[#383838] cursor-pointer transition-all duration-150 ease-linear ${selectedSection === section && "bg-[#383838]"}`}
                        onClick={() => handleSectionSelect(section)}>
                        {section}
                     </button>
                  ))}
               </div>
            </section>
            <br />
            <br />
            <SwitchComponents selectedSection={selectedSection} />
         </section>
      </>
   );
}

const SwitchComponents = (props) => {
   return (
      <>
         <h1 className='text-3xl text-center uppercase font-extrabold text-emerald-800'>
            {props.selectedSection}
         </h1>
      </>
   );
};

export default SectionSwitcher;
