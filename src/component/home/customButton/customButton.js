import React from "react";
import '../css/customButton.css'

const CustomButton = ({ children, outofstock, viewall, ...otherProps }) => {
  return (
    <button
      className={`
    	${outofstock ? "outofstock-button" : null}
    	${viewall ? "viewall-button" : null}  
    	instock-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
