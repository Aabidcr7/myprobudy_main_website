import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../../components/common/Header';
import { Typewriter } from 'react-simple-typewriter';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
import EditText from '../../components/ui/EditText';
import RatingBar from '../../components/ui/RatingBar';

const Home = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: ''
  });
  const [typingDone, setTypingDone] = useState(() => {
    // Persist typingDone across reloads (optional)
    if (typeof window !== 'undefined') {
      return window.sessionStorage.getItem('mpb_typingDone') === 'true';
    }
    return false;
  });
  const headingText = "Every 2 minutes, a founder is on a call with our experts.";

  useEffect(() => {
    if (typingDone && typeof window !== 'undefined') {
      window.sessionStorage.setItem('mpb_typingDone', 'true');
    }
  }, [typingDone]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="w-full bg-main overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full bg-main">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
          <div className="flex flex-col gap-4 lg:gap-4 justify-start items-center py-12 lg:py-12">
            {/* Main Heading */}
            <h1 
              className="text-[22px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-poppins font-semibold leading-[33px] sm:leading-[48px] md:leading-[57px] lg:leading-[66px] text-center"
              data-aos="fade-up"
            >
              <span className="text-primary-purple-2" style={{ color: '#5d248f' }}>Raise Funds Like a </span>
              <span className="text-[#fa4300]">Pro</span>
            </h1>
            
            {/* Hero Image */}
<div className="w-full lg:w-[90%] mt-4 lg:mt-6" data-aos="zoom-in">
  <img 
    src="/images/img_bihghvxzajuegff.png" 
    alt="Fundraising Platform Hero" 
    className="w-full h-[420px] lg:h-[600px] object-cover"
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

      {/* Main Content Container - Better Organization */}
      <main className="w-full bg-main">
        
        {/* Statistics & Social Proof Section */}
        <section className="w-full border-b border-gray-100">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
            <div className="flex flex-col lg:flex-row justify-center items-center py-20 lg:py-24 gap-12 lg:gap-16" data-aos="fade-up" data-aos-delay="100">
              
              {/* Left Content - Social Proof */}
              <div className="w-full lg:w-[60%] flex flex-col justify-start items-center">
                <div className="w-full lg:w-[86%] mb-8 lg:mb-12">
                  {/* Testimonial Text - Better Organized */}
                  <div className="text-center lg:text-left mb-8">
                    <h2 className="text-[22px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-poppins font-semibold leading-[33px] sm:leading-[48px] md:leading-[57px] lg:leading-[66px] min-h-[66px]" style={{ color: '#5d248f', whiteSpace: 'pre-line' }}>
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

        {/* Services & Connection Section */}
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

        {/* Value Proposition Section */}
        <section className="w-full bg-white border-b border-gray-100">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
            <div className="flex flex-col gap-16 lg:gap-20 justify-start items-center py-20 lg:py-28">
              
              {/* Section Header */}
              <div className="text-center max-w-4xl">
<h2 className="text-[26px] sm:text-[38px] md:text-[46px] lg:text-[50px] font-poppins font-medium leading-[38px] sm:leading-[57px] md:leading-[68px] lg:leading-[74px] mb-6" style={{ letterSpacing: '-2px' }}>
  <span className="text-primary-purple-2" style={{ color: '#5d248f' }}>Built for</span>
  <span className="text-[#fc5109]"> Founders, </span>
  <span className="text-primary-purple-2" style={{ color: '#5d248f' }}>Backed by the</span>
  <span className="text-[#fc5109]"> Best</span>
</h2>
              </div>

              {/* Three Column Layout - Better Organization */}
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 justify-center items-stretch w-full max-w-6xl" data-aos="fade-up" data-aos-delay="0">
                
                {/* Column 1 - Personalized Support */}
                <div className="w-full lg:w-1/3 flex flex-col gap-6 justify-start items-center" data-aos="fade-down" data-aos-delay="0">
                  <div className="w-full h-[250px] overflow-hidden rounded-3xl">
                    <img 
                      src="/images/img_image_different.png" 
                      alt="We work with you" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-8 justify-between items-start w-full bg-primary-purple-2 rounded-3xl p-8 flex-1">
                    <div>
                      <h3 className="text-[22px] sm:text-[26px] lg:text-[28px] font-poppins font-semibold leading-[28px] sm:leading-[32px] lg:leading-[36px] text-white mb-4" style={{ letterSpacing: '-1px' }}>
                        We work With You Until You Raise Capital
                      </h3>
                      <p className="text-base font-poppins font-normal leading-[24px] text-[#f1f5f9]">
                        Get a customised action plan to become investible
                      </p>
                    </div>
                  </div>
                </div>

                {/* Column 2 - Success Focus */}
                <div className="w-full lg:w-1/3 relative" data-aos="fade-up" data-aos-delay="0">
                  <div className="w-full h-full min-h-[500px] rounded-3xl overflow-hidden">
                    <img 
                      src="/images/img_thumbs_up_from_lab.png" 
                      alt="Become the founder investors cannot ignore" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-3xl flex flex-col justify-between p-8">
                      <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-poppins font-semibold leading-[28px] sm:leading-[30px] lg:leading-[32px] text-white" style={{ letterSpacing: '-1px' }}>
                        Become the founder investors cannot ignore.
                      </h3>
                      <p className="text-base font-poppins font-normal leading-[24px] text-[#f1f5f9]">
                        Our fundraising approach is built around your success, operating on a contingency basis with a 3–5% success fee.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Column 3 - Network Access */}
                <div className="w-full lg:w-1/3 flex flex-col gap-6 justify-start items-center" data-aos="fade-down" data-aos-delay="0">
                  <div className="flex flex-col gap-8 justify-between items-start w-full bg-[#ff5216] rounded-3xl p-8 flex-1">
                    <div>
                      <p className="text-base font-poppins font-normal leading-[24px] text-white mb-6">
                        We have built what founders need most a trusted mix of VCs, angels, HNIs, and family offices.
                      </p>
                      <h3 className="text-[22px] sm:text-[26px] lg:text-[28px] font-poppins font-semibold leading-[28px] sm:leading-[32px] lg:leading-[36px] text-white" style={{ letterSpacing: '-1px' }}>
                        558K+ Global Investor Network
                      </h3>
                    </div>
                  </div>
                  <div className="w-full h-[250px] overflow-hidden rounded-3xl">
                    <img 
                      src="/images/img_image_lab_technician.png" 
                      alt="Global Investor Network" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full bg-main" data-aos="fade-up" data-aos-delay="0">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
            <div className="flex flex-col gap-12 lg:gap-[52px] justify-start items-center py-16 lg:py-[138px]">
              
              {/* Section Header */}
              <h2 className="text-[26px] sm:text-[38px] md:text-[46px] lg:text-[50px] font-poppins font-medium leading-[38px] sm:leading-[57px] md:leading-[68px] lg:leading-[74px] mb-6" style={{ letterSpacing: '-2px' }}>
                <span className="text-primary-purple-2" style={{ color: '#5d248f' }}>What </span>
                <span className="text-[#fc5109]">Entrepreneurs</span>
                <span className="text-primary-purple-2" style={{ color: '#5d248f' }}> Say</span>
              </h2>

              {/* Testimonials Grid */}
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 justify-center items-center w-full">
                
                {/* Column 1 */}
                <div className="w-full lg:w-[540px] flex flex-col gap-4 lg:gap-[18px] justify-start items-center" style={{ minWidth: '420px', maxWidth: '600px', width: '100%' }}>
                  <div className="flex flex-col gap-5 lg:gap-6 justify-start items-start w-full bg-[#fafafa] rounded-[18px] p-5 lg:p-[26px]" style={{ width: '420px', height: '269.93px' }}>
                    <div className="flex flex-row gap-4 lg:gap-[18px] justify-start items-center w-full">
                      <img 
                        src="/images/img_image_ubwbbtb.png" 
                        alt="Surender Profile" 
                        className="w-[58px] h-[58px] rounded-[28px]"
                      />
                      <div className="flex flex-col gap-0.5 lg:gap-0.5 justify-start items-start flex-1">
                        <h4 className="text-lg lg:text-xl font-poppins font-normal leading-[30px] text-[#292929]">
                          Surender
                        </h4>
                        <p className="text-sm lg:text-base font-poppins font-normal leading-[24px] text-[#636363]">
                          Hawky. ai
                        </p>
                      </div>
                    </div>
                    <p className="text-xs lg:text-xs font-poppins font-normal leading-[18px] text-[#636363]">
                      Raising funds is never easy, but with MyProBuddy, the <br />process became streamlined and outcome-driven. <br />Thanks to their focused approach and strong investor <br />network, we successfully closed our equity round and <br />are now positioned for accelerated growth at <br />Hawky.ai.
                    </p>
                    <RatingBar rating={5} readonly size="small" />
                  </div>
                  
                  <div className="flex flex-col gap-5 lg:gap-6 justify-start items-start w-full bg-[#fafafa] rounded-[18px] p-5 lg:p-[26px]">
                    <div className="flex flex-row gap-4 lg:gap-[18px] justify-start items-center w-full">
                      <img 
                        src="/images/img_image_w5ozrsg.png" 
                        alt="Arun Kumar Profile" 
                        className="w-[58px] h-[58px] rounded-[28px]"
                      />
                      <div className="flex flex-col gap-0.5 lg:gap-0.5 justify-start items-start flex-1">
                        <h4 className="text-lg lg:text-xl font-poppins font-normal leading-[30px] text-[#292929]">
                          Arun Kumar
                        </h4>
                        <p className="text-sm lg:text-base font-poppins font-normal leading-[24px] text-[#636363]">
                          Founder, EV91
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-center w-full">
                      <p className="text-xs lg:text-xs font-poppins font-normal leading-[18px] text-[#636363]">
                        Navigating the regulatory landscape and attracting
                      </p>
                      <p className="text-xs lg:text-xs font-poppins font-normal leading-[18px] text-[#636363] -mt-0.5 lg:mt-[-2px]">
                          investors in the electric vehicle industry is challenging. <br />MyProBuddy&apos;s in-depth knowledge of the sector and <br />their ability to connect us with strategic investors <br />were crucial to our success.
                        </p>
                    </div>
                    <RatingBar rating={5} readonly size="small" />
                  </div>
                </div>

                {/* Column 2 */}
                <div className="w-full lg:w-[540px] flex flex-col gap-4 lg:gap-[18px] justify-start items-center mb-0 lg:mb-4" style={{ minWidth: '420px', maxWidth: '600px', width: '100%' }}>
                  <div className="flex flex-col gap-5 lg:gap-6 justify-start items-start w-full bg-[#fafafa] rounded-[18px] p-5 lg:p-[26px]">
                    <div className="flex flex-row gap-4 lg:gap-[18px] justify-start items-center w-full">
                      <img 
                        src="/images/img_image_2hldso2.png" 
                        alt="Emin Profile" 
                        className="w-[58px] h-[58px] rounded-[28px]"
                      />
                      <div className="flex flex-col gap-0.5 lg:gap-0.5 justify-start items-start flex-1">
                        <h4 className="text-lg lg:text-xl font-poppins font-normal leading-[30px] text-[#292929]">
                          Emin
                        </h4>
                        <p className="text-sm lg:text-base font-poppins font-normal leading-[24px] text-[#636363]">
                          Founder, Job Corp
                        </p>
                      </div>
                    </div>
                    <p className="text-xs lg:text-xs font-poppins font-normal leading-[18px] text-[#636363]">
                      MyProBuddy did not just help us raise funds — they <br />helped us think bigger. What I appreciated most was <br />their speed, precision, and ability to simplify the <br />complex. With their guidance, we secured the capital <br />we needed and walked away with a stronger <br />business foundation.
                    </p>
                    <RatingBar rating={5} readonly size="small" />
                  </div>
                  
                  <div className="flex flex-col gap-5 lg:gap-[22px] justify-start items-start w-full bg-[#fafafa] rounded-[18px] p-5 lg:p-[26px]">
                    <div className="flex flex-row gap-4 lg:gap-[18px] justify-start items-center w-full">
                      <img 
                        src="/images/img_image_yc550ga.png" 
                        alt="Praveen Profile" 
                        className="w-[58px] h-[58px] rounded-[28px]"
                      />
                      <div className="flex flex-col gap-0.5 lg:gap-0.5 justify-start items-start flex-1">
                        <h4 className="text-lg lg:text-xl font-poppins font-normal leading-[30px] text-[#292929]">
                          Praveen
                        </h4>
                        <p className="text-sm lg:text-base font-poppins font-normal leading-[24px] text-[#636363]">
                          Phosphene Ai
                        </p>
                      </div>
                    </div>
                    <p className="text-xs lg:text-xs font-poppins font-normal leading-[18px] text-[#636363]">
                      MyProBuddy&apos;s expertise in the AI and technology sector was <br />instrumental in securing our funding round. Their guidance <br />throughout the process, from investor relations to deal <br />negotiations, was invaluable.
                    </p>
                    <RatingBar rating={5} readonly size="small" />
                  </div>
                </div>

                {/* Column 3 */}
                <div className="w-full lg:w-[540px] flex flex-col gap-4 lg:gap-[18px] justify-start items-center" style={{ minWidth: '420px', maxWidth: '600px', width: '100%' }}>
                  <div className="flex flex-col gap-5 lg:gap-6 justify-start items-start w-full bg-[#fafafa] rounded-[18px] p-5 lg:p-[26px]">
                    <div className="flex flex-row gap-4 lg:gap-[18px] justify-start items-center w-full">
                      <img 
                        src="/images/img_image_etu0ian.png" 
                        alt="Ashwin Profile" 
                        className="w-[58px] h-[58px] rounded-[28px]"
                      />
                      <div className="flex flex-col gap-0.5 lg:gap-0.5 justify-start items-start flex-1">
                        <h4 className="text-lg lg:text-xl font-poppins font-normal leading-[30px] text-[#292929]">
                          Ashwin
                        </h4>
                        <p className="text-sm lg:text-base font-poppins font-normal leading-[24px] text-[#636363]">
                          Co-Founder, ICM
                        </p>
                      </div>
                    </div>
                    <p className="text-xs lg:text-xs font-poppins font-normal leading-[18px] text-[#636363]">
  &quot;We struggled to demonstrate our scalability. My Pro <br />
  Buddy helped us highlight our traction in a specific <br />
  region and our plan for expansion, securing a seed <br />
  round from a VC firm focused on emerging markets. <br />
  Their support truly changed everything. We’re <br />
  grateful for their guidance.
  Excited for what lies ahead.&quot;
