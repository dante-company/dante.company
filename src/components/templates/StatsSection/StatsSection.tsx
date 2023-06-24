"use client";

import { AnimatedTitle } from "@components/atoms";
import { motion } from "framer-motion";
import moment from "moment";
import { FC } from "react";

const stats = [
  {
    id: 1,
    name: "지금까지 작업해온 일 수",
    value: moment().diff(moment("2021-10-12"), "days").toLocaleString() + "일",
  },
  { id: 2, name: "지금까지 만난 거래처", value: "10 곳" },
  { id: 3, name: "또 찾아주신 거래처", value: "7 곳" },
  { id: 4, name: "지금까지 발생시킨 매출", value: "3억 원+" },
];

const StatsSection: FC = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <AnimatedTitle align="center">
              모든 것을 혼자서 스스로
            </AnimatedTitle>
            <p className="break-keep mx-auto mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300 md:max-w-[80%] md:text-base">
              IT 기술이 필요한 국내, 해외 기업에 소프트웨어를 공급해오고 있어요
              <br />
              덕분에 다양한 기업과 소통하며 여러 경험을 쌓을 수 있었죠
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                className="flex flex-col bg-gray-400/5 dark:bg-gray-100/20 p-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  type: "tween",
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
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
