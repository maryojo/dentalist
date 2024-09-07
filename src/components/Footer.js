import React from "react";
import IconBadge from "./IconBadge";

const Footer = () => {
  return (
    <footer className="secondary-bg-color py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-7 md:gap-12">
          {/* Logo and Description */}
          <div className="space-y-4 md:w-[50%]">
            <svg
              width="120"
              viewBox="0 0 699 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1113_4725)" className="mb-5">
                <path
                  d="M136 36C136 55.8823 119.882 72 100 72C80.1178 72 64 55.8823 64 36C64 16.1177 80.1178 0 100 0C119.882 0 136 16.1177 136 36Z"
                  fill="white"
                />
                <path
                  d="M4.38 62.6699C3.12 62.6699 1.87 62.6699 0.63 62.7699C0.212689 66.4419 0.00235673 70.1344 0 73.8299C0 128.83 44.77 173.45 100 173.45C101.26 173.45 102.5 173.45 103.75 173.36H105C157.91 170.76 200 127.21 200 73.8599C199.997 70.1647 199.79 66.4724 199.38 62.7999C146.47 65.3999 104.38 108.95 104.38 162.3C104.38 107.28 59.61 62.6699 4.38 62.6699Z"
                  fill="white"
                />
                <path
                  d="M105.1 175.33H103.61C103.031 175.33 102.44 175.35 101.843 175.369C101.233 175.39 100.616 175.41 100 175.41C76.5101 175.416 53.7366 167.322 35.5201 152.491C17.3035 137.661 4.75827 117.003 0 94C1 152.72 45.4 200 100 200C154.56 200 198.91 152.77 200 94.08C195.468 116.247 183.677 136.271 166.49 150.986C149.302 165.701 127.701 174.267 105.1 175.33Z"
                  fill="white"
                />
                <path
                  d="M621.135 62.5601C633.135 62.5601 642.855 66.2201 650.295 73.5401C657.735 80.7401 661.455 91.1801 661.455 104.86V163H645.255V107.2C645.255 97.3601 642.795 89.8601 637.875 84.7001C632.955 79.4201 626.235 76.7801 617.715 76.7801C609.075 76.7801 602.175 79.4801 597.015 84.8801C591.975 90.2801 589.455 98.1401 589.455 108.46V163H573.075V64.3601H589.455V78.4001C592.695 73.3601 597.075 69.4601 602.595 66.7001C608.235 63.9401 614.415 62.5601 621.135 62.5601Z"
                  fill="white"
                />
                <path
                  d="M688.032 164.08C684.912 164.08 682.272 163 680.112 160.84C677.952 158.68 676.872 156.04 676.872 152.92C676.872 149.8 677.952 147.16 680.112 145C682.272 142.84 684.912 141.76 688.032 141.76C691.032 141.76 693.552 142.84 695.592 145C697.752 147.16 698.832 149.8 698.832 152.92C698.832 156.04 697.752 158.68 695.592 160.84C693.552 163 691.032 164.08 688.032 164.08Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M556.314 119.8C556.674 116.32 556.854 113.02 556.854 109.9C556.854 100.9 554.874 92.86 550.914 85.78C547.074 78.58 541.554 72.94 534.354 68.86C527.154 64.78 518.874 62.74 509.514 62.74C499.914 62.74 491.394 64.84 483.954 69.04C476.634 73.12 470.934 79 466.854 86.68C462.774 94.36 460.734 103.3 460.734 113.5C460.734 123.7 462.834 132.7 467.034 140.5C471.234 148.18 476.994 154.12 484.314 158.32C491.754 162.52 500.154 164.62 509.514 164.62C521.274 164.62 531.114 161.68 539.034 155.8C546.954 149.8 552.234 142.06 554.874 132.58H537.234C535.314 138.1 531.954 142.54 527.154 145.9C522.474 149.14 516.594 150.76 509.514 150.76C500.874 150.76 493.494 148.06 487.374 142.66C481.374 137.14 478.074 129.52 477.474 119.8H556.314ZM535.794 90.46C538.554 94.9 539.934 100.24 539.934 106.48H477.654C478.494 97.12 481.794 89.8 487.554 84.52C493.434 79.24 500.514 76.6 508.794 76.6C514.554 76.6 519.774 77.8 524.454 80.2C529.254 82.48 533.034 85.9 535.794 90.46Z"
                  fill="white"
                />
                <path
                  d="M408.075 147.88L438.675 64.3601H456.135L417.435 163H398.355L359.655 64.3601H377.295L408.075 147.88Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M255.115 86.86C251.035 94.42 248.995 103.24 248.995 113.32C248.995 123.28 251.035 132.16 255.115 139.96C259.195 147.76 264.775 153.82 271.855 158.14C278.935 162.46 286.855 164.62 295.615 164.62C304.135 164.62 311.575 162.76 317.935 159.04C324.415 155.2 329.275 150.4 332.515 144.64V163H349.075V64.36H332.515V82.36C329.395 76.72 324.655 72.04 318.295 68.32C311.935 64.6 304.435 62.74 295.795 62.74C287.035 62.74 279.055 64.84 271.855 69.04C264.775 73.24 259.195 79.18 255.115 86.86ZM328.015 94.06C331.015 99.58 332.515 106.06 332.515 113.5C332.515 120.94 331.015 127.48 328.015 133.12C325.015 138.64 320.935 142.9 315.775 145.9C310.735 148.78 305.155 150.22 299.035 150.22C292.915 150.22 287.335 148.78 282.295 145.9C277.255 142.9 273.235 138.64 270.235 133.12C267.235 127.48 265.735 120.88 265.735 113.32C265.735 105.88 267.235 99.4 270.235 93.88C273.235 88.36 277.255 84.16 282.295 81.28C287.335 78.4 292.915 76.96 299.035 76.96C305.155 76.96 310.735 78.46 315.775 81.46C320.935 84.34 325.015 88.54 328.015 94.06Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1113_4725">
                  <rect width="699" height="200" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className="text-base md:text-lg text-gray-200 md:w-[90%] leading-[28px]">
              Dental Care Seattle is a top-rated local practice for cosmetic,
              preventative, and restorative dentistry on First Hill
            </p>
            <div className="flex space-x-4">
              <span className="text-xs font-semibold text-gray-400">
                FOLLOW US ON
              </span>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold mb-4 text-gray-400">
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              {["About Us", "Dental Services", "Dentist", "Blog", "FAQs"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-100 text-sm font-bold hover:text-purple-400"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact & Information */}
          <div>
            <h3 className="text-xs font-bold mb-4 text-gray-400">
              CONTACT & INFORMATION
            </h3>
            <div className="space-y-7">
              <ContactItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#583FBC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-phone"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                }
                title="Phone Number"
                content="+088 123 654 987"
              />
              <ContactItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#583FBC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-clock"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                }
                title="Open Hour"
                content="09:00 AM - 18:00 PM"
              />
              <ContactItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#583FBC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-map-pin"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                }
                title="Clinic Address"
                content="35 West Dental Street California 1004"
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-sm flex justify-between items-center">
          <p className="text-gray-400">&copy; Dentalist. All Rights Reserved</p>
          <div className="flex flex-row gap-5">
            <p href="#" className="text-gray-100 hover:text-purple-400">
              Terms of Use
            </p>
            <p href="#" className="text-gray-100 hover:text-purple-400">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ContactItem = ({ icon, title, content }) => (
  <div className="flex items-start">
    <div className="mr-3">
     <IconBadge
      isDarkVersion={false}
      icon={
      <div className="text-[#583FBC] text-sm">
      {icon}
      </div>
      }
      />
    </div>
    <div>
      <p className="text-xs font-bold text-gray-400">{title}</p>
      <p className="text-base font-bold text-gray-300">{content}</p>
    </div>
  </div>
);

export default Footer;
