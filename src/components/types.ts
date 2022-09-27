import React, { ReactNode } from 'react';

export type ButtonProps = {
  text?: ReactNode;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  type?: 'filled' | 'outlined';
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'dark'
    | 'light'
    | 'default';
  disable?: boolean;
  onClick?: CallableFunction;
  icon?: ReactNode;
  showIcon?: boolean;
};

export interface AccordionProps {
  titleClassName?: string;
  descClassName?: string;
  type?: 'accordian' | 'collapse';
  showIcon?: boolean;
  iconPosition?: 'left' | 'right';
  data?: { title: string | React.ReactNode; desc: string | React.ReactNode }[];
  fadeAnimation?: boolean;
  icon?: ReactNode;
}

export interface AlertProps {
  className?: string;
  message?: ReactNode;
  title?: ReactNode;
  type?: 'success' | 'danger' | 'warning' | 'info';
  icon?: ReactNode;
  showIcon?: boolean;
  closable?: boolean;
  onClose: CallableFunction;
  visible?: boolean;
  borderPosition?: 'top' | 'bottom' | 'left' | 'right' | 'none' | 'full';
}

export interface AlertDialogProps {
  className?: string;
  type?: 'success' | 'danger' | 'warning' | 'info';
  message?: ReactNode;
  title?: ReactNode;
  icon?: ReactNode;
  showIcon?: boolean;
  closable?: boolean;
  visible?: boolean;
  confirmBtnText?: ReactNode;
  cancleBtnText?: ReactNode;
  showConfirmBtn?: boolean;
  showCancelBtn?: boolean;
  onConfirm?: CallableFunction;
  onCancel?: CallableFunction;
  onClose?: CallableFunction;
  borderPosition?: 'top' | 'bottom' | 'left' | 'right' | 'none' | 'full';
  width?: string | number;
}

export interface BadgeProps {
  className?: string;
  text?: string | number;
  size?: 'sm' | 'md' | 'lg';
  type?: 'filled' | 'outlined';
  onClick?: CallableFunction;
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'dark'
    | 'light'
    | 'default';
  icon?: ReactNode;
  showIcon?: boolean;
}

export interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  children?: ReactNode;
  className?: string;
  type?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'dark'
    | 'light'
    | 'default';
  lineClamp?: string | number | null;
  align?: 'left' | 'right' | 'center' | 'justify';
  decoration?: 'underline' | 'no-underline' | 'strike';
  transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'normal';
}

export interface BreadcrumbProps {
  seprator?: ReactNode;
  items?: {
    icon?: ReactNode;
    name?: string;
    href?: string;
    link?: ReactNode;
  }[];
  className?: string;
  itemClassName?: string;
  sepratorClassName?: string;
}
