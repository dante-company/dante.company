"use client";

import React, { useEffect } from "react";

const BackgroundPolygon = () => {
  type Point = { x: number; y: number; vx: number; vy: number };
  const [points, setPoints] = React.useState<Point[]>([]);

  useEffect(() => {
    const MAX_VELOCITY = 0.003;
    const randomPoints = Array.from({ length: 15 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: Math.random() * MAX_VELOCITY * 2 - MAX_VELOCITY,
      vy: Math.random() * MAX_VELOCITY * 2 - MAX_VELOCITY,
    }));
    setPoints(randomPoints);

    function animate() {
      setPoints((points) =>
        points.map((prev) => {
          const point = { ...prev };
          point.x += point.vx;
          point.y += point.vy;
          if (point.x < 0) point.vx = Math.random() * MAX_VELOCITY;
          if (point.x > 1) point.vx = -Math.random() * MAX_VELOCITY;
          if (point.y < 0) point.vy = Math.random() * MAX_VELOCITY;
          if (point.y > 1) point.vy = -Math.random() * MAX_VELOCITY;
          return point;
        })
      );
    }

    const interval = setInterval(animate, 1000 / 60);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setPoints]);

  return (
    <>
      <div
        className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-2xl md:blur-3xl"
        aria-hidden="true"
      >
        {points?.length && (
          <div
            className="bg-gradient-to-tr from-blossom to-twilight absolute inset-0 opacity-30 dark:opacity-40"
            style={{
              clipPath: `polygon(${points
                .map((point) => `${point.x * 100}% ${point.y * 100}%`)
                .join(", ")})`,
            }}
          />
        )}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white to-white/0 dark:from-black dark:to-black/0" />
    </>
  );
};

export default BackgroundPolygon;
