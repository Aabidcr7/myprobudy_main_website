import React from 'react';
import PropTypes from 'prop-types';

const EditText = ({ 
  placeholder = '', 
  value = '', 
  onChange, 
  type = 'text',
  disabled = false,
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-poppins font-normal text-sm leading-[21px] text-placeholder bg-input border border-solid border-[#88888819] rounded-[10px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent';
  
  const inputClasses = `
    ${baseClasses}
    ${fullWidth ? 'w-full' : 'w-[48%]'}
    ${disabled ? 'cursor-not-allowed opacity-50' : ''}
    px-2 py-2 sm:px-[10px] sm:py-[10px]
    ${className}
  `.trim().replace(/\s+/g, ' ');
  
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={inputClasses}
      {...props}
    />
  );
};

EditText.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
};

export default EditText;