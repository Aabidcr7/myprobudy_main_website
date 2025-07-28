import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-dark">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
        <div className="py-12 lg:py-15">
          <div className="flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-0">
            {/* Main Content Container */}
            <div className="w-full lg:w-[58%] mr-0 lg:mr-[22px]">
              <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0 w-full">
                
                {/* Brand Section */}
                <div className="w-full lg:w-[20%]">
                  <div className="flex flex-col gap-4 lg:gap-[22px] justify-center items-start">
                    <div className="flex flex-col gap-3 lg:gap-4 justify-start items-start w-full">
                      <img 
                        src="/images/img_footer_logo.png" 
                        alt="MyPitchDeck Footer Logo" 
                        className="w-12 lg:w-14 h-12 lg:h-14"
                      />
                      <p className="text-sm lg:text-[15px] font-inter font-normal leading-[22px] text-white">
                        Raise Funds like a PRO <br />with your ProBuddy
                      </p>
                    </div>
                    
                    {/* Social Media Links */}
                    <div className="flex flex-row gap-3 lg:gap-4 justify-start items-center">
                      <img 
                        src="/images/img_link.svg" 
                        alt="Social Link 1" 
                        className="w-6 lg:w-[26px] h-6 lg:h-7"
                      />
                      <img 
                        src="/images/img_link_light_blue_800.svg" 
                        alt="Social Link 2" 
                        className="w-5 lg:w-5 h-6 lg:h-7"
                      />
                      <img 
                        src="/images/img_link_pink_500.svg" 
                        alt="Social Link 3" 
                        className="w-5 lg:w-5 h-6 lg:h-7"
                      />
                    </div>
                  </div>
                </div>

                {/* Footer Links */}
                <div className="w-full lg:w-[32%] flex flex-col sm:flex-row lg:flex-row justify-between items-start gap-8 lg:gap-0">
                  
                  {/* Services Column */}
                  <div className="w-full sm:w-[48%] lg:w-[36%]">
                    <div className="flex flex-col gap-3 lg:gap-3 justify-start items-start">
                      <h3 className="text-base lg:text-[18px] font-inter font-medium leading-[23px] text-white">
                        Services
                      </h3>
                      <ul className="flex flex-col gap-3 lg:gap-[14px] justify-start items-start">
                        <li>
                          <a 
                            href="#" 
                            className="text-sm lg:text-[14px] font-inter font-normal leading-[18px] text-white hover:text-primary-orange-1 transition-colors duration-200"
                          >
                            Debt Funding
                          </a>
                        </li>
                        <li>
                          <a 
                            href="#" 
                            className="text-sm lg:text-[14px] font-inter font-normal leading-[18px] text-white hover:text-primary-orange-1 transition-colors duration-200"
                          >
                            Grants
                          </a>
                        </li>
                        <li>
                          <a 
                            href="#" 
                            className="text-sm lg:text-[14px] font-inter font-normal leading-[18px] text-white hover:text-primary-orange-1 transition-colors duration-200"
                          >
                            Equity Funding
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Explore More Column */}
                  <div className="w-full sm:w-[48%] lg:w-[36%]">
                    <div className="flex flex-col gap-3 lg:gap-3 justify-start items-start">
                      <h3 className="text-base lg:text-[18px] font-inter font-medium leading-[23px] text-white">
                        Explore More
                      </h3>
                      <ul className="flex flex-col gap-3 lg:gap-[14px] justify-start items-start">
                        <li>
                          <a 
                            href="#" 
                            className="text-sm lg:text-[14px] font-inter font-normal leading-[18px] text-white hover:text-primary-orange-1 transition-colors duration-200"
                          >
                            Investor
                          </a>
                        </li>
                        <li>
                          <a 
                            href="#" 
                            className="text-sm lg:text-[14px] font-inter font-normal leading-[18px] text-white hover:text-primary-orange-1 transition-colors duration-200"
                          >
                            Partners
                          </a>
                        </li>
                        <li>
                          <a 
                            href="#" 
                            className="text-sm lg:text-[14px] font-inter font-normal leading-[18px] text-white hover:text-primary-orange-1 transition-colors duration-200"
                          >
                            Portfolio
                          </a>
                        </li>
                        <li>
                          <a 
                            href="#" 
                            className="text-sm lg:text-[14px] font-inter font-normal leading-[18px] text-white hover:text-primary-orange-1 transition-colors duration-200"
                          >
                            Grants AI Agent
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Company Column */}
                  <div className="w-full sm:w-full lg:w-auto flex justify-center lg:justify-start">
                    <div className="flex flex-col gap-3 lg:gap-3 justify-start items-center lg:items-start">
                      <h3 className="text-base lg:text-[18px] font-inter font-medium leading-[23px] text-white">
                        Company
                      </h3>
                      <ul className="flex flex-col justify-start items-start">
                        <li>
                          <a 
                            href="#" 
                            className="text-sm lg:text-[14px] font-inter font-normal leading-[19px] text-white hover:text-primary-orange-1 transition-colors duration-200"
                          >
                            Home
                          </a>
                        </li>
                        <li className="mt-3 lg:mt-[14px]">
                          <a 
                            href="#" 
                            className="text-sm lg:text-[14px] font-inter font-normal leading-[18px] text-white hover:text-primary-orange-1 transition-colors duration-200"
                          >
                            About us
                          </a>
                        </li>
                        <li className="mt-3 lg:mt-[14px]">
                          <a 
                            href="#" 
                            className="text-sm lg:text-[14px] font-inter font-normal leading-[18px] text-white hover:text-primary-orange-1 transition-colors duration-200"
                          >
                            Blogs
                          </a>
                        </li>
                        <li className="mt-3 lg:mt-[14px]">
                          <a 
                            href="#" 
                            className="text-sm lg:text-[14px] font-inter font-normal leading-[18px] text-white hover:text-primary-orange-1 transition-colors duration-200"
                          >
                            Careers
                          </a>
                        </li>
                        <li className="mt-3 lg:mt-[14px]">
                          <a 
                            href="#" 
                            className="text-sm lg:text-[14px] font-inter font-normal leading-[18px] text-white hover:text-primary-orange-1 transition-colors duration-200"
                          >
                            Contact
                          </a>
                        </li>
                        <li className="mt-3 lg:mt-[14px]">
                          <a 
                            href="#" 
                            className="text-sm lg:text-[14px] font-inter font-normal leading-[18px] text-white hover:text-primary-orange-1 transition-colors duration-200"
                          >
                            Privacy Policy
                          </a>
                        </li>
                        <li className="mt-3 lg:mt-[14px]">
                          <a 
                            href="#" 
                            className="text-sm lg:text-[14px] font-inter font-normal leading-[22px] text-white hover:text-primary-orange-1 transition-colors duration-200"
                          >
                            Terms &
                          </a>
                        </li>
                        <li className="mt-2 lg:mt-[8px]">
                          <a 
                            href="#" 
                            className="text-sm lg:text-[14px] font-inter font-normal leading-[22px] text-white hover:text-primary-orange-1 transition-colors duration-200"
                          >
                            Conditions
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-[1px] bg-gray mt-12 lg:mt-[70px]"></div>

          {/* Copyright */}
          <div className="flex flex-row justify-center items-center w-full mt-3 lg:mt-3">
            <p className="text-sm lg:text-[14px] font-inter font-normal leading-[18px] text-center text-white">
              Copyright © MyProBuddy. 2025. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;