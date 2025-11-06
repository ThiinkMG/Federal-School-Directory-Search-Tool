import React, { useEffect } from 'react';

export type ToastType = 'success' | 'warning' | 'error' | 'info';

interface ToastProps {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
  onClose: (id: string) => void;
}

const Toast: React.FC<ToastProps> = ({ id, message, type, duration = 5000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✓';
      case 'warning':
        return '⚠';
      case 'error':
        return '✕';
      case 'info':
        return 'ℹ';
      default:
        return '';
    }
  };

  return (
    <div
      className={`mcf-toast mcf-toast-${type}`}
      role="alert"
      aria-live="polite"
      aria-atomic="true"
    >
      <span className="mcf-toast-icon" aria-hidden="true">
        {getIcon()}
      </span>
      <span className="mcf-toast-message">{message}</span>
      <button
        className="mcf-toast-close"
        onClick={() => onClose(id)}
        aria-label="Close notification"
      >
        ✕
      </button>
    </div>
  );
};

export default Toast;
