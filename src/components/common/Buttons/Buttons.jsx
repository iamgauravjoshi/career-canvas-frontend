import React from "react";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";

function LinkPrimary({ linkText = "Link Text", icon = <></>, ...props }) {
   return (
      <Link
         {...props}
         className='flex gap-2 items-center text-white bg-[#5F00D9] hover:bg-violet-700 font-medium rounded-lg text-sm px-4 py-2 text-center'>
         {icon}
         {linkText}
      </Link>
   );
}

function LinkSecondary({ linkText = "Link Text", icon = <></>, ...props }) {
   return (
      <Link
         {...props}
         className='flex gap-2 items-center text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 text-center'>
         {icon}
         {linkText}
      </Link>
   );
}

function PrimaryButton({ buttonText = "Submit", icon = <></>, ...props }) {
   return (
      <button
         {...props}
         className='flex gap-2 items-center text-white bg-[#5F00D9] hover:bg-violet-700 font-medium rounded-lg text-sm px-4 py-2 disabled:cursor-not-allowed disabled:bg-violet-500'>
         {icon}
         {buttonText}
      </button>
   );
}

function SecondaryButton({ buttonText = "Submit", icon = <></>, ...props }) {
   return (
      <button
         {...props}
         className='flex gap-2 items-center text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 text-center'>
         {icon}
         {buttonText}
      </button>
   );
}

function PrimaryButtonOutlined({
   buttonText = "Submit",
   icon = <></>,
   ...props
}) {
   return (
      <button
         {...props}
         className='flex gap-2 items-center text-[#5F00D9] border-2 border-[#5F00D9] hover:bg-[#5F00D9] hover:text-white transition-all font-semibold rounded-lg text-sm px-2 py-2'>
         {icon}
         {buttonText}
      </button>
   );
}

function CloseButton({ buttonText = "Close", icon = <></>, ...props }) {
   return (
      <button
         {...props}
         className='flex gap-2 items-center py-2 px-4 text-sm font-medium text-zinc-500 bg-white rounded-lg border border-zinc-300 hover:bg-gray-100 hover:text-zinc-700'>
         {icon}
         {buttonText}
      </button>
   );
}

function DeleteButton({ ...props }) {
   return (
      <button
         {...props}
         type='button'
         className='flex gap-2 items-center text-sm text-white font-medium rounded-lg px-4 py-2 bg-red-600 hover:bg-red-700 focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900 '>
         <Trash2 size={18} />
         Delete
      </button>
   );
}

function DeleteButtonOutlined({ text, ...props }) {
   return (
      <button
         {...props}
         type='button'
         className='flex gap-2 items-center text-sm text-red-600 font-semibold border-2 border-red-600 rounded-lg px-2 py-1 hover:text-white hover:bg-red-600 transition-all'>
         <Trash2 size={18} />
         {text}
      </button>
   );
}

function CreateButtonWithIcon({ buttonText, icon, onClick, ...props }) {
   return (
      <button
         onClick={onClick}
         {...props}
         type='button'
         className='bg-slate-100 text-zinc-700 p-4 text-base font-semibold rounded-lg items-center flex gap-2 flex-col border-2 border-dashed border-zinc-300 cursor-pointer hover:drop-shadow-md w-fit'>
         {icon}
         <h2>{buttonText}</h2>
      </button>
   );
}

export {
   LinkPrimary,
   LinkSecondary,
   PrimaryButton,
   SecondaryButton,
   PrimaryButtonOutlined,
   CloseButton,
   DeleteButton,
   DeleteButtonOutlined,
   CreateButtonWithIcon,
};
