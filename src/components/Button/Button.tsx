import React, { FC } from 'react';
import { ButtonProps } from '../types';
import { buttonIconSize, outlined, sizes, variants } from '../helper/globle';
import { ArrowIcon } from '../helper/Icons';

export const Button: FC<ButtonProps> = (props) => {
  const {
    text,
    size = 'md',
    variant = 'default',
    disable,
    onClick = () => null,
    type = 'filled',
    className,
    showIcon,
    icon,
  } = props;
  const buttonClass = `jui-rounded jui-flex ${
    type === 'filled' ? variants[variant] : outlined[variant]
  } ${sizes[size]} ${disable ? 'jui-cursor-not-allowed' : ''} ${className}`;

  return (
    <button
      id="jui-button"
      disabled={disable}
      className={buttonClass}
      onClick={() => onClick()}
    >
      {showIcon ? (
        icon ? (
          <span className={buttonIconSize[size] + ' jui-mr-1'}> {icon} </span>
        ) : (
          <ArrowIcon className={`${buttonIconSize[size]}`} />
        )
      ) : (
        ''
      )}
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: 'J Button',
  disable: false,
  className: '',
  showIcon: false,
  icon: null,
};
