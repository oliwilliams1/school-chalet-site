import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface NotificationProps {
  message: string;
  duration?: number;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <motion.div
      className="fixed bottom-5 right-5 bg-blue-500 text-white p-4 rounded shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <p className="montserrat">{message}</p>
    </motion.div>
  );
};

export default Notification;