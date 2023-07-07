"use client";

import { AnimatedTitle } from "@components/atoms";
import { useTranslations } from "next-intl";
import { InstagramSvg, LinkedInSvg } from "./svgs";

const MembersSection = () => {
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
    <div className="pt-24 pb-16 md:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center gap-8 flex-col lg:flex-row">
        <div className="max-w-2xl xl:col-span-2">
          <AnimatedTitle>{t("MembersSection.title")}</AnimatedTitle>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 break-keep">
            {t("MembersSection.firstParagraph")}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 break-keep">
            {t.rich("MembersSection.secondParagraph", {
              span: (children) => (
                <span className="text-gray-400 dark:text-gray-500">
                  {children}
                </span>
              ),
              a: (children) => (
                <a
                  href="https://nomadlist.com/@dantechun"
                  className="font-black underline cursor-pointer"
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
              className="flex flex-row lg:flex-col gap-4 lg:gap-2 pt-12"
            >
              <img
                src={person.imageUrl.light}
                alt=""
                className="flex-none rounded-2xl object-cover block dark:hidden w-[200px] aspect-[4/5]"
              />
              <img
                src={person.imageUrl.dark}
                alt=""
                className="flex-none rounded-2xl object-cover hidden dark:block w-[200px] aspect-[4/5]"
              />
              <div className="max-w-xl flex-auto">
                <div className="flex gap-2 items-center">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-50">
                    {person.name}
                  </h3>
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    {person.aka}
                  </p>
                </div>
                <ul role="list" className="flex mt-2">
                  <li>
                    <a
                      href={person.instagramUrl}
                      className="text-gray-400 hover:text-gray-500 block hover:bg-blossom/10 dark:hover:bg-twilight/30 p-2 rounded-full transition"
                    >
                      <span className="sr-only">Instagram</span>
                      <InstagramSvg className="dark:fill-twilight fill-blossom" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={person.linkedinUrl}
                      className="text-gray-400 hover:text-gray-500 block hover:bg-blossom/10 dark:hover:bg-twilight/30 p-2 rounded-full transition"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <LinkedInSvg className="dark:fill-twilight fill-blossom" />
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
