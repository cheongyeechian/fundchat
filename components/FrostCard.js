import React from 'react';

const FrostedCard = ({ children, className }) => {
  return (
    <div className={`box my-4 mx-2 h-min shadow-lg rounded-lg bg-opacity-0 bg-gray-400 p-4 ${className}`}>
      {children}
    </div>
  );
};

export default FrostedCard;