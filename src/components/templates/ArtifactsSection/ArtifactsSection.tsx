"use client";

import { AnimatedTitle } from "@components/atoms";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import React, { FC } from "react";
import {
  CodingImage,
  IdeaImage,
  MobileImage,
  SmartContractImage,
  WebImage,
} from "./images";

const images = [
  IdeaImage,
  WebImage,
  MobileImage,
  SmartContractImage,
  CodingImage,
];

const ArtifactsSection: FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: ref });

  return (
    <div ref={ref} className="relative isolate -z-10">
      <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-stretch">
          <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
            <div className="sticky top-1/2 mt-24 -translate-y-1/2 transform">
              <AnimatedTitle>
                1인 개발사, 단테컴퍼니에 오신 걸 환영해요! 👋
              </AnimatedTitle>
              <p className="relative mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:max-w-md lg:max-w-none break-keep">
                웹 개발, 모바일 웹앱, 스마트 컨트랙트, AI 응용 개발 등 표준이
                잡힌 개발 업무부터 잘 다루지 않는 기술까지 넓은 범위로 개발을
                진행하고 있어요!
              </p>
              <p className="relative mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:max-w-md lg:max-w-none break-keep">
                지금은 소득을 위해 주로 외주 개발을 다루고 있지만, 훗날 내
                것이라고 부를 수 있는 게임과 서비스를 만들어 운영하는 것을
                목표로 하고 있답니다.
              </p>
            </div>
          </div>
          <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 transform -translate-y-32 md:translate-y-0">
            <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              >
                <Image
                  src={images[0]}
                  alt=""
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </motion.div>
            </div>
            <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.8 }}
              >
                <Image
                  src={images[1]}
                  alt=""
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </motion.div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 1.1 }}
              >
                <Image
                  src={images[2]}
                  alt=""
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </motion.div>
            </div>
            <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 1.4 }}
              >
                <Image
                  src={images[3]}
                  alt=""
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </motion.div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 1.7 }}
              >
                <Image
                  src={images[4]}
                  alt=""
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtifactsSection;
