import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic'


export const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className=" btn btn-gradient-border btn-glow border-2px hover:text-white hover:border-white"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default dynamic (() => Promise.resolve(Button), {ssr: false} )