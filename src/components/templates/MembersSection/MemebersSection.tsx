import { AnimatedTitle } from "@components/atoms";
import { InstagramSvg, LinkedInSvg } from "./svgs";

const MembersSection = () => {
  const people = [
    {
      name: "천성혁",
      aka: "Dante",
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
          <AnimatedTitle>자유로운 개발을 지향해요</AnimatedTitle>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 break-keep">
            2007년 초등학생 때부터 플래시게임을 만들고 싶다는 생각에 시작한 첫
            프로그래밍이 취미이자 특기가 되었어요. 분업화된 회사 업무보다는
            가능한 모든 것을 스스로 만들어보자는 결심으로 2021년 대학 조기졸업과
            동시에 개인사업자이자 개발자로 시작하게됐어요.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 break-keep">
            덕분에 지금은{" "}
            <span className="text-gray-400 dark:text-gray-500">(자칭)</span>{" "}
            디지털노마드로서 원하는 곳에서 원하는 시간에 원하는 일을 할 수 있게
            되었어요. 저의 발자취를 보시고 싶다면{" "}
            <a
              href="https://nomadlist.com/@dantechun"
              className="font-black underline cursor-pointer"
            >
              여기
            </a>
            를 눌러보세요!
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
