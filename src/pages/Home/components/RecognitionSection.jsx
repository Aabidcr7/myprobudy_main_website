import React from 'react';
import Button from '../../../components/ui/Button'; // Import the Button component

export const MarqueeLogos = ({ logos, className = '' }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex animate-marquee-infinite">
        {/* Original logos */}
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className={`mx-4 flex-shrink-0 ${logo.className || ''}`}
          />
        ))}
        {/* Duplicate logos for seamless looping */}
        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={logo.src}
            alt={logo.alt}
            className={`mx-4 flex-shrink-0 ${logo.className || ''}`}
          />
        ))}
        {/* Second set of duplicates to ensure smooth transition */}
        {logos.map((logo, index) => (
          <img
            key={`duplicate-second-${index}`}
            src={logo.src}
            alt={logo.alt}
            className={`mx-4 flex-shrink-0 ${logo.className || ''}`}
          />
        ))}
      </div>
    </div>
  );
};

const RecognitionSection = () => {
  const firstSectionLogos = [
    {
      src: '/images/20.png',
      alt: 'IIC Logo',
      className: 'w-[128px] lg:w-[160px] h-[66px] lg:h-[106px]',
    },
    {
      src: '/images/21.png',
      alt: 'Ministry Logo',
      className: 'w-[114px] lg:w-[142px] h-[69px] lg:h-[106px]',
    },
    {
      src: '/images/22.png',
      alt: 'MOE Logo',
      className: 'w-[134px] lg:w-[168px] h-[58px] lg:h-[106px]',
    },
    {
      src: '/images/23.png',
      alt: 'EDII Logo',
      className: 'w-[133px] lg:w-[166px] h-[85px] lg:h-[106px]',
    },
    {
      src: '/images/24.png',
      alt: 'AICTE Logo',
      className: 'w-[130px] lg:w-[162px] h-[85px] lg:h-[106px]',
    },
    {
      src: '/images/25.png',
      alt: 'Additional Logo',
      className: 'w-[114px] lg:w-[142px] h-[85px] lg:h-[106px]',
    },
    {
      src: '/images/26.png',
      alt: 'Additional Logo',
      className: 'w-[114px] lg:w-[142px] h-[85px] lg:h-[106px]',
    },
  ];

  const recognitionLogos = [
    {
      src: '/images/img_item_internet.png',
      alt: 'Internet Recognition',
      className: 'w-[158px] lg:w-[198px] h-[32px] lg:h-10',
    },
    {
      src: '/images/img_item_your_story.png',
      alt: 'Your Story Recognition',
      className: 'w-[80px] lg:w-[100px] h-[30px] lg:h-[38px]',
    },
    {
      src: '/images/img_item_passion_vista.png',
      alt: 'Passion Vista Recognition',
      className: 'w-[160px] lg:w-[200px] h-[54px] lg:h-[68px]',
    },
    {
      src: '/images/img_item_innsurge.png',
      alt: 'Innsurge Recognition',
      className: 'w-[162px] lg:w-[202px] h-[40px] lg:h-[50px]',
    },
    {
      src: '/images/img_item_indian_achiveers.png',
      alt: 'Indian Achievers Recognition',
      className: 'w-[80px] lg:w-[100px] h-[77px] lg:h-[96px]',
    },
    {
      src: '/images/27.png',
      alt: 'Forbes India Recognition',
      className: 'w-[74px] lg:w-[92px] h-[42px] lg:h-[52px]',
    },
  ];

  return (
    <div>
      {/* First Logo Section with Marquee */}
      <section className="w-full bg-main overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
          <div className="flex flex-row justify-center items-center">
            <MarqueeLogos logos={firstSectionLogos} />
          </div>
        </div>
      </section>

      {/* Recognition Logos Section with Marquee */}
      <section className="w-full bg-main overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
          <div className="flex flex-col gap-12 lg:gap-14 justify-start items-center py-16 lg:py-20">
            <div className="flex flex-col gap-1 lg:gap-[6px] justify-start items-center px-4 lg:px-14">
              <h2
                className="text-[26px] sm:text-[38px] md:text-[46px] lg:text-[50px] font-poppins font-medium leading-[38px] sm:leading-[57px] md:leading-[68px] lg:leading-[74px] mb-6"
                style={{ letterSpacing: '-2px' }}
              >
                <span className="text-primary-purple-2" style={{ color: '#5d248f' }}>
                  Recognized for{' '}
                </span>
                <span className="text-[#fc5109]">Redefining</span>
                <span className="text-[#f46d18]" style={{ color: '#5d248f' }}>
                  {' '}
                  Possiblities
                </span>
              </h2>
              <p className="text-lg lg:text-xl font-poppins font-medium leading-[30px] text-center text-primary">
                Our awards reflect the trust and transformation we deliver to founders,
                institutions, and incubators alike.
              </p>
            </div>

            <MarqueeLogos logos={recognitionLogos} />
          </div>
        </div>
      </section>

      {/* Partner Logos Section with Marquee */}
      <section className="w-full bg-main overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
          <div className="flex flex-col justify-start items-center">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
              <div className="flex flex-row justify-start items-center py-16 lg:py-20">
                <div className="flex flex-row justify-center items-center w-full">
                  <div className="flex flex-col justify-center items-center w-full bg-primary-purple-2 border border-solid border-[#e7e7e7] rounded-[32px] p-12 lg:p-20">
                    <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-poppins font-medium leading-[30px] sm:leading-[42px] md:leading-[51px] lg:leading-[60px] text-center text-white">
                      Equity Fundraising Made Simple, Smart & Aligned
                    </h2>
                    <div className="flex flex-col gap-1 lg:gap-1 justify-start items-center mt-2 lg:mt-[10px]">
                      <p className="text-sm lg:text-base font-inter font-normal leading-[20px] text-center text-white">
                        Experience AI powered Investor Matchmaking and automated outreach for
                      </p>
                      <p className="text-sm lg:text-base font-inter font-normal leading-[20px] text-center text-white">
                        seamless meetings with investors.
                      </p>
                    </div>
                    <Button
                      variant="orange"
                      size="large"
                      className="text-sm lg:text-base font-poppins font-medium leading-[20px] text-center text-white bg-[#ff5200] hover:bg-[#fc520c] px-6 lg:px-[34px] py-3 lg:py-3 rounded-[22px] mt-5 lg:mt-6 transition-all duration-200 hover:opacity-90"
                    >
                      Start Your Fundraising Journey Today
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecognitionSection;
