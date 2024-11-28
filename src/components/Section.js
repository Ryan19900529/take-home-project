import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Section = ({
  section,
  isDragging,
  setIsDragging,
  setSections,
  scrollToRenderItem,
  setRenderItems,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleMouseDown = () => {
    setIsDragging(true);

    setSections((prevSections) =>
      prevSections.map((s) =>
        s.id === section.id ? { ...s, dragging: !s.dragging } : s
      )
    );

    const rId = section.id.replace("s", "r"); // Map section ID to render ID

    setRenderItems((prevItems) =>
      prevItems.map((item) =>
        item.id === rId ? { ...item, dragging: !item.dragging } : item
      )
    );

    scrollToRenderItem(section.id); // Scroll to the corresponding render item
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    setSections((prevSections) =>
      prevSections.map((s) =>
        s.id === section.id ? { ...s, dragging: !s.dragging } : s
      )
    );

    const rId = section.id.replace("s", "r");

    setRenderItems((prevItems) =>
      prevItems.map((item) =>
        item.id === rId ? { ...item, dragging: !item.dragging } : item
      )
    );

    scrollToRenderItem(section.id);
  };

  const handleVisibility = () => {
    setSections((prevSections) =>
      prevSections.map((s) =>
        s.id === section.id ? { ...s, visibility: !s.visibility } : s
      )
    );

    const rId = section.id.replace("s", "r");

    setRenderItems((prevItems) =>
      prevItems.map((item) =>
        item.id === rId ? { ...item, visibility: !item.visibility } : item
      )
    );
  };
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className={`section ${section.visibility ? "" : "hide"} ${
        section.dragging ? "dragging" : ""
      }`}
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
