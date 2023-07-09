"use client";

import { useTranslations } from "next-intl";
import { FC } from "react";

const ComingSoonSection: FC = () => {
  const t = useTranslations("games");

  return (
    <div className="mx-auto max-w-7xl py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="flex flex-col lg:flex-row justify-evenly relative isolate overflow-hidden bg-blossom-50 dark:bg-twilight-950 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-16 xl:px-24 lg:pt-0">
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={1024}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient
              id="759c1415-0410-454c-8f7c-9a820de03641"
              className="invisible dark:visible"
            >
              <stop stopColor="#9089fc" />
              <stop offset={1} stopColor="#ff80b5" />
            </radialGradient>
            <radialGradient
              id="759c1415-0410-454c-8f7c-9a820de03641"
              className="visible dark:invisible"
            >
              <stop stopColor="#ff80b5" />
              <stop offset={1} stopColor="#9089fc" />
            </radialGradient>
          </defs>
        </svg>
        <div className="flex flex-col justify-center lg:max-w-md xl:max-w-lg text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
            {t.rich("CoomingSoonSection.title", {
              strong: (children) => (
                <strong className="text-twilight-600 dark:text-blossom">
                  {children}
                </strong>
              ),
            })}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300 break-keep">
            {t.rich("CoomingSoonSection.intro", {
              strong: (children) => (
                <strong className="text-twilight-600 dark:text-blossom">
                  {children}
                </strong>
              ),
            })}
          </p>
          {/* TODO: 관련 액션 버튼 추가 */}
          {/* <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <a
              href="#"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div> */}
        </div>
        <div className="mt-16 h-[350px] md:h-[500px] lg:my-8">
          <video
            className="w-2/3 md:w-1/2 mx-auto lg:w-full h-full rounded-t-lg lg:rounded-b-lg ring-1 ring-white/10 object-cover object-top shadow"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/pencil-picker.mov" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonSection;
