import React, { useContext, useEffect, useState, useRef } from 'react';
import { DiagramContext } from '../App';

const Workspace = () => {
  const { clickedVal } = useContext(DiagramContext);  // 사이드바 선택값
  const [isDrawing, setIsDrawing] = useState(false);  // 드래그 상태
  const [startX, setStartX] = useState(0);            // 드래그 시작 x 좌표
  const [startY, setStartY] = useState(0);            // 드래그 시작 y 좌표
  const [currentX, setCurrentX] = useState(0);        // 현재 x 좌표
  const [currentY, setCurrentY] = useState(0);        // 현재 y 좌표
  const canvasRef = useRef(null);                     // 캔버스 참조

  useEffect(() => {
    if (clickedVal) {
      alert(`선택 값: ${clickedVal}`);
    }
  }, [clickedVal]);

  // TODO::사이드바에서 도형 선택시에만 동작하도록.
  const handleMouseDown = (e) => {
    setIsDrawing(true);
    const rect = canvasRef.current.getBoundingClientRect();
    setStartX(e.clientX - rect.left);  // 드래그 시작 x 좌표
    setStartY(e.clientY - rect.top);   // 드래그 시작 y 좌표
  };

  // 마우스가 움직일 때
  const handleMouseMove = (e) => {
    if (isDrawing) {
      const rect = canvasRef.current.getBoundingClientRect();
      setCurrentX(e.clientX - rect.left);  // 현재 x 좌표
      setCurrentY(e.clientY - rect.top);   // 현재 y 좌표

      // const newDiagram = document.createElement("div");
      // newDiagram.classList.add("testDiagram");
      // newDiagram.style.top = startX;
      // newDiagram.style.left = startY;
      // canvasRef.current.appendChild(newDiagram);
    }
  };

  // 드래그 종료
  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  return (
    <div className="workspace">
      <div> startX : {startX}</div>
      <div> startY : {startY} </div>
      <div> currentX : {currentX} </div>
      <div> currentY : {currentY} </div>
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
    </div>
  );
};

export default Workspace;