import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StatisticsSection = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;

    // Split the heading text into spans wrapping each word with initial styles
    const text = heading.textContent;
    const words = text.split(' ');
    heading.innerHTML = words
      .map(
        (word) =>
          `<span class="word" style="display:inline-block; opacity:0; transform: translateY(20px); margin-right: 6px;">${word}</span>`
      )
      .join(' ');

    // Animate the words when the heading scrolls into the viewport
    gsap.to(heading.querySelectorAll('.word'), {
      scrollTrigger: {
        trigger: heading,
        start: 'top 80%',
        toggleActions: 'play none none none', // play animation once on enter
        // markers: true, // Uncomment this line to see debug markers for ScrollTrigger positioning
      },
      duration: 0.6,
      opacity: 1,
      y: 0,
      stagger: 0.1,
      ease: 'power3.out',
      delay: 0.2,
    });
  }, []);

  return (
    <section className="w-full border-b border-gray-100">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
        <div
          className="flex flex-col lg:flex-row justify-center items-center py-20 lg:py-24 gap-12 lg:gap-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Left Content - Social Proof */}
          <div className="w-full lg:w-[60%] flex flex-col justify-start items-center">
            <div className="w-full lg:w-[86%] mb-8 lg:mb-12">
              {/* Testimonial Text - Animated Heading */}
              <div className="text-center lg:text-left mb-8">
                <h2
                  ref={headingRef}
                  className="text-[22px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-poppins font-semibold leading-[33px] sm:leading-[48px] md:leading-[57px] lg:leading-[66px] min-h-[66px]"
                  style={{ color: '#5d248f', whiteSpace: 'pre-line' }}
                >
                  Every 2 minutes, a founder is on a call with our experts.
                </h2>
              </div>

              {/* User Avatars and Rating - Cleaner Layout */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6 lg:gap-8">
                <div className="flex flex-row justify-center items-center">
                  <div className="flex flex-row justify-center items-center">
                    <img
                      src="/images/img_.png"
                      alt="User Avatar 1"
                      className="w-[38px] h-[38px] rounded-[18px] border-2 border-white"
                    />
                    <img
                      src="/images/img__0x0.png"
                      alt="User Avatar 2"
                      className="w-[38px] h-[38px] rounded-[18px] border-2 border-white -ml-2"
                    />
                  </div>
                  <img
                    src="/images/img__1.png"
                    alt="User Avatar 3"
                    className="w-[38px] h-[38px] rounded-[18px] border-2 border-white -ml-2"
                  />
                </div>

                <div className="flex flex-col gap-2 justify-center items-center lg:items-start">
                  <img
                    src="/images/img_stars.svg"
                    alt="5 Star Rating"
                    className="w-[82px] h-[14px]"
                  />
                  <p className="text-sm lg:text-[15px] font-inter font-medium leading-[19px] text-center lg:text-left text-[#545454]">
                    10K+ Successful Entrepreneurs
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Statistics Grid - Better Spacing */}
          <div className="w-full lg:w-[40%]" data-aos="fade-left" data-aos-delay="200">
            <div className="grid grid-cols-2 gap-8 lg:gap-10">
              <div className="flex flex-col justify-start items-center lg:items-start text-center lg:text-left">
                <h3 className="text-[32px] sm:text-[40px] lg:text-[48px] font-poppins font-medium leading-[48px] sm:leading-[60px] lg:leading-[73px] text-[#fa4300] mb-2">
                  $250 Mn
                </h3>
                <p className="text-sm lg:text-base font-poppins font-normal leading-[24px] text-[#575757]">
                  Funds Raised
                </p>
              </div>

              <div className="flex flex-col justify-start items-center lg:items-start text-center lg:text-left">
                <h3 className="text-[32px] sm:text-[40px] lg:text-[48px] font-poppins font-medium leading-[48px] sm:leading-[60px] lg:leading-[73px] text-[#fa4300] mb-2">
                  215+
                </h3>
                <p className="text-sm lg:text-base font-poppins font-normal leading-[24px] text-[#575757]">
                  Startups Funded
                </p>
              </div>

              <div className="flex flex-col justify-start items-center lg:items-start text-center lg:text-left">
                <h3 className="text-[32px] sm:text-[40px] lg:text-[48px] font-poppins font-medium leading-[48px] sm:leading-[60px] lg:leading-[73px] text-[#fa4300] mb-2">
                  3000+
                </h3>
                <p className="text-sm lg:text-base font-poppins font-normal leading-[24px] text-[#575757]">
                  Mentors & Industry Experts
                </p>
              </div>

              <div className="flex flex-col justify-start items-center lg:items-start text-center lg:text-left">
                <h3 className="text-[32px] sm:text-[40px] lg:text-[48px] font-poppins font-medium leading-[48px] sm:leading-[60px] lg:leading-[73px] text-[#fa4300] mb-2">
                  15000+
                </h3>
                <p className="text-sm lg:text-base font-poppins font-normal leading-[24px] text-[#575757]">
                  Questions Answered
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
