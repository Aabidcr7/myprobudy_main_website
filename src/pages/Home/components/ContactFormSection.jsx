import React from 'react';
import EditText from '../../../components/ui/EditText';

const ContactFormSection = ({ formData, handleInputChange, handleSubmit }) => {
  return (
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
              <h2
                className="text-[26px] sm:text-[38px] md:text-[46px] lg:text-[50px] font-poppins font-medium leading-[38px] sm:leading-[57px] md:leading-[68px] lg:leading-[74px] mb-2 lg:mb-3"
                style={{ letterSpacing: '-2px', color: '#5d248f' }}
              >
                Let's Make it
                <span className="text-[#ff6b35]"> Happen</span>
              </h2>
              <p className="text-xl lg:text-2xl font-poppins font-medium leading-[32px] lg:leading-[36px] ">
                Start your fundraising journey today!
              </p>
              <p className="text-base lg:text-lg font-poppins font-normal leading-[26px] lg:leading-[30px] text-white/75 max-w-lg">
                Join thousands of successful entrepreneurs who have transformed their startups with
                our expert guidance and investor network.
              </p>
            </div>
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

                {/* Contact Form */}
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 justify-center items-center"
                >
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

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full text-lg font-poppins font-bold leading-[24px] text-white bg-gradient-to-r from-[#fc5109] to-[#ff6b35] hover:from-[#e04108] hover:to-[#ff5722] rounded-xl px-8 py-4 flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] mt-2"
                  >
                    Start Your Fundraising Journey
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>

                  {/* Trust Indicators */}
                  <div className="flex items-center justify-center gap-4 w-full pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-600">Free Consultation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
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
  );
};

export default ContactFormSection;
