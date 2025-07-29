import React, { useRef, useEffect, useState } from 'react';

const ExpertMentorshipSection = () => {
  const partnerLogos = [
    {
      src: '/images/img_item_rook_u.png',
      alt: 'Rook U Partner',
      className: 'w-[80px] sm:w-[102px] lg:w-[128px] h-[70px] sm:h-[90px] lg:h-[120px]',
    },
    {
      src: '/images/img_item_realm_rook.png',
      alt: 'Realm Rook Partner',
      className: 'w-[160px] sm:w-[200px] lg:w-[250px] h-[110px] sm:h-[146px] lg:h-[120px]',
    },
    {
      src: '/images/img_item_prudent_capital.png',
      alt: 'Prudent Capital Partner',
      className: 'w-[180px] sm:w-[206px] lg:w-[258px] h-[50px] sm:h-[61px] lg:h-[120px]',
    },
    {
      src: '/images/img_item_parminder.png',
      alt: 'Parminder Partner',
      className: 'w-[70px] sm:w-[86px] lg:w-[108px] h-[80px] sm:h-[93px] lg:h-[120px]',
    },
    {
      src: '/images/35.png',
      alt: 'Partner Logo',
      className: 'w-[86px] lg:w-[108px] h-[93px] lg:h-[120px]',
    },
    {
      src: '/images/36.jpg',
      alt: 'Partner Logo',
      className: 'w-[86px] lg:w-[108px] h-[93px] lg:h-[120px]',
    },
    {
      src: '/images/37.png',
      alt: 'Partner Logo',
      className: 'w-[90px] lg:w-[114px] h-[93px] lg:h-[120px]',
    },
    {
      src: '/images/38.png',
      alt: 'Partner Logo',
      className: 'w-[200px] lg:w-[250px] h-[93px] lg:h-[120px]',
    },
    {
      src: '/images/img_item_rook_u.png',
      alt: 'Rook U Partner',
      className: 'w-[102px] lg:w-[128px] h-[90px] lg:h-[120px]',
    },
    {
      src: '/images/img_item_realm_rook.png',
      alt: 'Realm Rook Partner',
      className: 'w-[200px] lg:w-[250px] h-[146px] lg:h-[120px]',
    },
    {
      src: '/images/img_item_prudent_capital.png',
      alt: 'Prudent Capital Partner',
      className: 'w-[206px] lg:w-[258px] h-[61px] lg:h-[120px]',
    },
    {
      src: '/images/img_item_parminder.png',
      alt: 'Parminder Partner',
      className: 'w-[86px] lg:w-[108px] h-[93px] lg:h-[120px]',
    },
    {
      src: '/images/35.png',
      alt: 'Partner Logo',
      className: 'w-[86px] lg:w-[108px] h-[93px] lg:h-[120px]',
    },
    {
      src: '/images/36.jpg',
      alt: 'Partner Logo',
      className: 'w-[86px] lg:w-[108px] h-[93px] lg:h-[120px]',
    },
    {
      src: '/images/37.png',
      alt: 'Partner Logo',
      className: 'w-[90px] lg:w-[114px] h-[93px] lg:h-[120px]',
    },
    {
      src: '/images/38.png',
      alt: 'Partner Logo',
      className: 'w-[200px] lg:w-[250px] h-[93px] lg:h-[120px]',
    },
    {
      src: '/images/img_item_rook_u.png',
      alt: 'Rook U Partner',
      className: 'w-[102px] lg:w-[128px] h-[90px] lg:h-[120px]',
    },
    {
      src: '/images/img_item_realm_rook.png',
      alt: 'Realm Rook Partner',
      className: 'w-[200px] lg:w-[250px] h-[146px] lg:h-[120px]',
    },
    {
      src: '/images/img_item_prudent_capital.png',
      alt: 'Prudent Capital Partner',
      className: 'w-[206px] lg:w-[258px] h-[61px] lg:h-[120px]',
    },
    {
      src: '/images/img_item_parminder.png',
      alt: 'Parminder Partner',
      className: 'w-[86px] lg:w-[108px] h-[93px] lg:h-[120px]',
    },
    {
      src: '/images/35.png',
      alt: 'Partner Logo',
      className: 'w-[86px] lg:w-[108px] h-[93px] lg:h-[120px]',
    },
    {
      src: '/images/36.jpg',
      alt: 'Partner Logo',
      className: 'w-[86px] lg:w-[108px] h-[93px] lg:h-[120px]',
    },
    {
      src: '/images/37.png',
      alt: 'Partner Logo',
      className: 'w-[90px] lg:w-[114px] h-[93px] lg:h-[120px]',
    },
    {
      src: '/images/38.png',
      alt: 'Partner Logo',
      className: 'w-[200px] lg:w-[250px] h-[93px] lg:h-[120px]',
    },
    {
      src: '/images/img_item_rook_u.png',
      alt: 'Rook U Partner',
      className: 'w-[102px] lg:w-[128px] h-[90px] lg:h-[120px]',
    },
    {
      src: '/images/img_item_realm_rook.png',
      alt: 'Realm Rook Partner',
      className: 'w-[200px] lg:w-[250px] h-[146px] lg:h-[120px]',
    },
    {
      src: '/images/img_item_prudent_capital.png',
      alt: 'Prudent Capital Partner',
      className: 'w-[206px] lg:w-[258px] h-[61px] lg:h-[120px]',
    },
    {
      src: '/images/img_item_parminder.png',
      alt: 'Parminder Partner',
      className: 'w-[86px] lg:w-[108px] h-[93px] lg:h-[120px]',
    },
    {
      src: '/images/35.png',
      alt: 'Partner Logo',
      className: 'w-[86px] lg:w-[108px] h-[93px] lg:h-[120px]',
    },
    {
      src: '/images/36.jpg',
      alt: 'Partner Logo',
      className: 'w-[86px] lg:w-[108px] h-[93px] lg:h-[120px]',
    },
    {
      src: '/images/37.png',
      alt: 'Partner Logo',
      className: 'w-[90px] lg:w-[114px] h-[93px] lg:h-[120px]',
    },
    {
      src: '/images/38.png',
      alt: 'Partner Logo',
      className: 'w-[200px] lg:w-[250px] h-[93px] lg:h-[120px]',
    },
  ];

  const scrollContainerRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(1000);
  const [isMobile, setIsMobile] = useState(false);

  // Adjust scroll duration based on screen size
  const scrollDuration = isMobile ? 60 : 90; // Faster scroll on mobile

  useEffect(() => {
    const calculateScrollWidth = () => {
      // Check for mobile screen size
      setIsMobile(window.innerWidth < 768);

      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const firstSet = container.querySelector('.logos-set');
        if (firstSet) {
          // Calculate total width of logos in the first set
          const logos = firstSet.querySelectorAll('img');
          const totalWidth = Array.from(logos).reduce((acc, logo) => {
            return acc + logo.offsetWidth + (window.innerWidth < 640 ? 16 : 32); // Adjust gap for mobile
          }, 0);
          setScrollWidth(totalWidth);
        }
      }
    };

    // Calculate immediately on mount
    calculateScrollWidth();

    // Also calculate on window resize to handle responsive changes
    window.addEventListener('resize', calculateScrollWidth);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('resize', calculateScrollWidth);
    };
  }, [partnerLogos]);

  return (
    <section className="w-full bg-main overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
        <div className="flex flex-col justify-start items-center py-12 sm:py-16 lg:py-20">
          <div className="flex flex-row justify-center items-center w-full">
            <div className="flex flex-col gap-1 lg:gap-[6px] justify-start items-center px-4 lg:px-14">
            <h2
  className="text-base sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-medium leading-6 sm:leading-[57px] md:leading-[68px] lg:leading-[74px] mb-4 sm:mb-6 text-center tracking-tight"
  style={{ color: '#5d248f' }}
>
  <span className="text-primary-purple-2" style={{ color: '#5d248f' }}>
    Get Expert{' '}
  </span>
  <span className="text-[#fc5109]">Mentorship</span>
  <span className="text-primary-purple-2" style={{ color: '#5d248f' }}>
    {' '}
    with our trusted{' '}
  </span>
  <span className="text-[#fc5109]">partners</span>
</h2>
<p className="text-xs sm:text-base lg:text-xl font-poppins font-medium leading-5 sm:leading-7 text-center text-primary mt-2 px-4 sm:px-0 max-w-sm sm:max-w-lg mx-auto">
  While you build your product, we make sure you are investible and ready.
</p>


              {/* Marquee Container */}
              <div
                ref={scrollContainerRef}
                className="relative overflow-hidden w-full mt-6 sm:mt-8"
                style={{ height: 'max-content' }}
              >
                <div
                  className="flex"
                  style={{
                    width: scrollWidth ? scrollWidth * 2 + 'px' : 'auto',
                    animation: scrollWidth
                      ? `marquee-scroll ${scrollDuration}s linear infinite`
                      : 'none',
                  }}
                >
                  {/* First set of logos */}
                  <div className="logos-set flex gap-4 sm:gap-8">
                    {partnerLogos.map(({ src, alt, className }, i) => (
                      <img
                        key={`logo0-${i}`}
                        src={src}
                        alt={alt}
                        className={`object-contain ${className}`}
                        loading="lazy"
                      />
                    ))}
                  </div>
                  {/* Duplicate set to create seamless scroll */}
                  <div className="logos-set flex gap-4 sm:gap-8">
                    {partnerLogos.map(({ src, alt, className }, i) => (
                      <img
                        key={`logo1-${i}`}
                        src={src}
                        alt={alt}
                        className={`object-contain ${className}`}
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for marquee animation */}
      <style>{`
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${scrollWidth}px);
          }
        }

        @media (max-width: 640px) {
          .logos-set img {
            margin-right: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default ExpertMentorshipSection;
