import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Section = ({
  section,
  isDragging,
  setIsDragging,
  setSections,
  scrollToRenderItem,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: section.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleMouseDown = () => {
    setIsDragging(true);
    scrollToRenderItem(section.id); // Scroll to the corresponding render item
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  const handleVisibility = () => {
    setSections((prevSections) =>
      prevSections.map((s) =>
        s.id === section.id ? { ...s, visibility: !s.visibility } : s
      )
    );
  };
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className={`section ${isDragging ? "dragging" : ""}`}
    >
      <div
        className={`section_img_wrapper ${isDragging ? "dragging" : ""}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <img src={`/img/${section.img}`} alt='' />
      </div>
      <p
        className={`section_text ${isDragging ? "dragging" : ""}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {section.title}
      </p>
      <i
        className={`section_visibility ${
          section.visibility ? "fas fa-eye" : "fas fa-eye-slash"
        }`}
        onClick={handleVisibility}
      ></i>
      <i
        className={`section_drag ${
          isDragging ? "dragging" : ""
        } fas fa-grip-vertical`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      ></i>
    </div>
  );
};

export default Section;
