"use client";

import classNames from "classnames";
import { motion } from "framer-motion";
import React, { FC, useCallback, useEffect, useState } from "react";

interface ParticleType {
  key: number;
  x: number;
  y: number;
  dx: number;
  r: number;
  dr: number;
  size: number;
  opacity: number;
  color: string;
}

interface ParticleProps {
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
}

const Particle: FC<ParticleProps> = (props) => {
  const { x, y, size, opacity, color } = props;

  return (
    <motion.div
      className={classNames("bg-[--color] absolute -z-20 rounded-full")}
      style={
        {
          width: size,
          height: size,
          x,
          y,
          opacity: opacity * 0.5,
          "--color": color,
        } as React.CSSProperties
      }
    />
  );
};

const BackgroundParticles = () => {
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  const containerRef = useCallback(($el: HTMLDivElement) => {
    if ($el !== null) {
      const resizeObserver = new ResizeObserver((entries) => {
        const { width, height } = entries[0].contentRect;
        setContainerWidth(width);
        setContainerHeight(height);
      });
      resizeObserver.observe($el);
    }
  }, []);

  const [particles, setParticles] = useState<ParticleType[]>([]);

  const animationFrame = () => {
    setParticles((particles) => {
      if (particles.length < 20 && Math.random() < 0.05) {
        particles.push({
          key: Date.now(),
          x: containerWidth / 2 + Math.random() * 200 - 100,
          y: containerHeight / 2,
          dx: Math.random() * 8 - 4,
          r: 0,
          dr:
            (Math.PI / 180) *
            (Math.random() * 2 + 1) *
            (Math.random() > 0.5 ? 1 : -1),
          size: Math.random() * 30 + 25,
          opacity: 0,
          color: ["#ff80b5", "#9089fc"].sort(() => Math.random() - 0.5)[0],
        });
      }

      particles.forEach((particle) => {
        particle.x += particle.dx;
        particle.y =
          containerHeight / 2 + Math.sin(particle.r) * particle.size * 3;
        particle.r += particle.dr;
        particle.size *= 0.99;
        particle.dx *= 0.99;
        particle.dr *= 0.99;
        particle.opacity = Math.min(1, Math.abs(Math.sin(particle.r)));
      });
      return particles.filter(
        (particle) =>
          !(
            particle.size < 0.1 ||
            particle.x < 0 ||
            particle.y < 0 ||
            particle.x > containerWidth ||
            particle.y > containerHeight
          )
      );
    });
  };

  useEffect(() => {
    var timeoutId: any = null;
    if (typeof window !== "undefined") {
      timeoutId = setTimeout(animationFrame, 1000 / 60);
    }
    return () => {
      if (timeoutId && typeof window !== "undefined") {
        clearTimeout(timeoutId);
      }
    };
  });

  return (
    <div
      ref={containerRef}
      className="absolute left-0 top-0 -z-10 h-full w-screen overflow-hidden"
    >
      <div className="absolute -z-10 h-full w-full backdrop-blur-sm" />
      {particles.map((particle) => (
        <Particle
          key={particle.key}
          x={particle.x}
          y={particle.y}
          size={particle.size}
          opacity={particle.opacity}
          color={particle.color}
        />
      ))}
    </div>
  );
};

export default BackgroundParticles;
