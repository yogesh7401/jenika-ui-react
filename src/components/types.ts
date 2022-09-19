import React from "react";

export interface ButtonProps {
    text?: string;
    className?: string;
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    type: 'filled' | 'outlined';
    variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'default';
    disable: boolean,
    onClick: CallableFunction
}

export interface AccordionProps {
    titleClassName?: string;
    descClassName?: string;
    type: 'accordian' | 'collapse';
    showIcon: boolean;
    iconPosition: 'left' | 'right'; 
    data : { title: string | React.ReactNode; desc: string | React.ReactNode }[];
    fadeAnimation: boolean;
    icon: JSX.Element
}