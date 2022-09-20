import React, { FC, useState } from 'react';
import { ArrowIcon } from '../helper/Icons';
import { AccordionProps } from '../types';

export const Accordion: FC<AccordionProps> = (props) => {
  const {
    titleClassName,
    descClassName,
    data,
    type,
    iconPosition,
    showIcon,
    icon,
    fadeAnimation,
  } = props;
  const [isOpen, setIsOpen] = useState<number[]>([]);
  const iconClass = (i: number, defined: boolean) =>
    `jui-w-6 jui-h-6 jui-cursor-pointer jui-transform ${
      isOpen.includes(i) && defined ? 'jui-rotate-90' : ''
    } ${!showIcon ? 'jui-hidden' : ''} ${
      iconPosition === 'right' ? 'jui-order-last' : 'jui-mr-2'
    }`;
  const titleClass = (i: number) =>
    `jui-accordion-title jui-bg-gray-50 jui-flex jui-p-4 ${
      data?.length === i + 1 ? '' : 'jui-border-b'
    } last:jui-border-0  ${titleClassName}`;
  const descClass = `jui-accordion-desc jui-p-4 jui-bg-white ${
    fadeAnimation ? 'jui-accordion-desc-fade' : ''
  }  ${descClassName}`;

  function handleOpen(key: number) {
    if (isOpen.includes(key)) {
      var newArray = isOpen;
      var index = newArray.indexOf(key);
      if (index > -1) {
        newArray.splice(index, 1);
      }
      setIsOpen([...newArray]);
    } else {
      type === 'collapse'
        ? setIsOpen((old) => [...old, key])
        : setIsOpen([key]);
    }
  }

  return (
    <div className="jui-border">
      {data?.map((e, i) => {
        return (
          <div key={i} id={`jui-panel panel+${i + 1}`}>
            <div
              id={`jui-panel-title jui-panel-title-${i + 1}`}
              className={titleClass(i)}
              onClick={() => handleOpen(i)}
            >
              {icon === undefined ? (
                <div className={iconClass(i, true)}>
                  <ArrowIcon />
                </div>
              ) : (
                <div className={iconClass(i, false)}>{icon}</div>
              )}

              <span className="jui-w-full">{e.title}</span>
            </div>
            {isOpen.includes(i) ? (
              <div
                id={`jui-panel-desc jui-panel-desc-${i + 1}`}
                className={descClass}
              >
                <p>{e.desc}</p>
              </div>
            ) : (
              ''
            )}
          </div>
        );
      })}
    </div>
  );
};

Accordion.defaultProps = {
  type: 'accordian',
  showIcon: true,
  iconPosition: 'left',
  icon: undefined,
  fadeAnimation: false,
  data: [],
};
