import React from 'react';
import Avatar from './Avatar';
import NotificationIcon from './NotificationIcon';
import Button from './Button';

const Header = () => {
  return (
    <div className="bg-white h-[60px] flex items-center px-4 gap-5">
      <div className="flex-1"></div>
      <NotificationIcon />
      <Button>
        <Avatar />
      </Button>
    </div>
  );
};

export default Header;