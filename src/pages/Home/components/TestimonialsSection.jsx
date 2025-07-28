import React from 'react';
import RatingBar from '../../../components/ui/RatingBar';

const TestimonialsSection = () => {
  return (
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
  );
};

export default TestimonialsSection;
