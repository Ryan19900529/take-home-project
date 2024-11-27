import React from "react";
import RenderItem from "./RenderItem";

const Render = ({ isDragging }) => {
  return (
    <div className='render'>
      <div className={`render_box ${isDragging ? "active" : ""}`}>
        <div className='render_box_img_wrapper'>
          <img src='/img/render_header.png' alt='' />
        </div>
        <div className='render_box_img_wrapper'>
          <img src='/img/render_slideshow.png' alt='' />
        </div>
        <RenderItem />
        <RenderItem />
        <RenderItem />
        <RenderItem />
        <RenderItem />
      </div>
    </div>
  );
};

export default Render;
