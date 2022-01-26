import { useWindowSize } from '@react-hook/window-size';
import { motion, useAnimationFrame } from 'framer-motion';
import React, { FC, useState } from 'react';

interface ParticleType {
  key: number;
  x: number;
  y: number;
  dx: number;
  r: number;
  dr: number;
  size: number;
  opacity: number;
}

interface ParticleProps {
  x: number;
  y: number;
  size: number;
  opacity: number;
}

const Particle: FC<ParticleProps> = (props) => {
  const { x, y, size, opacity } = props;

  return (
    <motion.div
      className="absolute bg-gray-300 rounded-full -z-20"
      style={{
        width: size,
        height: size,
        x,
        y,
        opacity,
      }}
    />
  );
};

const BackgroundParticles = () => {
  const [screenWidth, screenHeight] = useWindowSize();
  const [particles, setParticles] = useState<ParticleType[]>([]);

  useAnimationFrame(() => {
    setParticles((particles) => {
      if (particles.length < 20 && Math.random() < 0.05) {
        particles.push({
          key: Date.now(),
          x: screenWidth / 2 + Math.random() * 200 - 100,
          y: screenHeight / 2,
          dx: Math.random() * 8 - 4,
          r: 0,
          dr:
            (Math.PI / 180) *
            (Math.random() * 2 + 1) *
            (Math.random() > 0.5 ? 1 : -1),
          size: Math.random() * 30 + 25,
          opacity: 0,
        });
      }

      particles.forEach((particle) => {
        particle.x += particle.dx;
        particle.y =
          screenHeight / 2 + Math.sin(particle.r) * particle.size * 3;
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
            particle.x > screenWidth ||
            particle.y > screenHeight
          ),
      );
    });
  });

  return (
    <div className="absolute left-0 top-0 w-screen h-screen -z-10">
      <div className="absolute w-full h-full backdrop-blur-sm -z-10" />
      {particles.map((particle, index) => (
        <Particle
          key={index}
          x={particle.x}
          y={particle.y}
          size={particle.size}
          opacity={particle.opacity}
        />
      ))}
    </div>
  );
};

export default BackgroundParticles;
