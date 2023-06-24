"use client";

import classNames from "classnames";
import { motion } from "framer-motion";
import React, { FC } from "react";

interface Props {
  children: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const AnimatedTitle: FC<Props> = (props) => {
  const { children, className, align = "left" } = props;

  return (
    <div
      className={classNames(
        "flex flex-wrap gap-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl",
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
          viewport={{ once: true }}
        >
          {text}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
