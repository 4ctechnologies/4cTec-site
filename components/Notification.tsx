"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";

const Notification = ({
  message,
  status,
}: {
  message: string;
  status: boolean;
}) => {
  const [show, setShow] = useState(status);
  useEffect(() => {
    setShow(status);
  }, [status]);
  const handleClose = () => {
    setShow(false);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [show]);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: show ? 1 : 0, x: show ? 0 : 100 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-0 right-0 z-50 m-4 p-4 bg-primary text-white rounded-lg`}
        >
          <div className='flex justify-between items-center'>
            <p>{message}</p>
            <button onClick={handleClose} className='ml-4 text-white'>
              <Close />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Notification;
