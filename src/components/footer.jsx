import { TfiLinkedin } from "react-icons/tfi";
import { GrInstagram } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 pt-12 pb-6 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-8">
        <div className="md:col-span-2 space-y-4">
          <div className="flex gap-2 items-center">
            <div className="text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10.5 17h3v-3.5H17v-3h-3.5V7h-3v3.5H7v3h3.5zM3 21V3h18v18z"
                />
              </svg>{" "}
            </div>

            <h2 className="text-2xl font-bold">HealthCare Plus</h2>
          </div>

          <p className="text-sm">
            Revolutionizing healthcare delivery through innovative technology
            and compassionate care. Your health, our mission.
          </p>
          <div className="flex gap-4 mt-4">
            {[
              <FaSquareFacebook />,
              <BsTwitterX />,
              <GrInstagram />,
              <TfiLinkedin />,
            ].map((icon, i) => (
              <a key={i} href="#" className=" text-xl">
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-gray-800 dark:text-white">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Primary Care</li>
            <li>Specialist Consultations</li>
            <li>Mental Health</li>
            <li>Pediatrics</li>
            <li>Women's Health</li>
            <li>Chronic Disease Management</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-gray-800 dark:text-white">
            Company
          </h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press & Media</li>
            <li>Partner With Us</li>
            <li>Investors</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-gray-800 dark:text-white">
            Resources
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Help Center</li>
            <li>Patient Resources</li>
            <li>For Doctors</li>
            <li>Insurance Coverage</li>
            <li>Pricing</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-gray-800 dark:text-white">
            Legal
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>HIPAA Compliance</li>
            <li>Cookie Policy</li>
            <li>Accessibility</li>
            <li>Sitemap</li>
          </ul>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto mt-10 flex md:flex-row flex-col gap-3 md:gap-0 justify-between text-sm text-gray-600 dark:text-gray-400">
        <p>
          <strong>Email Us:</strong> support@healthcareplus.com
        </p>
        <p>
          <strong>Call Us:</strong> 1-800-HEALTHCARE (432-5842)
        </p>
        <p>
          <strong>Visit Us:</strong> 123 Medical Plaza, Suite 500, San
          Francisco, CA 94102
        </p>
      </div>
      <div className="mt-10 border-t flex md:flex-row flex-col justify-around border-gray-300 dark:border-gray-700 pt-6 text-center text-xs text-gray-600 dark:text-gray-400">
        © 2025 LifeShare Blood Donation Services. All rights reserved.
        <div className="space-x-4 mt-2">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Accessibility
          </a>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto mt-6 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 p-4 rounded-lg text-sm flex items-center gap-2">
        <span className="text-xl">⚠️</span>
        <p>
          <strong>Emergency Notice:</strong> If you are experiencing a medical
          emergency, please call 911 or visit your nearest emergency room
          immediately. This platform is not for emergency situations.
        </p>
      </div>
    </footer>
  );
}
