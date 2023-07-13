import { AnimatedTitle } from "@components/atoms";
import React, { FC } from "react";

const SkillsSection: FC = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <AnimatedTitle>요즘에는 이런 것들을 씁니다</AnimatedTitle>
            <p className="mt-6 break-keep text-lg leading-8 text-gray-600 dark:text-gray-300">
              디테일한 기술 스택은 저마다 다르겠지만 Typescript와 AWS를
              애용해요. 덕분에 새로 만나는 개발자들과도 소통이 원활한 편이죠.
            </p>
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
            <img
              className="max-h-12 w-full object-contain object-left"
              src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg"
              alt="Tuple"
              width={105}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain object-left"
              src="https://tailwindui.com/img/logos/reform-logo-gray-900.svg"
              alt="Reform"
              width={104}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain object-left"
              src="https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg"
              alt="SavvyCal"
              width={140}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain object-left"
              src="https://tailwindui.com/img/logos/laravel-logo-gray-900.svg"
              alt="Laravel"
              width={136}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain object-left"
              src="https://tailwindui.com/img/logos/transistor-logo-gray-900.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain object-left"
              src="https://tailwindui.com/img/logos/statamic-logo-gray-900.svg"
              alt="Statamic"
              width={147}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
