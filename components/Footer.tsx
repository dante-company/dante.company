import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-8 p-4 text-xs md:p-8 md:text-sm">
      <div className="mx-auto flex w-full max-w-[900px] flex-col gap-0.5">
        <p className="text-sm font-bold text-gray-800 md:mb-2 md:text-base">단테컴퍼니</p>
        <div className="flex flex-row gap-2 text-gray-400 md:gap-4">
          <p className="whitespace-nowrap">사업자 대표</p>
          <p className="text-gray-600">천성혁</p>
        </div>
        <div className="flex flex-row gap-2 text-gray-400 md:gap-4">
          <p className="whitespace-nowrap">사업자등록번호</p>
          <p className="text-gray-600">102-07-93105</p>
        </div>
        <div className="flex flex-row gap-2 text-gray-400 md:gap-4">
          <p className="whitespace-nowrap">연락처</p>
          <a href="tel:01023623778" className="font-medium text-gray-900">
            010-2362-3778
          </a>
        </div>
        <div className="flex flex-row gap-2 text-gray-400 md:gap-4">
          <p className="whitespace-nowrap">이메일</p>
          <a href="mailto:contact@dante.company" className="font-medium text-gray-900">
            contact@dante.company
          </a>
        </div>
        <div className="flex flex-row gap-2 text-gray-400 md:gap-4">
          <p className="whitespace-nowrap">주소</p>
          <p className="text-gray-600">
            경기도 용인시 기흥구 동백중앙로 191, 8층 씨8124호 (중동, 씨티프라자)
          </p>
        </div>
        <div className="flex flex-row gap-2 text-gray-400 md:gap-4">
          <p className="whitespace-nowrap">계좌</p>
          <p className="text-gray-600">
            카카오뱅크 <b className="font-medium">3333-20-4390215</b> 천성혁
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
