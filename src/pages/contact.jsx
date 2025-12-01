import Nav from "../components/nav";
import { toast } from "react-hot-toast";
import Footer from "../components/footer";
export default function contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Your appointment request has been submitted successfully!");
  };
  return (
    <>
      <Nav />
      <section className="py-16 px-6 mx-auto bg-blue-600 text-white text-center">
        <div className="max-w-screen-md mx-auto">
          <div className="flex justify-center gap-4 mb-4 text-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="-2 -2 24 24"
            >
              <path
                fill="currentColor"
                d="M7 12.917v.583a4.5 4.5 0 1 0 9 0v-1.67a3.001 3.001 0 1 1 2 0v1.67a6.5 6.5 0 1 1-13 0v-.583A6 6 0 0 1 0 7V2a2 2 0 0 1 2-2h1a1 1 0 1 1 0 2H2v5a4 4 0 1 0 8 0V2H9a1 1 0 1 1 0-2h1a2 2 0 0 1 2 2v5a6 6 0 0 1-5 5.917M17 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
              />
            </svg>
          </div>
          <h2 className="text-3xl md:text-5xl mb-4">
            Get In Touch With Our Care Team
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            We're here to provide exceptional healthcare services tailored to
            your needs. Schedule an appointment, ask a question, or learn more
            about our comprehensive medical services.
          </p>
          <div className="text-sm md:text-base font-medium flex flex-wrap justify-center gap-2">
            <span>Same-Day Appointments Available</span>
            <span className="mx-2">•</span>
            <span>Accepting New Patients</span>
            <span className="mx-2">•</span>
            <span>Telehealth Options Available</span>
          </div>
        </div>
      </section>
      <div className="bg-blue-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 grid md:grid-cols-2 grid-cols-1">
          <div className=" bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mt-10 mb-7">
            <h2 className="text-3xl mt-5 text-gray-800 dark:text-white mb-4">
              Schedule Your Appointment
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
              Fill out the form below and our staff will contact you within 24
              hours to confirm your appointment. For urgent matters, please call
              us directly.
            </p>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <svg
                    className="text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 4.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M8.5 7a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m.87 5.546q-.35.09-.693.202l-.959.315a2.48 2.48 0 0 0-1.626 1.71l-.399 2.88c-.09.647.253 1.18.796 1.31c1.067.255 2.851.537 5.51.537c2.66 0 4.445-.282 5.512-.537c.543-.13.885-.663.796-1.31l-.4-2.88a2.48 2.48 0 0 0-1.626-1.71l-.959-.315q-.343-.113-.692-.202a4.5 4.5 0 0 1-.572.382a4.2 4.2 0 0 1-2.058.558c-.86 0-1.57-.283-2.058-.558a4.5 4.5 0 0 1-.573-.382m.285-1.095l.194.191l.005.005l.024.022q.035.032.111.092c.1.08.251.188.444.296c.387.218.927.429 1.567.429s1.18-.21 1.567-.429a3.5 3.5 0 0 0 .554-.388l.025-.023l.004-.003l.194-.192l.268.062q.516.118 1.022.285l.96.315a3.47 3.47 0 0 1 2.29 2.44l.007.027l.406 2.936c.147 1.06-.42 2.15-1.554 2.42c-1.15.274-3.013.564-5.743.564s-4.593-.29-5.743-.564c-1.134-.27-1.701-1.36-1.555-2.42l.407-2.936l.007-.027a3.47 3.47 0 0 1 2.29-2.44l.96-.315q.506-.166 1.022-.285z"
                    />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
                    Personal Information
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      First Name
                      <span className="text-red-400"> * </span>
                    </label>
                    <input type="text" placeholder="John" className="input" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Last Name
                      <span className="text-red-400"> * </span>
                    </label>
                    <input type="text" placeholder="Doe" className="input" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                      <span className="text-red-400"> * </span>
                    </label>
                    <input
                      type="email"
                      placeholder="john.doe@example.com"
                      className="input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                      <span className="text-red-400"> * </span>
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Date of Birth
                      <span className="text-red-400"> * </span>
                    </label>
                    <input
                      type="date"
                      placeholder="mm/dd/yyyy"
                      className="input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Are you a new patient?
                      <span className="text-red-400"> * </span>
                    </label>
                    <select className="input">
                      <option>Are you a new patient?</option>
                      <option>Yes, I’m a new patient</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <svg
                    className="text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M18.438 4.954H16.5V3.546c0-.262-.23-.512-.5-.5a.51.51 0 0 0-.5.5v1.408h-7V3.546c0-.262-.23-.512-.5-.5a.51.51 0 0 0-.5.5v1.408H5.562a2.503 2.503 0 0 0-2.5 2.5v11c0 1.379 1.122 2.5 2.5 2.5h12.875c1.379 0 2.5-1.121 2.5-2.5v-11a2.5 2.5 0 0 0-2.499-2.5m-12.876 1H7.5v.592c0 .262.23.512.5.5c.271-.012.5-.22.5-.5v-.592h7v.592c0 .262.23.512.5.5c.271-.012.5-.22.5-.5v-.592h1.937c.827 0 1.5.673 1.5 1.5v1.584H4.062V7.454c0-.827.673-1.5 1.5-1.5m12.876 14H5.562c-.827 0-1.5-.673-1.5-1.5v-8.416h15.875v8.416a1.5 1.5 0 0 1-1.499 1.5"
                    />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
                    Appointment Details
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Preferred Date
                      <span className="text-red-600"> * </span>
                    </label>
                    <input
                      type="date"
                      placeholder="mm/dd/yyyy"
                      className="input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Preferred Time
                      <span className="text-red-600"> * </span>
                    </label>
                    <select className="input" required>
                      <option>Select a time</option>
                      <option>8:00 AM</option>
                      <option>9:00 AM</option>
                      <option>10:00 AM</option>
                      <option>11:00 AM</option>
                      <option>12:00 AM</option>
                      <option>1:00 PM</option>
                      <option>2:00 PM</option>
                      <option>3:00 PM</option>
                      <option>4:00 PM</option>
                      <option>5:00 PM</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Appointment Type <span className="text-red-600"> * </span>
                    </label>
                    <select className="input" required>
                      <option>Select type</option>
                      <option>In-Person Visit</option>
                      <option>Telehealth/Video Consultation</option>
                      <option>Phone Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Department
                      <span className="text-red-600"> * </span>
                    </label>
                    <select className="input" required>
                      <option>Select department</option>
                      <option>Select department</option>
                      <option>General Practice</option>
                      <option>Cardiology</option>
                      <option>Dermatology</option>
                      <option>Orthopedics</option>
                      <option>Pediatrics</option>
                      <option>Psychiatry</option>
                      <option>Obstetrics & Gynecology</option>
                      <option>Neurology</option>
                      <option>Ophthalmology</option>
                      <option>ENT (Ear, Nose & Throat)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                      Preferred Doctor (Optional)
                    </label>
                    <select
                      className="md:w-2xl w-md px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white text-base pr-10
      focus:outline-none focus:ring-2 focus:ring-blue-500
      bg-[url('data:image/svg+xml;utf8,<svg fill=\'%23333\' height=\'20\' viewBox=\'0 0 24 24\' width=\'20\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/></svg>')]
      bg-no-repeat bg-right bg-[length:1.5rem_1.5rem]"
                    >
                      <option>No preference</option>
                      <option>Dr. Aya El-Daly (General Practice)</option>
                      <option>Dr. Mohamed Attia (Cardiology)</option>
                      <option>Dr. Fady Akram (Pediatrics)</option>
                      <option>Dr. Magdy Younis (Orthopedics)</option>
                      <option>Dr. Amina Salem (Dermatology)</option>
                      <option>Dr. Hamdy El-Nashar (Neurology)</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path
                        fill="#fff"
                        d="M22.044 3.87v13.39H17.26a.957.957 0 0 0-.957.957V23H2.914a.956.956 0 0 1-.957-.957V3.87a.957.957 0 0 1 .956-.957h18.174a.956.956 0 0 1 .957.957"
                      />
                      <path
                        fill="#e3e3e3"
                        d="M22.043 17.26L16.304 23v-4.783a.957.957 0 0 1 .957-.956z"
                      />
                      <path
                        stroke="#397cff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.826 1v4.304M9.609 1v4.304M14.391 1v4.304M19.174 1v4.304M9.609 7.696l-2.87 2.87L5.305 9.13m4.304 3.827l-2.87 2.87l-1.434-1.436m6.217-4.782h6.217m-6.217 4.782h6.217"
                        stroke-width="1"
                      />
                      <path
                        stroke="#397cff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M22.044 3.87v13.39H17.26a.957.957 0 0 0-.957.957V23H2.914a.956.956 0 0 1-.957-.957V3.87a.957.957 0 0 1 .956-.957h18.174a.956.956 0 0 1 .957.957"
                        stroke-width="1"
                      />
                      <path
                        stroke="#397cff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M22.043 17.26L16.304 23v-4.783a.957.957 0 0 1 .957-.956z"
                        stroke-width="1"
                      />
                    </g>
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
                    Medical Information
                  </h3>
                </div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                  Insurance Provider
                </label>
                <input
                  type="text"
                  placeholder="e.g., Blue Cross Blue Shield, Aetna, Medicare"
                  className="input w-full"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                  Reason for Visit <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="3"
                  required
                  placeholder="Please briefly describe the reason for your visit, symptoms, or concerns..."
                  className="w-full p-3 rounded-lg border bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-white"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                  Additional Notes or Questions
                </label>
                <textarea
                  rows="3"
                  placeholder="Any additional information you'd like us to know before your appointment..."
                  className="w-full p-3 rounded-lg border bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-white"
                />
              </div>
              <div className="mt-6 border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-blue-50 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300">
                By submitting this form, you consent to our healthcare team
                contacting you regarding your appointment. Your personal health
                information is protected under HIPAA regulations and will be
                kept confidential. We will never share your information with
                third parties without your explicit consent.
              </div>
              <button
                type="submit"
                className="cursor-pointer w-full px-6 py-3 justify-center bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
              >
                Submit Appointment Request
              </button>
              <p className="text-sm text-gray-700 dark:text-gray-300 justify-center flex">
                Need immediate assistance? Call us at{" "}
                <strong className="text-blue-500">(555) 123-4567</strong>
              </p>
            </form>
          </div>
          <div className="flex flex-col items-center gap-7">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 space-y-6 w-md mt-10 h-[75vh] md:ml-30 ml-0">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-6">
                Contact Information
              </h3>

              <div className="flex items-center gap-8">
                <div className="bg-blue-200 text-blue-600 rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 17.47c-.88-.07-1.75-.22-2.6-.45l-1.19 1.19c1.2.41 2.48.67 3.8.75v-1.49zM5.03 5c.09 1.32.35 2.59.75 3.8l1.2-1.2c-.23-.84-.38-1.71-.44-2.6z"
                      opacity="0.3"
                    />
                    <path
                      fill="currentColor"
                      d="M9.07 7.57A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1c-1.24 0-2.45-.2-3.57-.57a.8.8 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02m7.33 9.45c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM5.79 8.8c-.41-1.21-.67-2.48-.76-3.8h1.5a13 13 0 0 0 .46 2.59z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm font-semibold text-gray-700 dark:text-white">
                    Phone
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Main Line: <strong>(555) 123-4567</strong>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Appointments: <strong>(555) 987-6543</strong>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="bg-blue-200 text-blue-600 rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm font-semibold text-gray-700 dark:text-white">
                    Email
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    General Inquiries:{" "}
                    <strong>info@healthcareclinic.com</strong>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Scheduling:{" "}
                    <strong>appointments@healthcareclinic.com</strong>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="bg-blue-200 text-blue-600 rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 16 16"
                  >
                    <g fill="none" stroke="currentColor" stroke-width="1">
                      <path d="M8 14.5C10.5 11 12.5 8 12.5 6a4.5 4.5 0 1 0-9 0c0 2 2 5 4.5 8.5Z" />
                      <path d="M10 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z" />
                    </g>
                  </svg>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm font-semibold text-gray-700 dark:text-white">
                    Address
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    123 Medical Center Drive
                    <br />
                    Suite 200
                    <br />
                    Springfield, ST 12345
                    <br />
                    <a href="#" className="text-blue-600 hover:underline">
                      View on map →
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="bg-blue-200 text-blue-600 rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m.6-3h16.8M3.6 15h16.8" />
                      <path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 0 18" />
                    </g>
                  </svg>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm font-semibold text-gray-700 dark:text-white">
                    Patient Portal
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <a
                      href="https://portal.healthcareclinic.com"
                      className="text-blue-600 hover:underline"
                    >
                      portal.healthcareclinic.com
                    </a>
                    <br />
                    Access your medical records & test results
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-blue-200 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 rounded-xl p-6 w-md md:ml-30 ml-0">
              <h3 className="text-xl font-bold text-blue-800 dark:text-white mb-4">
                Office Hours
              </h3>
              <ul className="text-sm text-blue-700 dark:text-blue-100 space-y-1">
                <li>Monday – Friday: 8:00 AM – 6:00 PM</li>
                <li>Saturday: 9:00 AM – 3:00 PM</li>
                <li>Sunday: Closed</li>
                <li>
                  24/7 Nurse Hotline: <strong>Always Available</strong>
                </li>
              </ul>
              <p className="text-xs text-blue-600 dark:text-blue-200 mt-3">
                Extended hours available by appointment. Same-day appointments
                may be available for urgent concerns.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 text-center w-md md:ml-30 ml-0">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                Connect With Us
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                Follow us on social media for health tips, clinic updates, and
                community wellness events.
              </p>
              <div className="flex justify-center space-x-4 text-blue-500 text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                  >
                    <path
                      stroke-dasharray="24"
                      stroke-dashoffset="24"
                      d="M17 4l-2 0c-2.5 0 -4 1.5 -4 4v12"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.4s"
                        values="24;0"
                      />
                    </path>
                    <path
                      stroke-dasharray="8"
                      stroke-dashoffset="8"
                      d="M8 12h7"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.5s"
                        dur="0.2s"
                        values="8;0"
                      />
                    </path>
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-dasharray="64"
                    stroke-dashoffset="64"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19.89 7.34c-0.09 0.33 -0.49 1.16 -1.17 1.95c-0.45 8.68 -8.87 11.5 -14.64 8.59c-0.79 -1.05 2.85 -0.62 4.18 -2.63c-5.03 -2.57 -4.63 -9.44 -3.62 -9.16c2.37 3.19 6.19 3.48 6.81 3.19c0 -0.73 -0.31 -2.32 1.41 -3.65c0.99 -0.71 3.06 -1.34 4.93 0.69c0.32 0.21 0.78 0.3 1.47 0.15c0.41 -0.21 0.95 -0.07 0.67 0.66Z"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.6s"
                      values="64;0"
                    />
                  </path>
                </svg>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 md:ml-30 ml-0 w-md mb-5 md:mb-0">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Insurance Accepted
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                We accept most major insurance plans. Please contact us to
                verify coverage for your specific plan.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>Blue Cross Blue Shield</li>
                <li>UnitedHealthcare</li>
                <li>Medicare</li>
                <li>Humana</li>
                <li>Aetna</li>
                <li>Cigna</li>
                <li>Medicaid</li>
                <li>Kaiser Permanente</li>
              </ul>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-4">
                Self-pay and payment plans available for uninsured patients.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-white dark:bg-gray-900 py-12 px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-500 mb-6">
          Find Us
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 max-w-xl">
          Our clinic is conveniently located in the heart of Springfield with
          ample parking and easy access to public transportation.
        </p>
        <div className="bg-gray-100 dark:bg-gray-50 p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-semibold text-gray-800">
                123 Medical Center Drive, Suite 200
              </p>
              <p className="text-gray-600">Springfield, ST 12345</p>
            </div>
            <button className="cursor-pointer mt-4 md:mt-0 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
              Get Directions
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-500 mb-2">
              Parking
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Free parking garage on-site. Accessible parking spots available on
              the ground floor.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-500 mb-2">
              Public Transit
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Bus routes 12, 45, and 78 stop within 2 blocks. Metro station 0.5
              miles away.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-500 mb-2">
              Arrival
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Please arrive 15 minutes early for new patients and 10 minutes for
              return visits.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-500 mb-2">
              Accessibility & Amenities
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>Wheelchair accessible entrance and facilities</li>
              <li>On-site pharmacy and lab</li>
              <li>Lactation room available</li>
              <li>Elevator access to all floors</li>
              <li>Comfortable waiting areas with WiFi</li>
              <li>Multilingual staff available</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
