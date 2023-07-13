"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React, { FC } from "react";

const TimelineSection: FC = () => {
  const t = useTranslations("landing");

  const timeline = [
    {
      name: t("TimelineSection.item1Name"),
      description: t("TimelineSection.item1Description"),
      date: "Oct 2007",
      dateTime: "2007-10",
    },
    {
      name: t("TimelineSection.item2Name"),
      description: t("TimelineSection.item2Description"),
      date: "Mar 2012",
      dateTime: "2012-03",
    },
    {
      name: t("TimelineSection.item3Name"),
      description: t("TimelineSection.item3Description"),
      date: "Mar 2016",
      dateTime: "2016-03",
    },
    {
      name: t("TimelineSection.item4Name"),
      description: t("TimelineSection.item4Description"),
      date: "Oct 2021",
      dateTime: "2021-10",
    },
  ];

  return (
    <div className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {timeline.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <time
                dateTime={item.dateTime}
                className="flex items-center whitespace-nowrap text-sm font-semibold leading-6 text-twilight dark:text-blossom"
              >
                <svg
                  viewBox="0 0 4 4"
                  className="mr-4 h-1 w-1 flex-none"
                  aria-hidden="true"
                >
                  <circle cx={2} cy={2} r={2} fill="currentColor" />
                </svg>
                {item.date}
                <motion.div
                  className="ml-4 h-px grow bg-twilight dark:bg-blossom"
                  aria-hidden="true"
                  initial={{ opacity: 0, scaleX: 0, originX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1, originX: 0 }}
                  transition={{ duration: 1.5, delay: index * 0.3 }}
                  viewport={{ once: true, amount: 0.5 }}
                />
              </time>
              <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-50">
                {item.name}
              </p>
              <motion.p
                className="mt-1 break-keep text-base leading-7 text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
