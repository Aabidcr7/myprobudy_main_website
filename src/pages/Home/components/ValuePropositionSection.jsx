import React from 'react';

const ValuePropositionSection = () => {
  return (
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
  );
};

export default ValuePropositionSection;
