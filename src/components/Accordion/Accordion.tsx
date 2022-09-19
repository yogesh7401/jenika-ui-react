import React, { FC, useState } from 'react';
import { ArrowIcon } from '../helper/ArrowIcon';
import { AccordionProps } from '../types';

export const Accordion: FC<AccordionProps> = (props) => {
    const { titleClassName, descClassName, data, type, iconPosition, showIcon, icon, fadeAnimation } = props
    const [ isOpen , setIsOpen ] = useState<number[]>([])
    const iconClass = (i : number) => `jui-w-6 jui-h-6 jui-transform ${isOpen.includes(i) ? 'jui-rotate-90' : ''} ${!showIcon ? 'jui-hidden' : ''} ${iconPosition === "right" ? 'jui-order-last' : 'jui-mr-2'}`
    const titleClass = 'jui-accordion-title jui-bg-gray-50 jui-flex jui-p-4 jui-border-b last:jui-border-0'
    const descClass = `jui-accordion-desc jui-p-4 ${fadeAnimation ? 'jui-accordion-desc-fade' : ''}`

    function handleOpen(key : number) {
        if(isOpen.includes(key)) {
            var newArray = isOpen
            var index = newArray.indexOf(key);
            if (index > -1) {
                newArray.splice(index, 1);
            }
            setIsOpen([...newArray])
        }
        else {
            type === 'collapse' ? setIsOpen(old => [...old,key]) : setIsOpen([key])
        }
        console.log(isOpen);
        
    }

    return <div className='jui-border'>
        {
            data?.map((e,i) => {
                return <div key={i} id={`jui-panel panel+${(i+1)}`}>
                    <div id={`jui-panel-title jui-panel-title-${(i+1)} ${titleClassName}`} className={titleClass} onClick={() => handleOpen(i)}>
                        <div className={iconClass(i)}>
                            { icon }
                        </div>
                        <span className='jui-w-full'>
                            { e.title }
                        </span>
                    </div>
                    {
                        isOpen.includes(i) ? <div id={`jui-panel-desc jui-panel-desc-${(i+1)} ${descClassName}`} className={descClass}> 
                            <p>{ e.desc }</p>
                        </div> : ''
                    }
                </div>
            })
        }
    </div> 
};

Accordion.defaultProps = {
    type: 'accordian',
    showIcon: true,
    iconPosition: 'left',
    icon: <ArrowIcon />,
    fadeAnimation: false,
    data: []
}
