import { useState } from 'react';

function DragAndDrop() {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      id="draggable-element"
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className={`draggable ${isDragging ? 'dragging' : ''}`}
    >
      Drag me!
    </div>
  );
}

export default DragAndDrop;
