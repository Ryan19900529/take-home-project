import Controller from "./components/Controller";
import Render from "./components/Render";
import "./App.css";
import { useRef, useState } from "react";
import {
  closestCorners,
  DndContext,
  MouseSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

function App() {
  const [isDragging, setIsDragging] = useState(false);
  const [sections, setSections] = useState([
    {
      id: "s1",
      img: "section_category.png",
      title: "Category",
      visibility: true,
    },
    {
      id: "s2",
      img: "section_design.png",
      title: "Design Your Own",
      visibility: true,
    },
    {
      id: "s3",
      img: "section_inspiration.png",
      title: "Get Inspired",
      visibility: true,
    },
    {
      id: "s4",
      img: "section_payment.png",
      title: "Payment Solutions",
      visibility: true,
    },
    {
      id: "s5",
      img: "section_swatches.png",
      title: "Order Complimentary Swatches",
      visibility: true,
    },
    {
      id: "s6",
      img: "section_consultation.png",
      title: "Book A Consultation",
      visibility: true,
    },
  ]);

  const [renderItems, setRenderItems] = useState([
    { id: "r1", img: "render_category.png", visibility: true },
    { id: "r2", img: "render_design.png", visibility: true },
    { id: "r3", img: "render_inspiration.png", visibility: true },
    { id: "r4", img: "render_payment.png", visibility: true },
    { id: "r5", img: "render_swatches.png", visibility: true },
    { id: "r6", img: "render_consultation.png", visibility: true },
  ]);

  const renderContainerRef = useRef(null);

  // prevent DND Kit's event listeners intercepting click events on the visibility toggle
  const sensor = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 8 } })
  );

  // helper function
  const getPositionById = (id, states) =>
    states.findIndex((state) => state.id === id);

  const handleDragMove = (e) => {
    const { active, over } = e;

    if (active.id === over.id) return;

    const startPos = getPositionById(active.id, sections);
    const endPos = getPositionById(over.id, sections);
    setSections((prev) => arrayMove(sections, startPos, endPos));

    setRenderItems((prev) => arrayMove(renderItems, startPos, endPos));

    // scrolling to the corresponding render item when a section is dragged
    const renderItemToScroll = renderContainerRef.current.querySelector(
      `#${renderItems[endPos].id}`
    );
    if (renderItemToScroll) {
      renderItemToScroll.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div className='App'>
      <DndContext
        sensors={sensor}
        onDragMove={handleDragMove}
        // onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <Controller
          isDragging={isDragging}
          setIsDragging={setIsDragging}
          sections={sections}
          setSections={setSections}
        />

        <Render
          isDragging={isDragging}
          renderItems={renderItems}
          setRenderItems={setRenderItems}
          renderContainerRef={renderContainerRef}
        />
      </DndContext>
    </div>
  );
}

export default App;
