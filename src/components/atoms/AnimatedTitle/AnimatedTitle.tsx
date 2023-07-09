"use client";

import classNames from "classnames";
import { motion } from "framer-motion";
import React, { FC } from "react";

interface Props {
  children: string;
  size?: "sm" | "md" | "lg";
  align?: "left" | "center" | "right";
  className?: string;
}

const AnimatedTitle: FC<Props> = (props) => {
  const { children, className, size = "md", align = "left" } = props;

  return (
    <div
      className={classNames(
        "flex flex-wrap gap-2 font-bold tracking-tight text-gray-900 dark:text-gray-50",
        size === "sm" && "text-2xl sm:text-3xl",
        size === "md" && "text-3xl sm:text-4xl",
        size === "lg" && "text-4xl sm:text-5xl",
        align === "left" && "justify-start",
        align === "center" && "justify-center",
        align === "right" && "justify-end",
        className
      )}
    >
      {children.split(" ").map((text, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {text}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
