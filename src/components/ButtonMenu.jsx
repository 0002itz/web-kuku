import React, { useState } from 'react';

const ButtonMenu = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    console.log('Menu state:', newState);
};
    return (
        <div className="relative ">
            <div className="flex flex-wrap justify-end items-center ">
                <button onClick={toggleMenu} className="p-2 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 6l16 0" />
                        <path d="M4 12l16 0" />
                        <path d="M4 18l16 0" />
                    </svg>
                </button>
                {isOpen && (
                    <div className="absolute rounded-md p-2 cursor-pointer top-7 right-0 z-10">
                        {React.Children.map(children, (child, index) => (
                            <button key={index} className="flex flex-col items-center ">
                                {child}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ButtonMenu;
