'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaCalendarDays } from "react-icons/fa6";
import { useTranslations } from 'next-intl';
const NotificationButton = () => {
  const t = useTranslations('Notification');
  const [shouldShow, setShouldShow] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldShow(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const scrolledPercent = scrollY / pageHeight;

      if (scrolledPercent > 0.3 && !shouldShow) {
        setShouldShow(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [shouldShow]);

  const handleClose = () => {
    setIsClosed(true);
    setTimeout(() => {
      setIsClosed(false);
    }, 10000); 
  };

  if (!shouldShow || isClosed) return null;

  return (
    <div className="fixed top-[50%] right-0 z-[200]">
      <div className="group flex items-center bg-gradient-to-tr from-sky-500 to-sky-600 text-white py-2 px-2 rounded-l-lg shadow-lg space-x-2 relative">
        <Link
          href="/#contact"
          className="bg-white text-black rounded  px-3 py-1 text-sm font-semibold flex items-center gap-1"
        >
          {t('button')} <FaCalendarDays className="animate-bounce" />
        </Link>
        <button
          onClick={handleClose}
          className="text-white hover:text-red-300 text-lg font-bold"
          aria-label="Close notification"
        >
          <AiOutlineCloseCircle />
        </button>

        <div className="hidden group-hover:block absolute  right-5 -top-20 w-72 bg-white border shadow-2xl text-black text-xs p-2 rounded">
          {t('Description')}
        </div>
      </div>
    </div>
  );
};

export default NotificationButton;
