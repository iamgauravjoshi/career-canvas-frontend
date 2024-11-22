import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";


function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    showButton && (
      <button
        type='button'
        onClick={scrollToTop}
        className='fixed bottom-8 end-8 rounded bg-red-600 p-3 text-lg shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-xl'>
        <span className='[&>svg]:w-4'>
          <FaArrowUp className='font-3xl fill-white' />
        </span>
      </button>
    )
  );
}

export default function HomeLayoutTemplate() {
  return (
    <>
      <Header />
      <main className='w-full min-h-screen main-component'>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
