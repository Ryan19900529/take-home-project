import React from "react";

const Section = () => {
  return (
    <div className='section'>
      <div className='section_img_wrapper'>
        <img src='/img/section_header.png' alt='' />
      </div>
      <p className='section_text'>Header</p>
      <i className='section_visibility fas fa-eye'></i>
      <i className='section_drag fas fa-grip-vertical'></i>
    </div>
  );
};

export default Section;
