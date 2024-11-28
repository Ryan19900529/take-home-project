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

  const renderRefs = useRef({});

  const scrollToRenderItem = (sectionId) => {
    const renderItemId = sectionId.replace("s", "r"); // Map section ID to render ID
    const renderItemRef = renderRefs.current[renderItemId];
    // if (renderItemRef) {
    //   renderItemRef.scrollIntoView({
    //     behavior: "smooth",
    //     block: "center",
    //   });
    // }

    if (renderItemRef) {
      const renderBox = document.querySelector(".render_box");

      // helper function for resizing
      const scrollAfterResize = () => {
        const renderBoxRect = renderBox.getBoundingClientRect();
        const renderItemRect = renderItemRef.getBoundingClientRect();

        // Calculate the new offset after resizing
        const offsetAdjustment =
          renderItemRect.top - renderBoxRect.top + renderBox.scrollTop;
        // renderBox.scrollTop: The current vertical scroll position of the container.

        renderBox.scrollTo({
          top: offsetAdjustment - 200,
          behavior: "smooth",
        });

        // Remove the event listener to avoid unnecessary calls
        renderBox.removeEventListener("transitionend", scrollAfterResize);
      };

      // Add a listener to wait for the transition to end
      renderBox.addEventListener("transitionend", scrollAfterResize);
    }
  };

  return (
    <div className='App'>
      <DndContext
        sensors={sensor}
        onDragMove={handleDragMove}
        collisionDetection={closestCorners}
      >
        <Controller
          isDragging={isDragging}
          setIsDragging={setIsDragging}
          sections={sections}
          setSections={setSections}
          scrollToRenderItem={scrollToRenderItem}
        />

        <Render
          isDragging={isDragging}
          renderItems={renderItems}
          setRenderItems={setRenderItems}
          renderContainerRef={renderContainerRef}
          renderRefs={renderRefs}
        />
      </DndContext>
    </div>
  );
}

export default App;
