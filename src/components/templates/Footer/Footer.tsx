import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
      <div className="mt-8 flex flex-col items-center gap-1 text-xs leading-5 text-gray-500 dark:text-gray-100 md:order-1 md:mt-0">
        <p>&copy; 2023 Dante Company, All rights reserved.</p>
        <div className="flex gap-3">
          <p className="text-gray-600 dark:text-gray-300">
            상호명 <strong className="font-medium">단테컴퍼니</strong>
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            사업자등록번호 <strong className="font-medium">102-07-93105</strong>
          </p>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          경기도 용인시 기흥구 동백중앙로 191, 8층 씨8124호 (중동, 씨티프라자)
        </p>
        <div className="flex gap-3">
          <p className="text-gray-600 dark:text-gray-300">
            대표자명 <strong className="font-medium">천성혁</strong>
          </p>
          <a
            href="tel:01023623778"
            className="font-medium text-gray-900 dark:text-gray-50"
          >
            010-2362-3778
          </a>
          <a
            href="mailto:contact@dante.company"
            className="font-medium text-gray-900 dark:text-gray-50"
          >
            contact@dante.company
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
