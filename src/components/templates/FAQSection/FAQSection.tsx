"use client";

import { AnimatedTitle } from "@components/atoms";
import { Disclosure } from "@headlessui/react";
import {
  EnvelopeIcon,
  MinusSmallIcon,
  PlusSmallIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import { useTranslations } from "next-intl";

const FAQSection = () => {
  const t = useTranslations("landing");

  // TODO: When stop using SSG, use server side data
  type FaqIndex = 0 | 1 | 2 | 3 | 4;
  const faqs = [0, 1, 2, 3, 4].map((i) => ({
    question: t(`FaqSection.faqs_${i as FaqIndex}_question`),
    answer: t.rich(`FaqSection.faqs_${i as FaqIndex}_answer`, {
      p: (chunks) => <p>{chunks}</p>,
    }),
  }));

  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10 dark:divide-gray-50/40">
          <AnimatedTitle align="center">{t("FaqSection.title")}</AnimatedTitle>
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
                      <div className="space-y-2 break-keep text-base leading-7 text-gray-600 dark:text-gray-300">
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
          <EnvelopeIcon className="h-4 w-4" />
          <span>{t("FaqSection.emailButtonText")}</span>
        </a>
      </div>
    </div>
  );
};

export default FAQSection;
