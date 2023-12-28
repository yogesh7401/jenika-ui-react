import React, { FC } from 'react';
import { badgeIconSize, badgeSize, outlined, variants } from '../helper/globle';
import { ArrowIcon } from '../helper/Icons';
import { BadgeProps } from '../types';

export const Badge: FC<BadgeProps> = (props) => {
  const {
    text,
    variant = 'primary',
    size = 'md',
    type = 'filled',
    onClick = () => null,
    className,
    icon,
    showIcon,
  } = props;

  const badgeClass = `jui-rounded-full jui-inline-flex jui-mb-auto jui-font-bold ${
    badgeSize[size]
  } ${
    type === 'filled' ? variants[variant] : outlined[variant]
  } text-[${size}]`;

  return (
    <p
      id="jui-badge"
      className={`${badgeClass} ${className}`}
      onClick={() => onClick()}
    >
      {showIcon ? (
        icon ? (
          <span className={badgeIconSize[size] + ' jui-mr-1'}> {icon} </span>
        ) : (
          <ArrowIcon className={`${badgeIconSize[size]}`} />
        )
      ) : (
        ''
      )}
      <p className="jui-inline-block jui-align-bottom">{text}</p>
    </p>
  );
};

Badge.defaultProps = {
  text: 'J Badge',
  className: '',
  icon: null,
  showIcon: false,
};
