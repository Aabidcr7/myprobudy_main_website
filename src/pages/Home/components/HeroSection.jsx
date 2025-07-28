import React from 'react';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="w-full bg-main">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
        <div className="flex flex-col gap-4 lg:gap-4 justify-start items-center py-12 lg:py-12">
          {/* Main Heading */}
          <h1
            className="text-[22px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-poppins font-semibold leading-[33px] sm:leading-[48px] md:leading-[57px] lg:leading-[66px] text-center"
            data-aos="fade-up"
          >
            <span className="text-primary-purple-2" style={{ color: '#5d248f' }}>
              Raise Funds Like a{' '}
            </span>
            <span className="text-[#fa4300]">Pro</span>
          </h1>

          {/* Hero Image */}
          <div className="w-full lg:w-[90%] mt-4 lg:mt-6" data-aos="zoom-in">
  <img
    src="/images/img_bihghvxzajuegff.png"
    alt="Fundraising Platform Hero"
    className="w-full h-auto max-h-[90vh] object-cover rounded-lg"
  />
</div>


          {/* CTA Button */}
          <Button
            variant="orange"
            size="large"
            className="mt-6 lg:mt-8 text-lg lg:text-[24px] font-poppins font-bold leading-[28px] text-white bg-[#fd421d] hover:bg-[#fc520c] px-4 lg:px-[14px] py-1 lg:py-1 rounded-[20px] shadow-[0px_30px_30px_#0000000c] transition-all duration-200 transform hover:scale-105 hover:brightness-110"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
