import React from 'react';
import { FileText, DollarSign, Briefcase } from 'lucide-react';

// Button component since it's imported in original
const Button = ({ children, variant, size, className, ...props }) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

const ServicesSection = () => {
  return (
<section className="w-full bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
            <div className="flex flex-col gap-16 lg:gap-20 justify-start items-center py-20 lg:py-28">
              
              {/* Section Header - Improved Typography */}
              <div className="flex flex-col justify-start items-center text-center max-w-4xl" data-aos="fade-up" data-aos-delay="0">
<h2 
  className="text-[26px] sm:text-[38px] md:text-[46px] lg:text-[50px] font-poppins font-medium leading-[38px] sm:leading-[57px] md:leading-[68px] lg:leading-[74px] mb-6" 
  style={{ letterSpacing: '-2px' }}
  data-aos="fade-up"
  data-aos-delay="0"
>
<span className="text-primary-purple-2" style={{ color: '#5d248f' }}>We Connect You with the</span>
                  <span className="text-[#fc5109]"> Right Investors</span>
                </h2>
              </div>

              {/* Two Column Layout - Better Balance */}
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center items-start w-full max-w-7xl">
                
                {/* Left Column - Trusted Startups */}
                <div className="w-full lg:w-[45%] flex flex-col gap-6 lg:gap-8 justify-between bg-white shadow-xl rounded-3xl p-6 lg:p-8 min-h-[420px]" data-aos="fade-up" data-aos-delay="1000">
                  <div className="flex flex-col gap-4 justify-start items-start">
                    <h3 className="text-[26px] sm:text-[30px] lg:text-[32px] font-poppins font-semibold leading-[36px] sm:leading-[42px] lg:leading-[44px] text-[#693795]">
                      Trusted by 100+ Startups
                    </h3>
                    <p className="text-base lg:text-lg font-poppins font-normal leading-[24px] lg:leading-[28px] text-[#666666]">
                      We made 100+ seed-stage startups investor-ready and fundable with our proven methodology.
                    </p>
                    <Button
                      variant="orange"
                      size="small"
                      className="text-xs lg:text-sm font-poppins font-medium leading-[16px] text-white bg-[#fc5109] hover:bg-[#fc520c] hover:scale-105 hover:shadow-lg px-4 lg:px-5 py-2 lg:py-2 rounded-[16px] transition-all duration-200"
                    >
                      Become the next success story
                    </Button>
                  </div>
                  
                  {/* Company Logos - Better Organization */}
<style>
  {`
    .marquee-logos {
      width: 100%;
      overflow: hidden;
      position: relative;
      background: #f9fafb;
      border-radius: 1rem;
      padding: 1.5rem 1rem;
      margin-top: -12px;
    }
    .marquee-logos-track {
      display: flex;
      gap: 2.5rem;
      align-items: center;
      width: max-content;
      animation: marquee-logos 20s linear infinite;
    }
    @keyframes marquee-logos {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `}
</style>
<div className="marquee-logos">
  <div className="marquee-logos-track">
    {/* Repeat the logo set twice for seamless infinite scroll, no blank */}
    <>
      <img 
        src="/images/img_item_five_j.png" 
        alt="Company Logo 1" 
        className="w-[50px] lg:w-[60px] h-[48px] lg:h-[58px] object-contain"
      />
      <img 
        src="/images/img_item_two_ua.png" 
        alt="Company Logo 2" 
        className="w-[50px] lg:w-[60px] h-[46px] lg:h-[56px] object-contain"
      />
      <img 
        src="/images/img_item_three.png" 
        alt="Company Logo 3" 
        className="w-[50px] lg:w-[60px] h-[48px] lg:h-[58px] object-contain"
      />
      <img 
        src="/images/img_item_six_2.jpg" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
       <img 
        src="/images/2.png" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
       <img 
        src="/images/3.png" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
      <img 
        src="/images/3.jpg" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
      <img 
        src="/images/4.png" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
      <img 
        src="/images/img_item_five_j.png" 
        alt="Company Logo 1" 
        className="w-[50px] lg:w-[60px] h-[48px] lg:h-[58px] object-contain"
      />
      <img 
        src="/images/img_item_two_ua.png" 
        alt="Company Logo 2" 
        className="w-[50px] lg:w-[60px] h-[46px] lg:h-[56px] object-contain"
      />
      <img 
        src="/images/img_item_three.png" 
        alt="Company Logo 3" 
        className="w-[50px] lg:w-[60px] h-[48px] lg:h-[58px] object-contain"
      />
      <img 
        src="/images/img_item_six_2.jpg" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
      <img 
        src="/images/2.png" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
       <img 
        src="/images/3.png" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
      <img 
        src="/images/3.jpg" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
      <img 
        src="/images/4.png" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
      <img 
        src="/images/2.png" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
       <img 
        src="/images/3.png" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
      <img 
        src="/images/3.jpg" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
      <img 
        src="/images/4.png" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
      <img 
        src="/images/img_item_five_j.png" 
        alt="Company Logo 1" 
        className="w-[50px] lg:w-[60px] h-[48px] lg:h-[58px] object-contain"
      />
      <img 
        src="/images/img_item_two_ua.png" 
        alt="Company Logo 2" 
        className="w-[50px] lg:w-[60px] h-[46px] lg:h-[56px] object-contain"
      />
      <img 
        src="/images/img_item_three.png" 
        alt="Company Logo 3" 
        className="w-[50px] lg:w-[60px] h-[48px] lg:h-[58px] object-contain"
      />
      <img 
        src="/images/img_item_six_2.jpg" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
      <img 
        src="/images/2.png" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
       <img 
        src="/images/3.png" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
      <img 
        src="/images/3.jpg" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
      <img 
        src="/images/4.png" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
      <img 
        src="/images/2.png" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
       <img 
        src="/images/3.png" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
      <img 
        src="/images/3.jpg" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
      <img 
        src="/images/4.png" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
      <img 
        src="/images/img_item_five_j.png" 
        alt="Company Logo 1" 
        className="w-[50px] lg:w-[60px] h-[48px] lg:h-[58px] object-contain"
      />
      <img 
        src="/images/img_item_two_ua.png" 
        alt="Company Logo 2" 
        className="w-[50px] lg:w-[60px] h-[46px] lg:h-[56px] object-contain"
      />
      <img 
        src="/images/img_item_three.png" 
        alt="Company Logo 3" 
        className="w-[50px] lg:w-[60px] h-[48px] lg:h-[58px] object-contain"
      />
      <img 
        src="/images/img_item_six_2.jpg" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
      <img 
        src="/images/2.png" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
       <img 
        src="/images/3.png" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
      <img 
        src="/images/3.jpg" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
      <img 
        src="/images/4.png" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
      <img 
        src="/images/2.png" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
       <img 
        src="/images/3.png" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
      <img 
        src="/images/3.jpg" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
      <img 
        src="/images/4.png" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
      <img 
        src="/images/img_item_five_j.png" 
        alt="Company Logo 1" 
        className="w-[50px] lg:w-[60px] h-[48px] lg:h-[58px] object-contain"
      />
      <img 
        src="/images/img_item_two_ua.png" 
        alt="Company Logo 2" 
        className="w-[50px] lg:w-[60px] h-[46px] lg:h-[56px] object-contain"
      />
      <img 
        src="/images/img_item_three.png" 
        alt="Company Logo 3" 
        className="w-[50px] lg:w-[60px] h-[48px] lg:h-[58px] object-contain"
      />
      <img 
        src="/images/img_item_six_2.jpg" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
      <img 
        src="/images/2.png" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
       <img 
        src="/images/3.png" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
      <img 
        src="/images/3.jpg" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
      <img 
        src="/images/4.png" 
        alt="Company Logo 4" 
        className="w-[60px] h-[58px] object-contain"
      />
    </>
  </div>
</div>
                </div>

                {/* Right Column - Expert Services */}
                <div className="w-full lg:w-[55%] flex flex-col gap-6 lg:gap-8 justify-start items-start bg-[#693795] rounded-3xl p-8 lg:p-10" data-aos="fade-up" data-aos-delay="0">
                  <div className="text-center lg:text-left">
                    <h3 className="text-[26px] sm:text-[30px] lg:text-[32px] font-poppins font-semibold leading-[36px] sm:leading-[42px] lg:leading-[44px] text-white mb-4">
                      A Proven Track Record of Negotiating the Best Deals
                    </h3>
                    <p className="text-base lg:text-lg font-poppins font-normal leading-[24px] lg:leading-[28px] text-white/90">
                      With a dedicated team of strategists and analysts, we ensure your startup stands out and connects with capital that aligns with your growth path.
                    </p>
                  </div>
                  
                  {/* Service Cards - Improved Layout */}
                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-row gap-5 justify-start items-start w-full bg-white rounded-2xl p-6 shadow-sm">
                      <img 
                        src="/images/img_svg_118361186_2173.svg" 
                        alt="Venture Analyst Icon" 
                        className="w-8 h-8 mt-1 flex-shrink-0"
                      />
                      <div className="flex flex-col gap-2 justify-start items-start flex-1">
                        <h4 className="text-lg lg:text-xl font-poppins font-semibold leading-[28px] text-[#693795]">
                          Venture Analyst
                        </h4>
                        <p className="text-sm lg:text-base font-poppins font-normal leading-[22px] text-[#53535c]">
                          Refine your business documents and ensure compliance with our Venture Analyst.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-row gap-5 justify-start items-start w-full bg-white rounded-2xl p-6 shadow-sm">
                      <img 
                        src="/images/img_svg_978720114_2668.svg" 
                        alt="Chief Financial Analyst Icon" 
                        className="w-8 h-8 mt-1 flex-shrink-0"
                      />
                      <div className="flex flex-col gap-2 justify-start items-start flex-1">
                        <h4 className="text-lg lg:text-xl font-inter font-semibold leading-[28px] text-[#582591]">
                          Chief Financial Analyst
                        </h4>
                        <p className="text-sm lg:text-base font-poppins font-normal leading-[22px] text-[#53535c]">
                          Get precise projections and add credibility to your valuation with support from our CFA.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-row gap-5 justify-start items-start w-full bg-white rounded-2xl p-6 shadow-sm">
                      <img 
                        src="/images/img_svg540797175_2011.svg" 
                        alt="Investment Banker Icon" 
                        className="w-8 h-8 mt-1 flex-shrink-0"
                      />
                      <div className="flex flex-col gap-2 justify-start items-start flex-1">
                        <h4 className="text-lg lg:text-xl font-poppins font-semibold leading-[28px] text-[#582591]">
                          Investment Banker
                        </h4>
                        <p className="text-sm lg:text-base font-poppins font-normal leading-[22px] text-[#53535c]">
                          Ensuring alignment with your goals, our investment bankers review terms and negotiate.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
};

export default ServicesSection;