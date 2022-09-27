import React, { FC } from 'react';
import { ArrowIcon } from '../helper/Icons';
import { BreadcrumbProps } from '../types';

export const Breadcrumb: FC<BreadcrumbProps> = (props) => {
  const { items, seprator, className, itemClassName, sepratorClassName } =
    props;
  const breadcrumbItemClass = `jui-space-x-1 jui-flex jui-items-center space-x-2 last:jui-text-black jui-text-gray-500 hover:jui-text-black`;
  return (
    <div id="jui-breadcrumb" className={`jui-flex jui-flex-wrap ${className}`}>
      {items?.map((item, i) => {
        return (
          <div
            key={i}
            className={breadcrumbItemClass + ' ' + itemClassName}
            id="jui-breadcrumb-item"
          >
            {item.icon === undefined ? '' : item.icon}
            {item.link !== undefined ? (
              item.link
            ) : (
              <a href={item.href}>{item.name}</a>
            )}
            {items.length !== i + 1 ? (
              <span
                className={`jui-items-center jui-px-2 ${sepratorClassName}`}
              >
                {seprator}
              </span>
            ) : (
              ''
            )}
          </div>
        );
      })}
    </div>
  );
};

Breadcrumb.defaultProps = {
  seprator: <ArrowIcon className="jui-h-5 jui-w-5" />,
  items: [],
};
