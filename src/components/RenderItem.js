import React from "react";

const RenderItem = ({ renderItem, isDragging, renderRefs }) => {
  return (
    <div
      ref={(el) => (renderRefs.current[renderItem.id] = el)}
      id={renderItem.id}
      className={`render_box_img_wrapper ${
        renderItem.visibility ? "" : "hide"
      } ${renderItem.dragging ? "active" : ""}`}
    >
      <img src={`/img/${renderItem.img}`} alt='' />
    </div>
  );
};

export default RenderItem;
