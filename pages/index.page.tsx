import tw, { styled } from 'twin.macro';
import { Center, DanteLogo, Page } from '../components';
import Work from './partials/Work';

const Section = styled.div`
  ${tw`
    min-h-[500px] md:min-h-[600px] flex flex-col justify-center items-center
  `}
`;

const Home = () => {
  return (
    <Page>
      <Center className="relative h-screen">
        <DanteLogo />
        <div className="absolute bottom-10 animate-bounce">
          <svg
            className="h-8 w-8"
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
        <div className="aos-fadeIn sticky top-0 z-10 w-screen bg-gradient-to-b from-white via-[#ffffffcc] to-[#ffffff00]">
          <h2 className="m-4 text-center text-3xl font-thin md:m-8 md:text-4xl">Works</h2>
        </div>

        <div className="flex flex-col gap-[100px] py-8 md:gap-[150px]">
          <Work
            title="퓨쳐밀"
            subtitle="Futuremeal"
            image={[
              '/images/projects/futuremeal-1.png',
              '/images/projects/futuremeal-2.png',
              '/images/projects/futuremeal-3.png',
            ]}
            url="https://futuremeal.co.kr"
            descriptions={[
              {
                topic: '소개',
                content: '식품 위탁 생산 플랫폼',
              },
              {
                topic: '역할',
                content: '개발, 공동운영',
              },
              {
                topic: '사용기술',
                content: 'NextJS, TypeScript, Strapi, AWS',
              },
            ]}
            centerSlidePercentage={80}
          />

          <Work
            title="카페박스"
            subtitle="Cafebox"
            image={[
              '/images/projects/cafebox-1.png',
              '/images/projects/cafebox-2.png',
              '/images/projects/cafebox-3.png',
              '/images/projects/cafebox-4.png',
              '/images/projects/cafebox-5.png',
            ]}
            url="https://cafebox.kr"
            descriptions={[
              {
                topic: '소개',
                content: '사용자 취향맞춤 커피 구독 서비스',
              },
              {
                topic: '역할',
                content: '개발',
              },
              {
                topic: '사용기술',
                content: 'NextJS, TypeScript, Spring Boot, Kotlin, AWS',
              },
            ]}
          />

          <Work
            title="빙고코퍼레이션"
            subtitle="Bingo Corporation"
            image={[
              '/images/projects/bingo-1.png',
              '/images/projects/bingo-2.png',
              '/images/projects/bingo-3.png',
            ]}
            url="https://bingocorp.kr"
            descriptions={[
              {
                topic: '소개',
                content: '커머스테크 법인회사 빙고코퍼레이션',
              },
              {
                topic: '역할',
                content: '개발 파트너',
              },
            ]}
          />
        </div>
      </Section>

      <Section>
        <h2 className="aos-fadeIn m-4 text-center text-3xl font-thin md:m-8 md:text-4xl">
          Contact me
        </h2>

        <div className="aos-fadeIn my-8 flex flex-col">
          <a
            href="tel:01023623778"
            className="flex flex-row items-center gap-4 rounded-lg px-4 py-2 text-lg font-semibold transition hover:bg-gray-50 hover:shadow"
          >
            <i>📞</i> 010 - 2362 - 3778
          </a>
          <a
            href="mailto:contact@dante.company"
            className="flex flex-row items-center gap-4 rounded-lg px-4 py-2 text-lg font-semibold transition hover:bg-gray-50 hover:shadow"
          >
            <i>✉️</i> contact@dante.company
          </a>

          {/* kakao */}
          <a
            href="http://qr.kakao.com/talk/uwVv3.I9yFvDpu27bkUM9Mi7KO0-"
            className="flex flex-row items-center gap-4 rounded-lg px-4 py-2 text-lg font-semibold transition hover:bg-gray-50 hover:shadow"
          >
            <img
              src="/icons/kakao-talk.png"
              alt="카카오톡"
              className="h-[24px] w-[24px] object-contain"
            />
            1000ship
          </a>
        </div>
      </Section>
    </Page>
  );
};

export default Home;
