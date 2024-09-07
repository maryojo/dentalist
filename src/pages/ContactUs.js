import React from "react";
import PageLayout from "../layout/PageLayout";
import ContactForm from "../components/ContactForm";
import LocationCard from "../components/LocationCard";

const ContactUs = () => {
  return (
    <PageLayout>
      <div className="flex flex-col items-center bg-[#DBEFFA] rounded-[48px] w-full py-12 pb-[14rem] md:pb-40 relative">
        <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-[700] tracking-[-2.56px] text-[#181945]">
          Contact Us
        </h1>
        <p className="text-base md:text-[18px] font-[500] tracking-[-0.36px] mt-5 md:mb-10 w-[80%] md:w-[60%] xl:w-[40%] text-center leading-[28px]">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
        <div className="absolute top-2/3 w-[85%] sm:w-[80%] md:w-[70%] lg:w-[60%]">
          <ContactForm />
        </div>
      </div>
      <div className="mt-[40rem] md:mt-96 mb-24">
        <div className="flex flex-col text-center mb-8">
          <p className="text-[12px] font-[700] tracking-[0.96] text-[#583FBC] uppercase" >OUR CLINIC</p>
          <h2 className="text-[#181945] font-[700] text-[28px] sm:text-[36px] md:text-[48px] tracking-[-1.92px]">Come to our clinic and get best dental services</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center md:justify-center gap-4">
          <LocationCard/>
          <LocationCard/>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactUs;
