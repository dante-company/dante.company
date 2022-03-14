import React, { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useWindowSize } from 'usehooks-ts';

interface WorkProps {
  title: string;
  subtitle: string;
  image: string | string[];
  url: string;
  descriptions?: {
    topic: string;
    content: string;
  }[];
}

const Work: FC<WorkProps> = (props) => {
  const { title, subtitle, image, url, descriptions } = props;
  const { width: windowWidth } = useWindowSize();

  return (
    <div className="aos-fadeIn flex flex-col gap-4 md:flex-row md:gap-10">
      <Carousel
        autoPlay
        centerMode
        centerSlidePercentage={50}
        autoFocus={false}
        showArrows={windowWidth >= 768}
        showThumbs={windowWidth >= 768}
        showStatus={false}
        showIndicators
        infiniteLoop
        interval={3000}
        transitionTime={1000}
        className="-mx-[16px] w-screen md:w-2/3"
      >
        {(Array.isArray(image) ? image : [image]).map((image) => (
          <div key={image} className="mx-2 my-2 h-auto max-h-screen object-contain shadow md:mx-4">
            <img src={image} alt="Future Meal" />
          </div>
        ))}
      </Carousel>

      <div className="flex flex-1 flex-col gap-4 md:gap-12">
        <a
          className="group flex w-fit flex-row items-center gap-4 rounded-lg hover:bg-gray-50 md:flex-col md:items-start md:gap-0 md:p-2"
          href={url}
          target="_blank"
        >
          <div className="flex flex-row items-center gap-2">
            <h3 className="text-2xl font-bold text-black">{title}</h3>
            <ShareIcon />
          </div>
          <p className="text-xl font-light text-gray-400">{subtitle}</p>
        </a>

        <div className="ml-4 flex flex-col gap-4 md:ml-0">
          {descriptions?.map(({ topic, content }) => (
            <div key={topic} className="aos-fadeIn">
              <div className="flex flex-row-reverse items-center gap-3 md:flex-row">
                <div className="aos-horizontalExpand h-[1px] w-full shrink origin-left bg-gray-800 md:origin-right" />
                <h4 className="flex-shrink-0 text-lg font-semibold">{topic}</h4>
              </div>
              <p className="break-words text-left text-sm md:ml-8 md:text-right">{content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

const ShareIcon = () => (
  <svg
    className="h-6 w-6"
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
);
