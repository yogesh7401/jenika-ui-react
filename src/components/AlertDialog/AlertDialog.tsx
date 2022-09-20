import React, { FC } from 'react';
import { Button } from '../Button/Button';
import { border } from '../helper/globle';
import {
  CloseIcon,
  DangerOutlinedIcon,
  InfoOutlinedIcon,
  SuccessOutlinedIcon,
  WarningOutlinedIcon,
} from '../helper/Icons';
import { AlertDialogProps } from '../types';

export const AlertDialog: FC<AlertDialogProps> = (props) => {
  const {
    message,
    type = 'info',
    icon,
    showIcon,
    title,
    closable,
    visible,
    className,
    confirmBtnText,
    cancleBtnText,
    showCancelBtn,
    showConfirmBtn,
    onCancel = () => null,
    onClose = () => null,
    onConfirm = () => null,
    borderPosition = 'top',
    width,
  } = props;
  var Icon;
  switch (type) {
    case 'info':
      Icon = <InfoOutlinedIcon />;
      break;
    case 'danger':
      Icon = <DangerOutlinedIcon />;
      break;
    case 'warning':
      Icon = <WarningOutlinedIcon />;
      break;
    case 'success':
      Icon = <SuccessOutlinedIcon />;
      break;
    default:
      break;
  }
  const borderColor = {
    danger: 'jui-border-red-700',
    warning: 'jui-border-orange-700',
    success: 'jui-border-green-700',
    info: 'jui-border-blue-600',
  };
  const AbsoluteCenterClass = `jui-absolute jui-top-1/2 jui-left-1/2 jui-transform jui--translate-x-1/2 jui--translate-y-1/2 jui-my-3`;
  const divClass = `jui-p-4 jui-shadow-xl jui-bg-white jui-alert-dialog-popup jui-relative ${borderColor[type]} ${border[borderPosition]} ${className}`;
  return (
    <div className="" id="jui-alertdialog">
      {visible && (
        <div style={{ width: width }} className={AbsoluteCenterClass}>
          <div id="jui-alert-dialog" className={divClass}>
            <div className="jui-text-center jui-w-full">
              {showIcon && (
                <div className="jui-w-full jui-flex">
                  <div className="jui-w-20 jui-mb-3 jui-mx-auto">
                    {icon === undefined ? Icon : icon}
                  </div>
                </div>
              )}
              {title !== undefined ? (
                <p className="jui-font-bold jui-mb-1">{title}</p>
              ) : (
                ''
              )}
              <p className="jui-text-gray-600">{message} </p>
              <div className="jui-flex jui-mt-5 jui-px-3 jui-w-full jui-justify-between">
                <Button
                  className={`${showCancelBtn ? '' : 'jui-hidden'}`}
                  text={cancleBtnText}
                  onClick={() => onCancel()}
                />
                <Button
                  className={`${showConfirmBtn ? '' : 'jui-hidden'}`}
                  text={confirmBtnText}
                  variant={type}
                  onClick={() => onConfirm()}
                />
              </div>
            </div>
            {closable && (
              <div
                className="jui-h-5 jui-absolute jui-top-6 jui-right-2 jui-cursor-pointer jui-w-5 jui--mt-5"
                onClick={() => onClose()}
              >
                <CloseIcon />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

AlertDialog.defaultProps = {
  showIcon: true,
  closable: true,
  visible: true,
  type: 'info',
  confirmBtnText: 'Okay',
  cancleBtnText: 'Cancel',
  showConfirmBtn: true,
  showCancelBtn: true,
  width: '400px',
};
