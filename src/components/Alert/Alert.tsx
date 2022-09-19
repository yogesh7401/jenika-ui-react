import React, { FC } from 'react';
import {
  CloseIcon,
  DangerIcon,
  InfoIcon,
  SuccessIcon,
  WarningIcon,
} from '../helper/Icons';
import { AlertProps } from '../types';

export const Alert: FC<AlertProps> = (props) => {
  const {
    message,
    type = 'info',
    icon,
    showIcon,
    title,
    closable,
    visible,
    className,
  } = props;
  var Icon;
  switch (type) {
    case 'info':
      Icon = <InfoIcon />;
      break;
    case 'danger':
      Icon = <DangerIcon />;
      break;
    case 'warning':
      Icon = <WarningIcon />;
      break;
    case 'success':
      Icon = <SuccessIcon />;
      break;
    default:
      break;
  }
  const variant = {
    danger: 'jui-bg-red-500',
    warning: 'jui-bg-orange-500',
    success: 'jui-bg-green-500',
    info: 'jui-bg-blue-400',
  };
  return (
    <>
      {visible && (
        <div
          id="jui-alert"
          className={`jui-p-4 jui-text-white jui-flex ${variant[type]} ${className}`}
        >
          {showIcon && (
            <div className="jui-h-6 jui-w-6 jui-mr-3 my-auto">
              {icon === undefined ? Icon : icon}
            </div>
          )}
          <div className="jui-w-full">
            {title !== undefined ? (
              <p className="jui-font-bold jui-mb-1">{title}</p>
            ) : (
              ''
            )}
            <p>{message} </p>
          </div>
          {closable && (
            <div className="jui-h-5 jui-cursor-pointer jui-w-5 my-auto">
              <CloseIcon />
            </div>
          )}
        </div>
      )}
    </>
  );
};

Alert.defaultProps = {
  showIcon: true,
  closable: true,
  visible: true,
};
