import React, { useEffect } from 'react';
import Button from '../../../components/ui/Button';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, type: 'tween' },
  }),
};

// Marquee data for 2nd card
const marqueeRows = [
  ["/images/10.png", "/images/img_item_nabventures.png", "/images/11.png", "/images/12.png"], // 1st row
  ["/images/img_item_dst_nidhi.png", "/images/img_item_ifci_venture.png", "/images/13.png", "/images/img_item_niif_f.png"], // 2nd row
  ["/images/img_item_niif_f.png", "/images/16.png", "/images/17.png", "/images/18.png"], // 3rd row
];

const directions = ["marquee-left", "marquee-right", "marquee-left"]; // scrolling directions for each row

// MarqueeRow component
function MarqueeRow({ logos, direction, height }) {
  return (
    <div className="marquee-row" style={{ height: height || 56, width: "100%", overflow: "hidden", position: "relative" }}>
      <div className={`marquee-content ${direction}`}>
        {[...logos, ...logos].map((src, idx) => (
          <img src={src} alt="Logo" className="mx-4 h-[56px]" key={idx + direction} />
        ))}
      </div>
    </div>
  );
}

const GetFundedSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section className="w-full bg-main" ref={ref}>
      <style>
        {`
        .marquee-row {
          overflow: hidden;
          position: relative;
          width: 100%;
        }
        .marquee-content {
          display: flex;
          width: max-content;
          will-change: transform;
        }
        .marquee-left {
          animation: marquee-left 18s linear infinite;
        }
        .marquee-right {
          animation: marquee-right 18s linear infinite;
        }
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        `}
      </style>
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
        <div className="flex flex-col gap-16 lg:gap-20 justify-start items-center py-16 lg:py-[58px]">
          {/* Section Header */}
          <h2
            className="text-[26px] sm:text-[38px] md:text-[46px] lg:text-[50px] font-poppins font-medium leading-[38px] sm:leading-[57px] md:leading-[68px] lg:leading-[74px] mb-6"
            style={{ letterSpacing: '-2px' }}
          >
            <span className="text-primary-purple-2" style={{ color: '#5d248f' }}>
              Get
            </span>
            <span className="text-[#f46d19]"> </span>
            <span className="text-[#fc5109]">Funded</span>
            <span className="text-[#f46d19]"> </span>
            <span className="text-primary-purple-2" style={{ color: '#5d248f' }}>
              Without Giving Up
            </span>
            <span className="text-[#f46d19]"> </span>
            <span className="text-[#fc5109]">Equity</span>
          </h2>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full">

            {/* Card 1 - No Debt (appear second: custom=1) */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              custom={1}
              className="w-full lg:w-[346px] flex flex-col gap-6 lg:gap-7 justify-center items-center shadow-[-20px_10px_48px_#0f152214] bg-main rounded-[26px] p-6 lg:p-8"
            >
              <div className="flex flex-col gap-3 lg:gap-4 justify-start items-start w-full">
                <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-poppins font-bold leading-[28px] sm:leading-[33px] lg:leading-[39px] text-[#582591]">
                  No debt. No <br />
                  dilution. Just <br />
                  growth.
                </h3>
                <p className="text-xs lg:text-xs font-poppins font-normal leading-[19px] text-[#52525b]">
                  No matter what industry you are in, if your idea <br />
                  creates value or impact, there is likely a grant <br />
                  out there for you.
                </p>
              </div>
              <img
                src="/images/img_art_social_media.svg"
                alt="Social Media Art"
                className="w-full flex-1"
              />
            </motion.div>

            {/* Card 2 - Grants (appear last: custom=2) */}
            <motion.div
  variants={cardVariants}
  initial="hidden"
  animate={controls}
  custom={2}
  className="w-full lg:w-[346px] flex flex-col gap-6 lg:gap-8 justify-center items-start bg-[#f9631c] rounded-[26px] p-6 lg:p-8 mb-12 lg:mb-[68px]"
>
  <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-jakarta font-extrabold leading-[28px] sm:leading-[33px] lg:leading-[39px] text-white ml-2 lg:ml-3 mb-8">
    Explore Top <br />
    Grants & Schemes
  </h3>

  <div className="flex flex-col justify-start items-center w-full mr-3 lg:mr-4 ml-3 lg:ml-4 gap-4">
    {marqueeRows.map((row, idx) => (
      <MarqueeRow logos={row} direction={directions[idx]} key={idx} />
    ))}
  </div>
</motion.div>


            {/* Card 3 - Know Your Grants (appear first: custom=0) */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              custom={0}
              className="w-full lg:w-[520px] flex flex-col gap-6 lg:gap-8 justify-start items-center bg-[#582591] rounded-[26px] p-3 lg:p-3 mb-4 lg:mb-[22px]"
            >
              <div className="flex flex-col gap-3 lg:gap-[14px] justify-center items-start w-full lg:w-[86%] mt-6 lg:mt-[34px]">
                <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-jakarta font-extrabold leading-[33px] sm:leading-[38px] lg:leading-[44px] text-white">
                  Know Your <br />
                  Grants for free
                </h3>
                <p className="text-sm lg:text-base font-poppins font-normal leading-[25px] text-white">
                  You have the right to know and access free <br />
                  government grants that can benefit you.
                </p>
              </div>
              <div className="flex flex-row justify-between items-start w-full lg:w-[86%]">
                <Button
                  variant="primary"
                  size="medium"
                  className="text-sm lg:text-base font-jakarta font-bold leading-[21px] text-white bg-[#1c64f2] hover:bg-[#1c64f2] px-4 lg:px-[22px] py-3 lg:py-3 rounded-[10px] mt-6 lg:mt-7 transition-all duration-200"
                >
                  Try For Free
                </Button>
                <img
                  src="/images/img_icon_group.svg"
                  alt="Icon Group"
                  className="w-[184px] lg:w-[230px] h-[189px] lg:h-[236px] mr-2 lg:mr-2 mb-3 lg:mb-4"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GetFundedSection;
