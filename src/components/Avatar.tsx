import React from 'react';

const Avatar = () => {
  return (
    <div className="w-[40px] h-[40px] overflow-hidden rounded-full flex items-center justify-center border border-gray-400">
      <img 
        alt="Avatar"
        className="w-full h-full object-cover"
        src="https://www.pathwaysvermont.org/wp-content/uploads/2017/03/avatar-placeholder-e1490629554738.png" />
    </div>
  );
};

export default Avatar;