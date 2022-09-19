import React, { FC } from 'react';
import { ButtonProps } from '../types';
import { outlined, sizes, variants } from '../helper/globle';

export const Button: FC<ButtonProps> = (props) => {
  const {
    text,
    size = 'md',
    variant = 'default',
    disable,
    onClick = () => null,
    type = 'filled',
    className,
  } = props;
  const buttonClass = `jui-rounded ${
    type === 'filled' ? variants[variant] : outlined[variant]
  } ${sizes[size]} ${disable ? 'jui-cursor-not-allowed' : ''} ${className}`;

  return (
    <button
      id="jui-button"
      disabled={disable}
      className={buttonClass}
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: 'J Button',
  disable: false,
  type: 'filled',
  className: '',
};
