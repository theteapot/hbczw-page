import "./index.css";
import { useRef, useEffect } from "react";
import { frameRenderer } from "./frame-renderer";
import React, { Component } from "react";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Creates random square object
function generateSquare(canvasHeight, canvasWidth, squareSize) {
  return {
    x: getRandomInt(canvasWidth),
    y: 0,
    vxSeed: Math.random() / 10,
    vySeed: Math.random() / 10,
    vy: 0,
    vx: 0,
    width: squareSize,
    height: squareSize,
    alpha: 1,
    stopped: false,
  };
}

function Canvas() {
  const canvasRef = useRef(null);
  const requestIdRef = useRef(null);
  const features = { groundHeight: 200, squareSize: 10, maxSquares: 1000 };
  const size = { width: window.outerWidth, height: window.outerHeight };

  // const ballRef = useRef({ x: 50, y: 50, vx: 3.9, vy: 3.3, radius: 20 });
  const squareRef = useRef(
    Array.from({ length: 100 }, () =>
      generateSquare(size.height, size.width, features.squareSize)
    )
  );

  const updateSquare = () => {
    const squares = squareRef.current;
    squares.forEach((square) => {
      if (!square.stopped) {
        square.x += square.vx;
        square.y += square.vy;
        square.vx = Math.sin(square.vxSeed * square.y);
        square.vy = Math.sin(square.vySeed * square.x) + 1;

        // Slow square down once it passes a threshold
        // and slowly fade it out
        if (square.y > size.height - features.groundHeight) {
          square.vy = square.vy / 5;
          square.vx = square.vx / 10;
          // square.alpha = (250 - square.y) / 50;
          square.stopped = Math.random() > 0.99;
          // If a square is stopped another square to replace it
          if (square.stopped) {
            squareRef.current.push(
              generateSquare(size.height, size.width, features.squareSize)
            );
          }
        }
      }

      // Reset square once it reaches the bottom
      if (square.y > size.height) {
        square.y = 0;
        square.alpha = 1;
        square.stopped = false;
        square.x = getRandomInt(size.width);
        square.vxSeed = Math.random() / 10;
        square.vySeed = Math.random() / 10;
      }
    });
    // Remove squares from beginning of array if more than max
    if (squareRef.current.length > features.maxSquares) {
      squareRef.current.splice(0, 1);
    }
  };

  const renderFrame = () => {
    const ctx = canvasRef.current.getContext("2d");
    updateSquare();
    frameRenderer.call(ctx, size, squareRef.current, features.groundHeight);
  };

  const tick = () => {
    if (!canvasRef.current) return;
    renderFrame();
    requestIdRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    requestIdRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(requestIdRef.current);
    };
  }, []);

  return [
    <canvas
      width={size.width}
      height={size.height}
      ref={canvasRef}
      className="carbon-cycle-canvas"
    />,
  ];
}

export default Canvas;
