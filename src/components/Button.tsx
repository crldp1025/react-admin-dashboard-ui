import React, { ComponentPropsWithoutRef, useMemo } from 'react';

interface IButtonProps extends ComponentPropsWithoutRef<'button'> {}

const Button = ({children, className, ...props}: IButtonProps) => {
  const buttonStyle = useMemo(() => {
    return [className, "flex items-center justify-center gap-5 transition ease-in-out duration-300"].toString().replace(',', ' ');
  }, [className]);

  return (
    <button
      className={buttonStyle}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;