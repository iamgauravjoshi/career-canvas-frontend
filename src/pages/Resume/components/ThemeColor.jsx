import React, { useContext, useState } from "react";
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "../../../components/common/Popover/Popover";
import { LayoutGrid } from "lucide-react";
import { ResumeInfoContext } from "../../../context/ResumeInfoContext";
// import GlobalApi from "./../../../../service/GlobalApi";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { PrimaryButtonOutlined } from "../../../components/common/Buttons/Buttons";

function ThemeColor() {
   const colors = [
      "#5F00D9",
      "#FF5733",
      "#5A33FF",
      "#FF33A1",
      "#A133FF",
      "#7133FF",
      "#FF3371",
      "#3371FF",
      "#33A1FF",
      "#33FF5A",
      "#862633",
      "#FF335A",
   ];

   const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
   const [selectedColor, setSelectedColor] = useState(resumeInfo?.themeColor);
   const { resumeId } = useParams();
   const onColorSelect = (color) => {
      setSelectedColor(color);
      setResumeInfo({
         ...resumeInfo,
         themeColor: color,
      });
      const data = {
         data: {
            themeColor: color,
         },
      };
      //   GlobalApi.UpdateResumeDetail(resumeId, data).then((resp) => {
      //      console.log(resp);
      //      toast.success("Theme Color Updated");
      //   });
   };

   return (
      <Popover>
         <PopoverTrigger asChild>
            <button className='flex gap-2 items-center text-[#5F00D9] border-2 border-[#5F00D9] hover:bg-[#5F00D9] hover:text-white transition-all font-semibold rounded-lg text-sm px-4 py-2'>
               <LayoutGrid className='font-bold' size={18} /> Theme
            </button>
         </PopoverTrigger>
         <PopoverContent className='bg-white w-fit drop-shadow-2xl'>
            <h2 className='mb-4 text-base text-zinc-700 font-bold tracking-tight'>
               Select Theme Color
            </h2>
            <div className='grid grid-cols-6 gap-4'>
               {colors.map((item, index) => (
                  <div
                     key={index}
                     onClick={() => onColorSelect(item)}
                     className={`h-8 w-8 rounded cursor-pointer
             hover:border-black border hover:scale-110
             ${selectedColor == item && "border border-black"}
             `}
                     style={{
                        background: item,
                     }}></div>
               ))}
            </div>
         </PopoverContent>
      </Popover>
   );
}

export default ThemeColor;
