import React, { forwardRef } from 'react';

const Input = forwardRef(({ className, type, disabled, options, ...props }, ref) => {
  
  const inputClasses = `form-control ${className || ''}`;

 const handleTelInput = (event) => {
  let value = event.target.value;
  value = value.replace(/\D/g, '');
  value = value.slice(0, 10);
  event.target.value = value;
};


if (type === 'email') {
  return (
    <input
      ref={ref}
      className={inputClasses}
      type="email"
      disabled={disabled}
      {...props}
      style={{ margin: '10px 0px' }}
    />
  );
}

if (type === 'tel') {
  return (
    <input
      ref={ref}
      className={inputClasses}
      type="tel"
      disabled={disabled}
      {...props}
      onInput={handleTelInput} 
      style={{ margin: '10px 0px' }}
    />
  );
}

  if (type === 'select') {
    return (
      <select ref={ref} className={inputClasses} disabled={disabled} {...props} style={{ margin: '10px 0px' }}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
    );
  }

  return (
    <input ref={ref} className={inputClasses} type={type} disabled={disabled} {...props} style={{ margin: '10px 0px' }} />
  );
});

Input.displayName = "Input";

export default Input;
