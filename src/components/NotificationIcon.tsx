import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import Button from './Button';
import Badge from './Badge';

const NotificationIcon = () => {
  return (
    <Button
      className="relative text-gray-500 hover:text-sky-500"  
    >
      <Badge count={5} />
      <IoIosNotificationsOutline className="text-3xl" />
    </Button>
  )
}

export default NotificationIcon