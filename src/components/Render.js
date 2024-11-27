import React from "react";
import RenderItem from "./RenderItem";

const Render = ({ isDragging, renderItems, setRenderItems }) => {
  return (
    <div className='render'>
      <div className={`render_box ${isDragging ? "active" : ""}`}>
        <div className='render_box_img_wrapper'>
          <img src='/img/render_header.png' alt='' />
        </div>
        <div className='render_box_img_wrapper'>
          <img src='/img/render_slideshow.png' alt='' />
        </div>
        {renderItems.map((renderItem) => {
          return (
            <RenderItem
              key={renderItem.id}
              renderItem={renderItem}
              isDragging={isDragging}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Render;
