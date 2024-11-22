import { motion } from "framer-motion";

const LoadingSpinner = () => {
   return (
      <div className='min-h-screen backdrop-blur-sm bg-blue-100/60 flex items-center justify-center relative overflow-hidden'>
         {/* Simple Loading Spinner */}
         <motion.div
            className='w-16 h-16 border-4 border-t-4 border-t-[#5F00D9] border-violet-400 rounded-full'
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
         />
      </div>
   );
};

export default LoadingSpinner;
