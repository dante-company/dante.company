"use client";

import { AnimatedTitle } from "../../atoms";
import { useTranslations } from "next-intl";
import { InstagramSvg, LinkedInSvg } from "./svgs";
import { FC } from "react";

const MembersSection: FC = () => {
  const t = useTranslations("landing");

  const people = [
    {
      name: t("MembersSection.name"),
      aka: t("MembersSection.aka"),
      imageUrl: {
        light: "/images/members-section/dante-light.jpg",
        dark: "/images/members-section/dante-dark.jpg",
      },
      instagramUrl: "https://www.instagram.com/1000ship/",
      linkedinUrl: "https://www.linkedin.com/in/1000ship/",
    },
  ];

  return (
    <div className="pb-16 pt-24 md:pt-32">
      <div className="mx-auto flex max-w-7xl flex-col justify-center gap-8 px-6 lg:flex-row lg:px-8">
        <div className="max-w-2xl xl:col-span-2">
          <AnimatedTitle>{t("MembersSection.title")}</AnimatedTitle>
          <p className="mt-6 break-keep text-lg leading-8 text-gray-600 dark:text-gray-300">
            {t("MembersSection.firstParagraph")}
          </p>
          <p className="mt-6 break-keep text-lg leading-8 text-gray-600 dark:text-gray-300">
            {t.rich("MembersSection.secondParagraph", {
              span: (children) => (
                <span className="text-gray-400 dark:text-gray-500">
                  {children}
                </span>
              ),
              a: (children) => (
                <a
                  href="https://nomadlist.com/@dantechun"
                  className="cursor-pointer font-black underline"
                >
                  {children}
                </a>
              ),
            })}
          </p>
        </div>
        <ul role="list" className="-mt-12 space-y-12 divide-y divide-gray-200">
          {people.map((person) => (
            <li
              key={person.name}
              className="flex flex-row gap-4 pt-12 lg:flex-col lg:gap-2"
            >
              <img
                src={person.imageUrl.light}
                alt=""
                className="block aspect-[4/5] w-[200px] flex-none rounded-2xl object-cover dark:hidden"
              />
              <img
                src={person.imageUrl.dark}
                alt=""
                className="hidden aspect-[4/5] w-[200px] flex-none rounded-2xl object-cover dark:block"
              />
              <div className="max-w-xl flex-auto">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-50">
                    {person.name}
                  </h3>
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    {person.aka}
                  </p>
                </div>
                <ul role="list" className="mt-2 flex">
                  <li>
                    <a
                      href={person.instagramUrl}
                      className="block rounded-full p-2 text-gray-400 transition hover:bg-blossom/10 hover:text-gray-500 dark:hover:bg-twilight/30"
                    >
                      <span className="sr-only">Instagram</span>
                      <InstagramSvg className="fill-blossom dark:fill-twilight" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={person.linkedinUrl}
                      className="block rounded-full p-2 text-gray-400 transition hover:bg-blossom/10 hover:text-gray-500 dark:hover:bg-twilight/30"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <LinkedInSvg className="fill-blossom dark:fill-twilight" />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MembersSection;
