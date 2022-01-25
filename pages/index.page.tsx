import tw, { styled } from 'twin.macro';
import { Center, DanteLogo, Page } from '../components';

const Section = styled.div`
  ${tw`
    h-screen justify-center
    flex flex-col items-center
  `}
`;

const Home = () => {
  return (
    <Page>
      <Center className="relative h-screen">
        <DanteLogo />
        <div className="absolute bottom-10 animate-bounce">
          <svg
            className="w-8 h-8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </Center>

      <Section>
        <h2 className="text-center text-4xl font-thin m-8">Project</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src="/images/projects/futuremeal.png"
            alt="Future Meal"
            className="md:w-2/3 h-auto rounded"
          />

          <div className="flex-1 flex flex-row md:flex-col gap-8 md:gap-12">
            <a
              className="flex flex-col w-fit group p-2 rounded hover:bg-gray-50 "
              href="https://futuremeal.co.kr"
              target="_blank"
            >
              <div className="flex flex-row items-center gap-2">
                <h3 className="text-2xl font-bold text-black">퓨쳐밀</h3>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <path d="M15 3h6v6M10 14L21 3" />
                </svg>
              </div>
              <p className="text-xl font-light text-gray-400">(Futuremeal)</p>
            </a>

            <div className="flex flex-col gap-4">
              <div>
                <div className="flex flex-row items-center gap-3">
                  <div className="h-[1px] w-full bg-gray-800 shrink" />
                  <h4 className="text-lg font-semibold flex-shrink-0">
                    서비스
                  </h4>
                </div>
                <p className="text-right ml-8 text-sm break-words">
                  여러 판매사와 제조사의 리뷰를 바탕으로 신뢰있는 위탁 생산
                  계약을 연결하는 서비스
                </p>
              </div>

              <div>
                <div className="flex flex-row items-center gap-3">
                  <div className="h-[1px] w-full bg-gray-800 shrink" />
                  <h4 className="text-lg font-semibold flex-shrink-0">
                    사용기술
                  </h4>
                </div>
                <p className="text-right ml-8 text-sm break-words">
                  ReactJS, TypeScript, Strapi, AWS
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Page>
  );
};

export default Home;
