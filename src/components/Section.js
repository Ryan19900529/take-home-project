const Section = ({ section, isDragging, setIsDragging, setSections }) => {
  const handleMouseDown = () => {
    setIsDragging(true);
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
    <div className={`section ${isDragging ? "dragging" : ""}`}>
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
