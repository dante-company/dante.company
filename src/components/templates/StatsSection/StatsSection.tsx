"use client";

import { AnimatedTitle } from "@components/atoms";
import { motion } from "framer-motion";
import moment from "moment";
import { useLocale, useTranslations } from "next-intl";
import { FC } from "react";

const StatsSection: FC = () => {
  const t = useTranslations("landing");
  const locale = useLocale();

  const stats = [
    {
      id: 1,
      name: t("StatsSection.workedDays"),
      value:
        // moment().diff(moment("2021-10-12"), "days").toLocaleString() + "일",
        t("StatsSection.workedDaysValue", {
          days: moment().diff(moment("2021-10-12"), "days").toLocaleString(),
        }),
    },
    {
      id: 2,
      name: t("StatsSection.totalClients"),
      value: t("StatsSection.clientsValue", { clients: 10 }),
    },
    {
      id: 3,
      name: t("StatsSection.returningClients"),
      value: t("StatsSection.clientsValue", { clients: 7 }),
    },
    {
      id: 4,
      name: t("StatsSection.totalRevenue"),
      value: t("StatsSection.revenueValue", {
        revenue: locale === "ko" ? "3억 원" : "250K",
      }),
    },
  ];

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <AnimatedTitle align="center">
              {t("StatsSection.title")}
            </AnimatedTitle>
            <p className="mx-auto mt-4 break-keep text-sm leading-6 text-gray-600 dark:text-gray-300 md:max-w-[80%] md:text-base">
              {t("StatsSection.descriptionPart1")}
              <br />
              {t("StatsSection.descriptionPart2")}
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                className="flex flex-col bg-gray-400/5 p-8 dark:bg-gray-100/20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  type: "tween",
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <dt className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">
                  {stat.value}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;