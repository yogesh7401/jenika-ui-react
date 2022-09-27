import React, { FC } from 'react';
import { textColor } from '../helper/globle';
import { TypographyProps } from '../types';

export const Text: FC<TypographyProps> = (props) => {
  const {
    variant = 'p',
    children,
    type = 'default',
    lineClamp,
    align,
    decoration,
    transform,
    className,
  } = props;
  let Element: any;
  const textDecoration =
    decoration === 'strike' ? 'jui-line-through' : `jui-${decoration}`;
  const textTransform =
    transform === 'normal' ? 'jui-normal-case' : `jui-${transform}`;
  const elementClass = `${textColor[type]} jui-line-clamp-${lineClamp} jui-text-${align} ${textDecoration} ${textTransform} ${className}`;

  switch (variant) {
    case 'h1':
      Element = (
        <h1 id="jui-h1" style={{ fontSize: '2em' }} className={elementClass}>
          {children}
        </h1>
      );
      break;
    case 'h2':
      Element = (
        <h2 id="jui-h2" style={{ fontSize: '1.5em' }} className={elementClass}>
          {children}
        </h2>
      );
      break;
    case 'h3':
      Element = (
        <h3 id="jui-h3" style={{ fontSize: '1.17em' }} className={elementClass}>
          {children}
        </h3>
      );
      break;
    case 'h4':
      Element = (
        <h4 id="jui-h4" style={{ fontSize: '1em' }} className={elementClass}>
          {children}
        </h4>
      );
      break;
    case 'h5':
      Element = (
        <h5 id="jui-h5" style={{ fontSize: '0.83em' }} className={elementClass}>
          {children}
        </h5>
      );
      break;
    case 'h6':
      Element = (
        <h6 id="jui-h6" style={{ fontSize: '0.75em' }} className={elementClass}>
          {children}
        </h6>
      );
      break;
    case 'p':
      Element = (
        <p id="jui-p" className={elementClass}>
          {children}
        </p>
      );
      break;
    case 'span':
      Element = (
        <span id="jui-span" className={elementClass}>
          {children}
        </span>
      );
      break;
    default:
      Element = children;
      break;
  }
  return Element;
};

Text.defaultProps = {
  children: <></>,
  lineClamp: null,
  decoration: 'no-underline',
  transform: 'normal',
};
