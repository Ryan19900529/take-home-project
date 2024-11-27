import React from "react";

const RenderItem = ({ renderItem, isDragging }) => {
  return (
    <div className='render_box_img_wrapper'>
      <img src={`/img/${renderItem.img}`} alt='' />
    </div>
  );
};

export default RenderItem;
