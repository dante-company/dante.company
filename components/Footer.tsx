import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-8 p-8">
      <div className="w-full max-w-[900px] mx-auto flex flex-col gap-0.5">
        <p className="text-gray-800 text-base font-bold mb-2">단테컴퍼니</p>
        <div className="flex flex-row gap-4 text-sm text-gray-400">
          <p>사업자 대표</p>
          <p className="text-gray-600">천성혁</p>
        </div>
        <div className="flex flex-row gap-4 text-sm text-gray-400">
          <p>사업자등록번호</p>
          <p className="text-gray-600">102-07-93105</p>
        </div>
        <div className="flex flex-row gap-4 text-sm text-gray-400">
          <p>연락처</p>
          <a href="tel:01023623778" className="text-gray-900 font-medium">
            010-2362-3778
          </a>
        </div>
        <div className="flex flex-row gap-4 text-sm text-gray-400">
          <p>이메일</p>
          <a
            href="mailto:dev.1000ship@gmail.com"
            className="text-gray-900 font-medium"
          >
            dev.1000ship@gmail.com
          </a>
        </div>
        <div className="flex flex-row gap-4 text-sm text-gray-400">
          <p>사업 소재지</p>
          <p className="text-gray-600">
            경기도 용인시 기흥구 동백중앙로 191, 8층 씨8124호(중동, 씨티프라자)
          </p>
        </div>
        <div className="flex flex-row gap-4 text-sm text-gray-400">
          <p>계좌</p>
          <p className="text-gray-600">
            카카오뱅크 <b className="font-medium">3333-20-4390215</b> 천성혁
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
