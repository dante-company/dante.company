"use client";

import React from "react";
import { Disclosure } from "@headlessui/react";
import {
  MinusSmallIcon,
  PlusSmallIcon,
  InboxIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { AnimatedTitle } from "@components/atoms";
import classNames from "classnames";

const faqs = [
  {
    question: "취업하실 의향은 없나요?",
    answer: (
      <>
        <p>
          우선 먼저 JD를 건네주시는 모든 분들에게 알아봐주셔서 감사하다는 인사를
          드리고 싶어요. 하지만 아직까지는 취업 의향이 없습니다!
        </p>
        <p>
          정규 근무 형태보다는 원하는 곳에서 원하는만큼 자유로운 근무 형태를
          추구하기에 주로 끝이 정해져있는 프로젝트 단위로 계약을 진행하는
          편이랍니다.
        </p>
      </>
    ),
  },
  {
    question: "같이 작업하게되면 어떤 장점이 있을까요?",
    answer: (
      <>
        <p>
          1인 개발의 최대 장점은 의사소통과 권한요청으로 낭비되는 시간을
          최소화할 수 있다는 점이라고 생각들어요. 대체로 작은 회사들은 빠르게
          프로덕트를 생산해서 시장성을 검증하는 것이 더 우선시 되기에 이
          경우에는 저와 함께 작업하는 것이 더 만족스러울거라 믿어요.
        </p>
        <p>
          프론트엔드와 백엔드 풀타임 개발자를 한 명씩 채용한다해도 평균적인
          급여와 평균적인 작업속도로 보았을때, 풀타임으로 작업하지 않는 제가 더
          빠르게 작업을 할 수 있다고 자신합니다. 😎
        </p>
      </>
    ),
  },
  {
    question: "같이 작업하게되면 어떤 단점이 있을까요?",
    answer: (
      <>
        <p>
          실시간 요청에 응답이 필요하시거나, 회의 시간이 길다면 오히려 저와 함께
          작업하는게 힘들 수 있어요. 늘 아쉬운 부분이지만 저에게도 주어진 시간이
          하루 24시간이라는게 어쩔 수 없는 것 같아요 😢
        </p>
        <p>
          저는 주로 1주일에 원격 회의를 1회 30분 ~ 1시간 정도로만 진행하고,
          논의할 점이나 기획 상 요청은 비동기적으로 메시지로 소통하는 편이에요.
        </p>
      </>
    ),
  },
  {
    question: "디자이너도 있어야할까요?",
    answer: (
      <>
        <p>
          디자이너가 없어도 충분히 작업이 가능해요! 지금까지 작업해온 프로젝트
          중에서는 디자이너가 없는 프로젝트가 더 많았어요. 이런 경우 제 스스로
          만들어온 컴포넌트들과 사비로 구매해왔던 UI 템플릿들을 적절히 변형시켜
          사용하는데요. 지금 보고 계시는 이 페이지도 스스로 만들어냈답니다.
        </p>
        <p>
          오히려 원하시는 구체적인 디자인이 있을 경우, 퍼블리싱 작업이
          필요하기에 작업량이 더 늘어나는 편이기도 해요. 물론 일러스트 작업이
          필요한 경우에는 디자이너가 필요하답니다!
        </p>
        <p>
          타 웹사이트 URL이나 캡쳐 이미지와 함께 어느 부분이 마음에 드시는지,
          가령 색상이나 배치구조 등 포인트를 잡아주신다면 저와 소통이 잘
          될거에요!
        </p>
      </>
    ),
  },
  {
    question: "애니메이션도 자유롭게 다룰 수 있으세요?",
    answer: (
      <>
        <p>
          자신있는 부분이죠. 어느 애니메이션을 원하시는지에 따라 다르지만,
          대체로 가능해요! 원하시는 느낌을 추상적으로 표현해주시면 1차적으로
          구현해보고 조금씩 수정해나가는 방식으로 작업을 하고 있어요.
        </p>
      </>
    ),
  },
];

const FAQSection = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10 dark:divide-gray-50/40">
          <AnimatedTitle align="center">
            도움이 필요하시다면 연락주세요!
          </AnimatedTitle>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10 dark:divide-gray-50/40">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900 dark:text-gray-50">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <div className="text-base leading-7 text-gray-600 dark:text-gray-300 break-keep space-y-2">
                        {faq.answer}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>

        <a
          href="mailto:contact@dante.company"
          className={classNames(
            "mx-auto flex gap-2 items-center mt-8 w-fit",
            "px-4 py-3 text-sm font-semibold text-black dark:text-white transition hover:bg-black/10 dark:hover:bg-white/10 rounded-lg"
          )}
        >
          <EnvelopeIcon className="w-4 h-4" />
          <span>더 궁금한게 있다면?</span>
        </a>
      </div>
    </div>
  );
};

export default FAQSection;
