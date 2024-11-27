import React from "react";
import RenderItem from "./RenderItem";

const Render = () => {
  return (
    <div className='render'>
      <div className='render_box'>
        <div className='render_box_img_wrapper'>
          <img src='/img/render_header.png' alt='' />
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
