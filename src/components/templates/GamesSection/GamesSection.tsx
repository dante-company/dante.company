"use client";

import { AnimatedTitle } from "@components/atoms";
import { CubeIcon, ShareIcon, WifiIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import { FC } from "react";

const GamesSection: FC = () => {
  const t = useTranslations("games");

  const cards = [
    {
      name: t("GamesSection.cards.web3.title"),
      description: t("GamesSection.cards.web3.description"),
      icon: CubeIcon,
    },
    {
      name: t("GamesSection.cards.realtime.title"),
      description: t("GamesSection.cards.realtime.description"),
      icon: WifiIcon,
    },
    {
      name: t("GamesSection.cards.share.title"),
      description: t("GamesSection.cards.share.description"),
      icon: ShareIcon,
    },
  ];

  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <AnimatedTitle size="lg">{t("GamesSection.title")}</AnimatedTitle>
          <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300 break-keep">
            {t("GamesSection.intro")}
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-6 sm:mt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex gap-x-4 rounded-xl bg-twilight/5 dark:bg-white/5 p-6 ring-1 ring-inset ring-twibg-twilight/10 dark:ring-white/10"
            >
              <card.icon
                className="h-7 w-5 flex-none text-twilight dark:text-blossom"
                aria-hidden="true"
              />
              <div className="text-base leading-7 break-keep">
                <h3 className="font-semibold">{card.name}</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamesSection;
