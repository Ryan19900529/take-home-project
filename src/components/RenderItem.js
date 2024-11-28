import { useSortable } from "@dnd-kit/sortable";
import React from "react";
import { CSS } from "@dnd-kit/utilities";

const RenderItem = ({ renderItem, isDragging }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: renderItem.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      // {...listeners}
      style={style}
      id={renderItem.id}
      className='render_box_img_wrapper'
    >
      <img src={`/img/${renderItem.img}`} alt='' />
    </div>
  );
};

export default RenderItem;