</p>

                    <RatingBar rating={5} readonly size="small" />
                  </div>
                  
                  <div className="flex flex-col gap-5 lg:gap-[22px] justify-start items-start w-full bg-[#fafafa] rounded-[18px] p-5 lg:p-[26px]">
                    <div className="flex flex-row gap-4 lg:gap-[18px] justify-start items-center w-full">
                      <img 
                        src="/images/img_image_o94obkq.png" 
                        alt="Vlad Vtoc Profile" 
                        className="w-[58px] h-[58px] rounded-[28px]"
                      />
                      <div className="flex flex-col gap-0.5 lg:gap-0.5 justify-start items-start flex-1">
                        <h4 className="text-lg lg:text-xl font-poppins font-normal leading-[30px] text-[#292929]">
                          Vlad Vtoc
                        </h4>
                        <p className="text-sm lg:text-base font-poppins font-normal leading-[24px] text-[#636363]">
                          Founder, MAIA Biotech
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start w-full">
                      <p className="text-xs lg:text-xs font-poppins font-normal leading-[18px] text-[#636363]">
                        The services and team are quick, professional, and
                      </p>
                      <p className="text-xs lg:text-xs font-poppins font-normal leading-[18px] text-[#636363]">
                        effective. We were able to generate good investor <br />leads through MPB. I am very satisfied with the <br />customer service. Strongly recommend their services <br />to startups looking to raise.
                      </p>
                    </div>
                    <RatingBar rating={5} readonly size="small" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Funded Section */}
        <section className="w-full bg-main">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
            <div className="flex flex-col gap-16 lg:gap-20 justify-start items-center py-16 lg:py-[58px]">
              
              {/* Section Header */}
              <h2 className="text-[26px] sm:text-[38px] md:text-[46px] lg:text-[50px] font-poppins font-medium leading-[38px] sm:leading-[57px] md:leading-[68px] lg:leading-[74px] mb-6" style={{ letterSpacing: '-2px' }}>
                <span className="text-primary-purple-2" style={{ color: '#5d248f' }}>Get</span>
                <span className="text-[#f46d19]"> </span>
                <span className="text-[#fc5109]">Funded</span>
                <span className="text-[#f46d19]"> </span>
                <span className="text-primary-purple-2" style={{ color: '#5d248f' }}>Without Giving Up</span>
                <span className="text-[#f46d19]"> </span>
                <span className="text-[#fc5109]">Equity</span>
              </h2>

              {/* Three Column Layout */}
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full">
                
                {/* Column 1 - No Debt */}
                <div className="w-full lg:w-[346px] flex flex-col gap-6 lg:gap-7 justify-center items-center shadow-[-20px_10px_48px_#0f152214] bg-main rounded-[26px] p-6 lg:p-8">
                  <div className="flex flex-col gap-3 lg:gap-4 justify-start items-start w-full">
                    <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-poppins font-bold leading-[28px] sm:leading-[33px] lg:leading-[39px] text-[#582591]">
                      No debt. No <br />dilution. Just <br />growth.
                    </h3>
                    <p className="text-xs lg:text-xs font-poppins font-normal leading-[19px] text-[#52525b]">
                      No matter what industry you are in, if your idea <br />creates value or impact, there is likely a grant <br />out there for you.
                    </p>
                  </div>
                  <img 
                    src="/images/img_art_social_media.svg" 
                    alt="Social Media Art" 
                    className="w-full flex-1"
                  />
                </div>

                {/* Column 2 - Grants */}
                <div className="w-full lg:w-[346px] flex flex-col gap-6 lg:gap-8 justify-center items-start bg-[#f9631c] rounded-[26px] p-6 lg:p-8 mb-12 lg:mb-[68px]">
                  <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-jakarta font-extrabold leading-[28px] sm:leading-[33px] lg:leading-[39px] text-white ml-2 lg:ml-3">
                    Explore Top <br />Grants & Schemes
                  </h3>
                  
                  <div className="flex flex-col justify-start items-center w-full mr-3 lg:mr-4 ml-3 lg:ml-4">
                    <div className="flex flex-col justify-start items-center w-full">
                      <div className="flex flex-row justify-between items-center w-full ml-2 lg:ml-3">
                        <img 
                          src="/images/10.png" 
                          alt="Seed Fund Logo" 
                          className="w-[74px] h-[56px]"
                        />
                        <img 
                          src="/images/img_item_nabventures.png" 
                          alt="NAB Ventures Logo" 
                           className="w-[74px] h-[56px]"
                        />
                        <img 
                          src="/images/11.png" 
                          alt="InSpace Logo" 
                          className="w-[74px] h-[56px]"
                        />
                        <img 
                          src="/images/12.png" 
                          alt="InSpace Logo" 
                          className="w-[74px] h-[56px]"
                        />
                      </div>
                      
                      <div className="flex flex-row gap-6 lg:gap-[30px] justify-center items-center mt-6 lg:mt-[34px]">
                        <img 
                          src="/images/img_item_dst_nidhi.png" 
                          alt="DST Nidhi Logo" 
                         className="w-[74px] h-[56px]"
                        />
                        <img 
                          src="/images/img_item_ifci_venture.png" 
                          alt="IFCI Venture Logo" 
                          className="w-[74px] h-[56px]"
                        />
                         <img 
                          src="/images/13.png" 
                          alt="DST Nidhi Logo" 
                          className="w-[74px] h-[56px]"
                        />
                        <img 
                            src="/images/img_item_niif_f.png" 
                          alt="NIIF Logo" 
                          className="w-[61px] lg:w-[76px] h-[26px] lg:h-[32px]"
                        />
                      </div>
                      
                      <div className="flex flex-row gap-6 lg:gap-[30px] justify-center items-center mt-3 lg:mt-4 p-2">
                        <img 
                          src="/images/img_item_niif_f.png" 
                          alt="NIIF Logo" 
                          className="w-[61px] lg:w-[76px] h-[26px] lg:h-[32px]"
                        />
                        <img 
                          src="/images/16.png" 
                          alt="CGTMSE Logo" 
                          className="w-[80px] lg:w-[100px] h-[53px] lg:h-[66px]"
                        />
                        <img 
                          src="/images/17.png" 
                          alt="CGTMSE Logo" 
                          className="w-[80px] lg:w-[100px] h-[53px] lg:h-[66px]"
                        />
                        <img 
                          src="/images/18.png" 
                          alt="CGTMSE Logo" 
                          className="w-[80px] lg:w-[100px] h-[53px] lg:h-[66px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 3 - Know Your Grants */}
                <div className="w-full lg:w-[520px] flex flex-col gap-6 lg:gap-8 justify-start items-center bg-[#582591] rounded-[26px] p-3 lg:p-3 mb-4 lg:mb-[22px]">
                  <div className="flex flex-col gap-3 lg:gap-[14px] justify-center items-start w-full lg:w-[86%] mt-6 lg:mt-[34px]">
                    <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-jakarta font-extrabold leading-[33px] sm:leading-[38px] lg:leading-[44px] text-white">
                      Know Your <br />Grants for free
                    </h3>
                    <p className="text-sm lg:text-base font-poppins font-normal leading-[25px] text-white">
                      You have the right to know and access free <br />government grants that can benefit you.
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
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accelerators Section */}
        <section className="w-full bg-main">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row justify-center items-start py-16 lg:py-[164px] gap-8 lg:gap-0">
              
              {/* Left Content */}
              <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8 justify-start items-start">
                <div className="flex flex-col gap-2 lg:gap-3 justify-start items-start w-full">
                  <h2 className="text-[26px] sm:text-[38px] md:text-[46px] lg:text-[50px] font-poppins font-medium leading-[38px] sm:leading-[57px] md:leading-[68px] lg:leading-[74px] mb-6" style={{ letterSpacing: '-2px' }}>
                    <span className="text-primary-purple-2" style={{ color: '#5d248f' }}>Accelerating Growth <br />through</span>
                    <span className="text-[#f46d19]"> </span>
                    <span className="text-[#fc5109]">Incubators</span>
                    <span className="text-[#f46d19]"> </span>
                    <span className="text-primary-purple-2" style={{ color: '#5d248f' }}>&</span>
                    <span className="text-[#f46d19]"> <br /></span>
                    <span className="text-[#fc5109]">Accelerators</span>
                  </h2>
                  <p className="text-lg lg:text-xl font-poppins font-normal leading-[26px] lg:leading-[32px] text-[#8a8a8a]">
                    We support incubation centers with our investor network <br />and empower startups through collaborative workshops.
                  </p>
                </div>
                
                {/* Statistics */}
                <div className="flex flex-col justify-start items-center w-full">
                  <div className="relative w-full h-[133px] lg:h-[166px]">
                    <div className="flex flex-col justify-start items-end w-full">
                      <div className="flex flex-row gap-12 lg:gap-[60px] w-full items-start">
                        <div className="flex flex-col items-start">
                          <h3 className="text-[27px] sm:text-[40px] lg:text-[54px] font-poppins font-bold leading-[40px] sm:leading-[60px] lg:leading-[81px] text-primary-purple-2" style={{ color: '#5d248f' }}>
                           25+
                          </h3>
                          <p className="text-sm lg:text-base font-poppins font-medium leading-[24px] text-[#3d495b] w-[136px] lg:w-[170px]">
                           Trusted accelerators <br />& incubators
                          </p>
                        </div>
                        <div className="flex flex-col items-start">
                          <h3 className="text-[27px] sm:text-[40px] lg:text-[54px] font-poppins font-bold leading-[40px] sm:leading-[60px] lg:leading-[81px] text-primary-purple-2" style={{ color: '#5d248f' }}>
                          200+
                          </h3>
                          <p className="text-sm lg:text-base font-poppins font-medium leading-[24px] text-[#3d495b]">
                            NIRF standards & IIC accredited<br />Workshops
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Vertical Line */}
                    <div className="absolute w-[1px] h-[112px] lg:h-[140px] bg-[linear-gradient(180deg,#dee5ed00_0%,_#dee5ed_100%)] ml-[176px] lg:ml-[220px] mt-[21px] lg:mt-[26px]"></div>
                  </div>
                  
                  {/* Rating Section */}
                  <div className="flex flex-col lg:flex-row justify-center items-end w-full border-t border-solid border-[#dde5ed] pt-2 lg:pt-1">
                    <RatingBar rating={5} readonly size="medium" />
                    <div className="flex flex-row justify-center items-center flex-1 mt-4 lg:mt-6">
                      <h4 className="text-sm lg:text-base font-inter font-semibold leading-[20px] text-[#1c1c1c]">
                        4.7
                      </h4>
                      <p className="text-xs lg:text-sm font-poppins font-medium leading-[21px] text-[#0c0c0c] ml-1">
                        Workshops that consistently deliver quality and impact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-5 justify-start items-start">
                <div className="flex flex-row justify-start items-center w-full relative">
                  <div 
                    className="flex flex-row justify-between items-center w-full p-4 lg:p-5 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/images/img_vh4mvmnrew2jnul2lxms7lmp8gpng.png')" }}
                  >
                    <img 
                      src="/images/img_arrow_left.svg" 
                      alt="Previous" 
                      className="w-8 lg:w-10 h-8 lg:h-10 rounded-[20px] mt-24 lg:mt-[120px] mb-24 lg:mb-[120px]"
                    />
                    <img 
                      src="/images/img_overlay.svg" 
                      alt="Overlay" 
                      className="w-[72px] lg:w-[90px] h-[24px] lg:h-[30px] rounded-[14px] self-end"
                    />
                    <img 
                      src="/images/img_arrow_right.svg" 
                      alt="Next" 
                      className="w-8 lg:w-10 h-8 lg:h-10 rounded-[20px]"
                    />
                  </div>
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

        {/* Recognition Logos Section */}
        <section className="w-full bg-main">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
            <div className="flex flex-row justify-center items-center py-16 lg:py-[90px]">
              <div className="flex flex-row justify-center items-center mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center justify-center">
                  <img 
                    src="/images/20.png" 
                    alt="IIC Logo" 
                    className="w-[128px] lg:w-[160px] h-[66px] lg:h-[82px] mt-2 lg:mt-3 mb-2 lg:mb-3"
                  />
                  <img 
                    src="/images/21.png" 
                    alt="Ministry Logo" 
                    className="w-[114px] lg:w-[142px] h-[69px] lg:h-[86px] mt-2 lg:mt-[10px] mb-2 lg:mb-[10px]"
                  />
                  <img 
                    src="/images/22.png" 
                    alt="MOE Logo" 
                    className="w-[134px] lg:w-[168px] h-[58px] lg:h-[72px] mt-3 lg:mt-4 mb-3 lg:mb-4"
                  />
                  <img 
                    src="/images/23.png" 
                    alt="EDII Logo" 
                    className="w-[133px] lg:w-[166px] h-[85px] lg:h-[106px]"
                  />
                  <img 
                    src="/images/24.png" 
                    alt="AICTE Logo" 
                    className="w-[130px] lg:w-[162px] h-[85px] lg:h-[106px]"
                  />
                  <img 
                    src="/images/25.png" 
                    alt="Additional Logo" 
                    className="w-[114px] lg:w-[142px] h-[85px] lg:h-[106px]"
                  />
                   <img 
                    src="/images/26.png" 
                    alt="Additional Logo" 
                    className="w-[114px] lg:w-[142px] h-[85px] lg:h-[106px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recognition Section */}
        <section className="w-full bg-main">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
            <div className="flex flex-col gap-12 lg:gap-14 justify-start items-center py-16 lg:py-20">
              
              {/* Section Header */}
              <div className="flex flex-col gap-1 lg:gap-[6px] justify-start items-center px-4 lg:px-14">
                <h2 className="text-[26px] sm:text-[38px] md:text-[46px] lg:text-[50px] font-poppins font-medium leading-[38px] sm:leading-[57px] md:leading-[68px] lg:leading-[74px] mb-6" style={{ letterSpacing: '-2px' }}>
                  <span className="text-primary-purple-2" style={{ color: '#5d248f' }}>Recognized for </span>
                  <span className="text-[#fc5109]">Redefining</span>
                  <span className="text-[#f46d18]" style={{ color: '#5d248f' }}> Possiblities</span>
                </h2>
                <p className="text-lg lg:text-xl font-poppins font-medium leading-[30px] text-center text-primary">
                  Our awards reflect the trust and transformation we deliver to founders, institutions, and incubators alike.
                </p>
              </div>

              {/* Recognition Logos */}
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center justify-center">
                <img 
                  src="/images/img_item_internet.png" 
                  alt="Internet Recognition" 
                  className="w-[158px] lg:w-[198px] h-[32px] lg:h-10 mt-6 lg:mt-[29px] mb-6 lg:mb-[29px]"
                />
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full lg:w-[82%] ml-8 lg:ml-16">
                  <img 
                    src="/images/img_item_your_story.png" 
                    alt="Your Story Recognition" 
                    className="w-[80px] lg:w-[100px] h-[30px] lg:h-[38px] mt-6 lg:mt-7 mb-6 lg:mb-7"
                  />
                  <img 
                    src="/images/img_item_passion_vista.png" 
                    alt="Passion Vista Recognition" 
                    className="w-[160px] lg:w-[200px] h-[54px] lg:h-[68px] mt-3 lg:mt-[14px] mb-3 lg:mb-[14px]"
                  />
                  <img 
                    src="/images/img_item_innsurge.png" 
                    alt="Innsurge Recognition" 
                    className="w-[162px] lg:w-[202px] h-[40px] lg:h-[50px] mt-4 lg:mt-[22px] mb-4 lg:mb-[22px]"
                  />
                  <img 
                    src="/images/img_item_indian_achiveers.png" 
                    alt="Indian Achievers Recognition" 
                    className="w-[80px] lg:w-[100px] h-[77px] lg:h-[96px]"
                  />
                  <img 
                    src="/images/27.png" 
                    alt="Forbes India Recognition" 
                    className="w-[74px] lg:w-[92px] h-[42px] lg:h-[52px] mt-4 lg:mt-[22px] mb-4 lg:mb-[22px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-main">
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
        </section>

        {/* Expert Mentorship Section */}
        <section className="w-full bg-main">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
            <div className="flex flex-col justify-start items-center py-16 lg:py-20">
              <div className="flex flex-row justify-center items-center w-full">
                <div className="flex flex-col gap-1 lg:gap-[6px] justify-start items-center px-4 lg:px-14">
                  <h2 className="text-[26px] sm:text-[38px] md:text-[46px] lg:text-[50px] font-poppins font-medium leading-[38px] sm:leading-[57px] md:leading-[68px] lg:leading-[74px] mb-6" style={{ letterSpacing: '-2px' }}>
                    <span className="text-primary-purple-2" style={{ color: '#5d248f' }}>Get Expert </span>
                    <span className="text-[#fc5109]">Mentorship</span>
                    <span className="text-primary-purple-2" style={{ color: '#5d248f' }}> with our trusted </span>
                    <span className="text-[#fc5109]">partners</span>
                  </h2>
                  <p className="text-lg lg:text-xl font-poppins font-medium leading-[30px] text-center text-primary mt-2">
                    While you build your product, we make sure you are investible and ready.
                  </p>
                  
                  {/* Partner Logos */}
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center justify-center">
                      <img 
                        src="/images/img_item_rook_u.png" 
                        alt="Rook U Partner" 
                        className="w-[102px] lg:w-[128px] h-[40px] lg:h-[50px] mt-13 lg:mt-[66px]"
                      />
                      <img 
                        src="/images/img_item_realm_rook.png" 
                        alt="Realm Rook Partner" 
                        className="w-[200px] lg:w-[250px] h-[146px] lg:h-[182px]"
                      />
                      <img 
                        src="/images/img_item_prudent_capital.png" 
                        alt="Prudent Capital Partner" 
                        className="w-[206px] lg:w-[258px] h-[61px] lg:h-[76px] mr-8 lg:mr-10 mt-11 lg:mt-[53px]"
                      />
                      <img 
                        src="/images/img_item_parminder.png" 
                        alt="Parminder Partner" 
                        className="w-[86px] lg:w-[108px] h-[93px] lg:h-[116px] ml-8 lg:ml-10 mt-7 lg:mt-[33px]"
                      />
                       <img 
                        src="/images/35.png" 
                        alt="Parminder Partner" 
                        className="w-[86px] lg:w-[108px] h-[93px] lg:h-[116px] ml-8 lg:ml-10 mt-7 lg:mt-[33px]"
                      />
                       <img 
                        src="/images/36.jpg" 
                        alt="Parminder Partner" 
                        className="w-[86px] lg:w-[108px] h-[93px] lg:h-[116px] ml-8 lg:ml-10 mt-7 lg:mt-[33px]"
                      />
                       <img 
                        src="/images/37.png" 
                        alt="Parminder Partner" 
                        className="w-[90px] lg:w-[114px] h-[93px] lg:h-[116px] ml-8 lg:ml-10 mt-7 lg:mt-[33px]"
                      />
                       <img 
                        src="/images/38.png" 
                        alt="Parminder Partner" 
                        className="w-[200px] lg:w-[250px] h-[93px] lg:h-[116px] ml-8 lg:ml-10 mt-7 lg:mt-[33px]"
                      />
                    </div>
                   
                
                </div>
              </div>

 <section className="w-full relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
          </div>
          
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 relative">
            <div className="flex flex-col lg:flex-row justify-between items-center py-20 lg:py-24 gap-12 lg:gap-16">
              
              {/* Left Content - Call to Action */}
              <div className="w-full lg:w-[45%] flex flex-col gap-6 lg:gap-8 justify-start items-start text-center lg:text-left">
                <div className="flex flex-col gap-2 lg:gap-3">
                  <h2 className="text-[26px] sm:text-[38px] md:text-[46px] lg:text-[50px] font-poppins font-medium leading-[38px] sm:leading-[57px] md:leading-[68px] lg:leading-[74px] mb-2 lg:mb-3" style={{ letterSpacing: '-2px' , color: '#5d248f' }} >
                    Let's Make it 
                    <span className="text-[#ff6b35]"> Happen</span>
                  </h2>
                  <p className="text-xl lg:text-2xl font-poppins font-medium leading-[32px] lg:leading-[36px] ">
                    Start your fundraising journey today!
                  </p>
                  <p className="text-base lg:text-lg font-poppins font-normal leading-[26px] lg:leading-[30px] text-white/75 max-w-lg">
                    Join thousands of successful entrepreneurs who have transformed their startups with our expert guidance and investor network.
                  </p>
                </div>

                {/* Success Metrics */}
              </div>

              {/* Right Content - Contact Form */}
              <div className="w-full lg:w-[45%] max-w-md lg:max-w-lg">
                <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
                  <div className="flex flex-col gap-6 lg:gap-8">
                    
                    {/* Form Header */}
                    <div className="text-center">
                      <h3 className="text-2xl lg:text-3xl font-poppins font-bold leading-[36px] text-[#333333] mb-2">
                        Get Started Now
                      </h3>
                      <p className="text-base font-poppins font-normal leading-[24px] text-[#666666]">
                        Fill out the form and we'll get back to you within 24 hours
                      </p>
                    </div>

                    {/* Contact Form - Better Organization */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5 justify-center items-center">
                      
                      {/* Name Fields Row */}
                      <div className="flex flex-col gap-3 justify-start items-start w-full">
                        <label className="text-sm font-poppins font-semibold leading-[18px] text-[#333333] mb-1">
                          Full Name *
                        </label>
                        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-3">
                          <EditText
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-[#fc5109] focus:ring-2 focus:ring-[#fc5109]/20 transition-all"
                            required
                          />
                          <EditText
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-[#fc5109] focus:ring-2 focus:ring-[#fc5109]/20 transition-all"
                            required
                          />
                        </div>
                      </div>

                      {/* Email Field */}
                      <div className="flex flex-col gap-3 justify-start items-start w-full">
                        <label className="text-sm font-poppins font-semibold leading-[18px] text-[#333333]">
                          Business Email *
                        </label>
                        <EditText
                          placeholder="your.email@company.com"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-[#fc5109] focus:ring-2 focus:ring-[#fc5109]/20 transition-all"
                          required
                        />
                      </div>

                      {/* Phone Field */}
                      <div className="flex flex-col gap-3 justify-start items-start w-full">
                        <label className="text-sm font-poppins font-semibold leading-[18px] text-[#333333]">
                          Phone Number *
                        </label>
                        <EditText
                          placeholder="+1 (555) 123-4567"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-[#fc5109] focus:ring-2 focus:ring-[#fc5109]/20 transition-all"
                          required
                        />
                      </div>

                      {/* Company Fields Row */}
                      <div className="flex flex-col sm:flex-row gap-3 justify-between items-start w-full">
                        <div className="flex flex-col gap-3 justify-start items-start w-full">
                          <label className="text-sm font-poppins font-semibold leading-[18px] text-[#333333]">
                            Company Name *
                          </label>
                          <EditText
                            placeholder="Your Company"
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-[#fc5109] focus:ring-2 focus:ring-[#fc5109]/20 transition-all"
                            required
                          />
                        </div>
                        
                        <div className="flex flex-col gap-3 justify-start items-start w-full">
                          <label className="text-sm font-poppins font-semibold leading-[18px] text-[#333333]">
                            Website
                          </label>
                          <EditText
                            placeholder="www.yourcompany.com"
                            type="url"
                            value={formData.website}
                            onChange={(e) => handleInputChange('website', e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-[#fc5109] focus:ring-2 focus:ring-[#fc5109]/20 transition-all"
                          />
                        </div>
                      </div>

                      {/* Submit Button - Enhanced */}
                      <button
                        type="submit"
                        className="w-full text-lg font-poppins font-bold leading-[24px] text-white bg-gradient-to-r from-[#fc5109] to-[#ff6b35] hover:from-[#e04108] hover:to-[#ff5722] rounded-xl px-8 py-4 flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] mt-2"
                      >
                        Start Your Fundraising Journey
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>

                      {/* Trust Indicators */}
                      <div className="flex items-center justify-center gap-4 w-full pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-gray-600">Free Consultation</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-gray-600">No Upfront Fees</span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

              {/* Contact Form Section */}
            </div>
          </div>
        </section>
        
      </main>

      <Footer />
    </div>
  );
};

export default Home;