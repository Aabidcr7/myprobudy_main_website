import React from 'react';
import RatingBar from '../../../components/ui/RatingBar';

const TestimonialsSection = () => {
  return (
    <section className="w-full bg-main" data-aos="fade-up" data-aos-delay="0">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-[52px] justify-start items-center py-12 md:py-16 lg:py-[138px]">
          {/* Section Header */}
          <h2
            className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-poppins font-medium leading-tight mb-6"
            style={{ letterSpacing: '-1px' }}
          >
            <span className="text-primary-purple-2" style={{ color: '#5d248f' }}>
              What{' '}
            </span>
            <span className="text-[#fc5109]">Entrepreneurs</span>
            <span className="text-primary-purple-2" style={{ color: '#5d248f' }}>
              {' '}
              Say
            </span>
          </h2>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 w-full">
            {/* Column 1 */}
            <div className="flex flex-col gap-4 lg:gap-[18px] w-full">
              <div className="bg-[#fafafa] rounded-[18px] p-5 lg:p-[26px] h-full flex flex-col">
                <div className="flex flex-row gap-4 lg:gap-[18px] justify-start items-center mb-4">
                  <img
                    src="/images/img_image_ubwbbtb.png"
                    alt="Surender Profile"
                    className="w-12 h-12 md:w-[58px] md:h-[58px] rounded-full"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-base md:text-xl font-poppins font-normal text-[#292929]">
                      Surender
                    </h4>
                    <p className="text-sm font-poppins font-normal text-[#636363]">Hawky. ai</p>
                  </div>
                </div>
                <p className="text-xs md:text-sm font-poppins font-normal text-[#636363] mb-4">
                  Raising funds is never easy, but with MyProBuddy, the process became streamlined
                  and outcome-driven. Thanks to their focused approach and strong investor network,
                  we successfully closed our equity round and are now positioned for accelerated
                  growth at Hawky.ai.
                </p>
                <RatingBar rating={5} readonly size="small" className="mt-auto" />
              </div>

              {/* Second card in column 1 */}
              <div className="bg-[#fafafa] rounded-[18px] p-5 lg:p-[26px] h-full flex flex-col">
                <div className="flex flex-row gap-4 lg:gap-[18px] justify-start items-center mb-4">
                  <img
                    src="/images/img_image_w5ozrsg.png"
                    alt="Arun Kumar Profile"
                    className="w-12 h-12 md:w-[58px] md:h-[58px] rounded-full"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-base md:text-xl font-poppins font-normal text-[#292929]">
                      Arun Kumar
                    </h4>
                    <p className="text-sm font-poppins font-normal text-[#636363]">Founder, EV91</p>
                  </div>
                </div>
                <p className="text-xs md:text-sm font-poppins font-normal text-[#636363] mb-4">
                  Navigating the regulatory landscape and attracting investors in the electric
                  vehicle industry is challenging. MyProBuddy&apos;s in-depth knowledge of the
                  sector and their ability to connect us with strategic investors were crucial to
                  our success.
                </p>
                <RatingBar rating={5} readonly size="small" className="mt-auto" />
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4 lg:gap-[18px] w-full">
              <div className="bg-[#fafafa] rounded-[18px] p-5 lg:p-[26px] h-full flex flex-col">
                <div className="flex flex-row gap-4 lg:gap-[18px] justify-start items-center mb-4">
                  <img
                    src="/images/img_image_2hldso2.png"
                    alt="Emin Profile"
                    className="w-12 h-12 md:w-[58px] md:h-[58px] rounded-full"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-base md:text-xl font-poppins font-normal text-[#292929]">
                      Emin
                    </h4>
                    <p className="text-sm font-poppins font-normal text-[#636363]">
                      Founder, Job Corp
                    </p>
                  </div>
                </div>
                <p className="text-xs md:text-sm font-poppins font-normal text-[#636363] mb-4">
                  MyProBuddy did not just help us raise funds — they helped us think bigger. What I
                  appreciated most was their speed, precision, and ability to simplify the complex.
                  With their guidance, we secured the capital we needed and walked away with a
                  stronger business foundation.
                </p>
                <RatingBar rating={5} readonly size="small" className="mt-auto" />
              </div>

              {/* Second card in column 2 */}
              <div className="bg-[#fafafa] rounded-[18px] p-5 lg:p-[26px] h-full flex flex-col">
                <div className="flex flex-row gap-4 lg:gap-[18px] justify-start items-center mb-4">
                  <img
                    src="/images/img_image_yc550ga.png"
                    alt="Praveen Profile"
                    className="w-12 h-12 md:w-[58px] md:h-[58px] rounded-full"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-base md:text-xl font-poppins font-normal text-[#292929]">
                      Praveen
                    </h4>
                    <p className="text-sm font-poppins font-normal text-[#636363]">Phosphene Ai</p>
                  </div>
                </div>
                <p className="text-xs md:text-sm font-poppins font-normal text-[#636363] mb-4">
                  MyProBuddy&apos;s expertise in the AI and technology sector was instrumental in
                  securing our funding round. Their guidance throughout the process, from investor
                  relations to deal negotiations, was invaluable.
                </p>
                <RatingBar rating={5} readonly size="small" className="mt-auto" />
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4 lg:gap-[18px] w-full">
              <div className="bg-[#fafafa] rounded-[18px] p-5 lg:p-[26px] h-full flex flex-col">
                <div className="flex flex-row gap-4 lg:gap-[18px] justify-start items-center mb-4">
                  <img
                    src="/images/img_image_etu0ian.png"
                    alt="Ashwin Profile"
                    className="w-12 h-12 md:w-[58px] md:h-[58px] rounded-full"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-base md:text-xl font-poppins font-normal text-[#292929]">
                      Ashwin
                    </h4>
                    <p className="text-sm font-poppins font-normal text-[#636363]">
                      Co-Founder, ICM
                    </p>
                  </div>
                </div>
                <p className="text-xs md:text-sm font-poppins font-normal text-[#636363] mb-4">
                  &quot;We struggled to demonstrate our scalability. My Pro Buddy helped us
                  highlight our traction in a specific region and our plan for expansion, securing a
                  seed round from a VC firm focused on emerging markets. Their support truly changed
                  everything. We&apos;re grateful for their guidance. Excited for what lies
                  ahead.&quot;
                </p>
                <RatingBar rating={5} readonly size="small" className="mt-auto" />
              </div>

              {/* Second card in column 3 */}
              <div className="bg-[#fafafa] rounded-[18px] p-5 lg:p-[26px] h-full flex flex-col">
                <div className="flex flex-row gap-4 lg:gap-[18px] justify-start items-center mb-4">
                  <img
                    src="/images/img_image_o94obkq.png"
                    alt="Vlad Vtoc Profile"
                    className="w-12 h-12 md:w-[58px] md:h-[58px] rounded-full"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-base md:text-xl font-poppins font-normal text-[#292929]">
                      Vlad Vtoc
                    </h4>
                    <p className="text-sm font-poppins font-normal text-[#636363]">
                      Founder, MAIA Biotech
                    </p>
                  </div>
                </div>
                <p className="text-xs md:text-sm font-poppins font-normal text-[#636363] mb-4">
                  The services and team are quick, professional, and effective. We were able to
                  generate good investor leads through MPB. I am very satisfied with the customer
                  service. Strongly recommend their services to startups looking to raise.
                </p>
                <RatingBar rating={5} readonly size="small" className="mt-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
