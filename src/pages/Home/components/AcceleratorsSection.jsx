import React, { useState, useEffect } from 'react';

const images = ['/images/1-1.jpeg', 'images/2-2.jpeg', 'images/3-3.jpeg'];

const AcceleratorsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay: advance every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Manual controls
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <section className="w-full bg-main">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-center items-start py-16 lg:py-[164px] gap-8 lg:gap-0">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8 justify-start items-start">
            <div className="flex flex-col gap-2 lg:gap-3 justify-start items-start w-full">
              <h2
                className="text-[26px] sm:text-[38px] md:text-[46px] lg:text-[50px] font-poppins font-medium leading-[38px] sm:leading-[57px] md:leading-[68px] lg:leading-[74px] mb-6"
                style={{ letterSpacing: '-2px' }}
              >
                <span className="text-primary-purple-2" style={{ color: '#5d248f' }}>
                  Accelerating Growth <br />
                  through
                </span>
                <span className="text-[#f46d19]"> </span>
                <span className="text-[#fc5109]">Incubators</span>
                <span className="text-[#f46d19]"> </span>
                <span className="text-primary-purple-2" style={{ color: '#5d248f' }}>
                  &
                </span>
                <span className="text-[#f46d19]">
                  {' '}
                  <br />
                </span>
                <span className="text-[#fc5109]">Accelerators</span>
              </h2>
              <p className="text-lg lg:text-xl font-poppins font-normal leading-[26px] lg:leading-[32px] text-[#8a8a8a]">
                We support incubation centers with our investor network <br />
                and empower startups through collaborative workshops.
              </p>
            </div>

            {/* Statistics */}
            <div className="flex flex-col justify-start items-center w-full">
              <div className="relative w-full h-[133px] lg:h-[166px]">
                <div className="flex flex-col justify-start items-end w-full">
                  <div className="flex flex-row gap-12 lg:gap-[60px] w-full items-start">
                    <div className="flex flex-col items-start">
                      <h3
                        className="text-[27px] sm:text-[40px] lg:text-[54px] font-poppins font-bold leading-[40px] sm:leading-[60px] lg:leading-[81px] text-primary-purple-2"
                        style={{ color: '#5d248f' }}
                      >
                        25+
                      </h3>
                      <p className="text-sm lg:text-base font-poppins font-medium leading-[24px] text-[#3d495b] w-[136px] lg:w-[170px]">
                        Trusted accelerators <br />& incubators
                      </p>
                    </div>
                    <div className="flex flex-col items-start">
                      <h3
                        className="text-[27px] sm:text-[40px] lg:text-[54px] font-poppins font-bold leading-[40px] sm:leading-[60px] lg:leading-[81px] text-primary-purple-2"
                        style={{ color: '#5d248f' }}
                      >
                        200+
                      </h3>
                      <p className="text-sm lg:text-base font-poppins font-medium leading-[24px] text-[#3d495b]">
                        NIRF standards & IIC accredited
                        <br />
                        Workshops
                      </p>
                    </div>
                  </div>
                </div>

                {/* Vertical Line */}
                <div className="absolute w-[1px] h-[112px] lg:h-[140px] bg-[linear-gradient(180deg,#dee5ed00_0%,_#dee5ed_100%)] ml-[176px] lg:ml-[220px] mt-[21px] lg:mt-[26px]"></div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-5 justify-start items-start">
            {/* Carousel with autoplay + manual */}
            <div className="w-full relative rounded-[16px] overflow-hidden">
              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-[300px] lg:h-[400px] object-cover rounded-[16px] transition-all duration-700"
              />
              <button
                onClick={() => setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-90 rounded-full p-2 shadow"
                aria-label="Previous"
                type="button"
              >
                &#8592;
              </button>
              <button
                onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-90 rounded-full p-2 shadow"
                aria-label="Next"
                type="button"
              >
                &#8594;
              </button>
            </div>

            <div className="flex flex-col gap-2 lg:gap-[10px] justify-start items-start w-full bg-[#f8fafc] border border-solid border-[#dde5ed] rounded-[16px] p-5 lg:p-6">
              <p className="text-sm lg:text-base font-poppins font-medium leading-[24px] text-[#444444] ml-4 lg:ml-6">
                Let us co-create the next generation of fundable startups.
              </p>
              <button
                className="text-sm lg:text-base font-poppins font-semibold leading-[24px] text-center text-white px-6 py-2 rounded-[16px] bg-[#fc520c] shadow-md transition-all duration-200 hover:bg-[#d13e00] hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#fc520c] focus:ring-opacity-50"
                type="button"
              >
                Partner with Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcceleratorsSection;
