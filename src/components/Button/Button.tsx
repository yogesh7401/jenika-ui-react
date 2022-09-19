import React, { FC } from 'react';
import { ButtonProps } from '../types';
import { outlined, sizes, variants } from '../helper/globle';

export const Button: FC<ButtonProps> = (props) => {
  const { text, size, variant, disable, onClick, className, type } = props
  const buttonClass = `jui-rounded ${type === "filled" ? variants[variant] : outlined[variant]} ${sizes[size]} ${disable ? 'jui-cursor-not-allowed' : ''} ${className}`
  
  function clickFunction(event : any) {
    // Ripple Effect
    const btn = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (btn.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (btn.offsetTop + radius)}px`;
    circle.classList.add("jripple");
    const ripple = btn.getElementsByClassName("jripple")[0];
    ripple ? ripple.remove() : null
    btn.appendChild(circle);
    onClick()
  }
  return <button id='jui-button' disabled={disable} className={buttonClass} onClick={(e) => clickFunction(e)}>{text}</button>;
};

Button.defaultProps = {
  text: "J Button", 
  size: "md", 
  variant: "default", 
  disable: false, 
  onClick: undefined, 
  type: 'filled',
  className: "" 
};