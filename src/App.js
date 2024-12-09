import React from "react";
import { useState } from "react";

function App() {
  return (
    <div style={{ position: "relative", height: "100vh", width: "100%" }}>
      <DraggableCard />
    </div>
  );
}

export default App;

function DraggableCard() {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  function handleDragStart(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    setDragOffset({ x: offsetX, y: offsetY });
  }

  function handleDragOver(e) {
    e.preventDefault();
    const newX = e.clientX - dragOffset.x;
    const newY = e.clientY - dragOffset.y;
    setPosition({ x: newX, y: newY });
  }

  function handleDrop(e) {
    e.preventDefault();
  }

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        width: 100,
        height: 50,
        backgroundColor: "skyblue",
        cursor: "move",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      フリー配置カード
    </div>
  );
}
