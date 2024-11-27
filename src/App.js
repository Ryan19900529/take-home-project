import Controller from "./components/Controller";
import Render from "./components/Render";
import "./App.css";
import { useState } from "react";

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

  return (
    <div className='App'>
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
      />
    </div>
  );
}

export default App;
