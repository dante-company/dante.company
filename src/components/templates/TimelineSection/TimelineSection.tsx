"use client";

import { motion } from "framer-motion";
import React, { FC } from "react";

const timeline = [
  {
    name: "개발 시작",
    description:
      "Web 1.0 시절, 웹 상의 수 많은 플래시 게임을 보고 흥미를 느껴 개발을 시작했어요. ShiFT 카페로 열심히 활동했던 그 시절이 생각나네요. 😄",
    date: "Oct 2007",
    dateTime: "2007-10",
  },
  {
    name: "한국디지털미디어고등학교 졸업",
    description:
      "정보올림피아드 전국대회 수상 실적 덕에 웹프로그래밍과로 진학했어요. 개발 관련 지식을 쌓고 경험하는 것은 물론 값진 인연들을 아주 많이 만났답니다.",
    date: "Fab 2015",
    dateTime: "2015-02",
  },
  {
    name: "홍익대학교 졸업",
    description:
      "이전까지 Application 단의 지식만 쌓아왔다면 대학 졸업 이후로는 조금 더 Low-level 한 지식을 쌓을 수 있었어요.",
    date: "Jul 2021",
    dateTime: "2021-07",
  },
  {
    name: "단테컴퍼니 설립",
    description:
      "Naver AI Lab, 인썸니아 회사에서 프리랜서로 일하다가 대학 졸업과 동시에 개인 사업자로 활동을 시작했어요. 그리고 지금도 진행중이죠!",
    date: "Oct 2021",
    dateTime: "2021-10",
  },
];

const TimelineSection: FC = () => {
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
              viewport={{ once: true }}
            >
              <time
                dateTime={item.dateTime}
                className="flex items-center text-sm font-semibold leading-6 text-twilight dark:text-blossom whitespace-nowrap"
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
                  className="h-px grow bg-twilight dark:bg-blossom ml-4"
                  aria-hidden="true"
                  initial={{ opacity: 0, scaleX: 0, originX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1, originX: 0 }}
                  transition={{ duration: 1.5, delay: index * 0.3 }}
                  viewport={{ once: true }}
                />
              </time>
              <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-50">
                {item.name}
              </p>
              <motion.p
                className="mt-1 text-base leading-7 text-gray-600 dark:text-gray-300 break-keep"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                viewport={{ once: true }}
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
