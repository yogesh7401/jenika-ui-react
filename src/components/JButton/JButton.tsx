import React, { FC } from 'react';
import { JButtonProps } from '../types';
import { outlined, sizes, variants } from '../helper/gloable';

export const JButton: FC<JButtonProps> = (props) => {
  const { text, size, variant, disable, onClick, className, type } = props
  const buttonClass = `jui-rounded ${type === "filled" ? variants[variant] : outlined[variant]} ${sizes[size]} ${disable ? 'jui-cursor-not-allowed' : ''} ${className}`

  return <button className={buttonClass} onClick={() => onClick()}>{text}</button>;
};

JButton.defaultProps = {
  text: "J Button", 
  size: "md", 
  variant: "default", 
  disable: false, 
  onClick: undefined, 
  type: 'filled',
  className: "" 
};