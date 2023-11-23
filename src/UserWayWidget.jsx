import React, { useEffect } from 'react';

const UserWayWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.userway.org/widget.js';
    script.dataset.account = '1piGO8HDpF';
    script.async = true;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default UserWayWidget;