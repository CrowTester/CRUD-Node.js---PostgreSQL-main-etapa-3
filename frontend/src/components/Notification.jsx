import { useState } from 'react';
import '../styles/notification.css';

export function useNotification() {
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const Notification = () => {
    if (!notification) return null;

    return (
      <div className={`notification notification-${notification.type}`}>
        {notification.message}
      </div>
    );
  };

  return { showNotification, Notification };
}
