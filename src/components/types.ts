import React, { ReactNode } from 'react';

export type ButtonProps = {
  text?: string;
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
  visible?: boolean;
}
