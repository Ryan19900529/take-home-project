import React from "react";
import RenderItem from "./RenderItem";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const Render = ({
  isDragging,
  renderItems,
  renderContainerRef,
  renderRefs,
}) => {
  return (
    <div className='render' ref={renderContainerRef}>
      <div className={`render_box ${isDragging ? "active" : ""}`}>
        <div className='render_box_img_wrapper'>
          <img src='/img/render_header.png' alt='' />
        </div>
        <div className='render_box_img_wrapper'>
          <img src='/img/render_slideshow.png' alt='' />
        </div>
        <SortableContext
          items={renderItems}
          strategy={verticalListSortingStrategy}
        >
          {renderItems.map((renderItem) => {
            return (
              <RenderItem
                key={renderItem.id}
                renderItem={renderItem}
                isDragging={isDragging}
                renderRefs={renderRefs}
              />
            );
          })}
        </SortableContext>
      </div>
    </div>
  );
};

export default Render;
