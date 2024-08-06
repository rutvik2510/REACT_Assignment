import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NotificationBanner = ({ message, type }) => {
  const notify = () => {
    switch (type) {
      case 'success':
        toast.success(message);
        break;
      case 'error':
        toast.error(message);
        break;
      case 'warning':
        toast.warn(message);
        break;
      default:
        toast.info(message);
        break;
    }
  };

  return (
    <div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={notify}
      >
        Show Notification
      </button>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
    </div>
  );
};

export default NotificationBanner;
