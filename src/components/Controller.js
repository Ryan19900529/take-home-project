import React from "react";
import Section from "./Section";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const Controller = ({
  isDragging,
  setIsDragging,
  sections,
  setSections,
  scrollToRenderItem,
}) => {
  return (
    <div className='controller'>
      <div className='section' style={{ cursor: "pointer" }}>
        <div className='section_img_wrapper' style={{ cursor: "pointer" }}>
          <img src='/img/section_header.png' alt='' />
        </div>
        <p className='section_text' style={{ cursor: "pointer" }}>
          Header
        </p>
      </div>
      <div className='section' style={{ cursor: "pointer" }}>
        <div className='section_img_wrapper' style={{ cursor: "pointer" }}>
          <img src='/img/render_slideshow.png' alt='' />
        </div>
        <p className='section_text' style={{ cursor: "pointer" }}>
          Slideshow
        </p>
      </div>
      <SortableContext items={sections} strategy={verticalListSortingStrategy}>
        {sections.map((section) => {
          return (
            <Section
              key={section.id}
              section={section}
              isDragging={isDragging}
              setIsDragging={setIsDragging}
              setSections={setSections}
              scrollToRenderItem={scrollToRenderItem}
            />
          );
        })}
      </SortableContext>
    </div>
  );
};

export default Controller;
