import React from 'react';

const FooterButton = ({ children }) => {
    return (
        <div className="">
            {React.Children.map(children, (child, index) => (
                <button key={index} className="border border-transparent hover:border-white hover:bg-violet-800 cursor-pointer focus:ring-3 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-5 py-2.5 inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100">
                    {child}
                </button>
            ))}
        </div>
    );
};

export default FooterButton;
