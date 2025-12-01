import Nav from "../components/nav";
import aboutus from "../assets/aboutus.png";
import middle from "../assets/middle.png";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
export default function about() {
  const navigate = useNavigate();
  const steps = [
    {
      number: "1",
      title: "Create Your Account",
      description:
        "Sign up in minutes with your basic information. Set up your health profile and add your medical history for personalized care.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 16 16"
        >
          <g fill="currentColor">
            <path d="M6 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1s1-4 6-4s6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
            <path
              fill-rule="evenodd"
              d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"
            />
          </g>
        </svg>
      ),
      color: "text-blue-600",
    },
    {
      number: "2",
      title: "Find Your Doctor",
      description:
        "Browse through our network of verified healthcare professionals. Filter by specialty, availability, ratings, and location.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"
          />
        </svg>
      ),
      color: "text-green-600",
    },
    {
      number: "3",
      title: "Book Appointment",
      description:
        "Choose a convenient time slot that works for you. Select between video consultation, phone call, or in-person visit.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9M4 9V7a2 2 0 0 1 2-2h2M4 9h16m0 0V7a2 2 0 0 0-2-2h-2m0 0V3m0 2H8m0-2v2"
          />
        </svg>
      ),
      color: "text-yellow-600",
    },
    {
      number: "4",
      title: "Get Treatment",
      description:
        "Connect with your doctor at the scheduled time. Receive diagnosis, treatment plans, and prescriptions digitally.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M3 15.75v-7.5a2 2 0 0 1 2-2h8.5a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m17.168-8.759l-4 3.563a.5.5 0 0 0-.168.373v1.778a.5.5 0 0 0 .168.373l4 3.563a.5.5 0 0 0 .832-.374V7.365a.5.5 0 0 0-.832-.374"
          />
        </svg>
      ),
      color: "text-purple-600",
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-b from-blue-200 to-white">
        <Nav />
        <section className="container px-4 mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-8 md:mt-0">
            <div className="space-y-6">
              <span className="inline-block bg-blue-200 text-blue-500 px-3 py-1 rounded-full text-sm font-medium">
                Trusted by 50,000+ Patients
              </span>
              <h2 className="text-2xl font-medium text-gray-800">
                Healthcare That Puts You First
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                We're revolutionizing healthcare delivery by combining
                compassionate care with cutting-edge technology. Our mission is
                to make quality healthcare accessible, convenient, and
                personalized for everyone.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate("/contact")}
                  className="flex gap-2 items-center cursor-pointer bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M26 4h-4V2h-2v2h-8V2h-2v2H6c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 22H6V12h20zm0-16H6V6h4v2h2V6h8v2h2V6h4z"
                    />
                  </svg>
                  Book Appointment
                </button>
                <button className="cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-6 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                  Online Consultation
                </button>
              </div>
            </div>
            <div>
              <img
                src={aboutus}
                className="h-[88vh] w-auto md:ml-30 ml-0 rounded-lg flex items-center justify-center mt-8"
              />
            </div>
          </div>
        </section>
      </div>
      <div className=" bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <section className="py-12 px-6">
          <section className="py-12 px-6 bg-white dark:bg-gray-900">
            <div className="max-w-screen-md mx-auto text-center">
              <div className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-5">
                How It Works
              </div>
              <h2 className="text-2xl md:text-xl font-bold text-gray-800 dark:text-white mb-4">
                Get Started in Four Simple Steps
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                Our streamlined process makes it easy to access quality
                healthcare. From registration to <br />
                treatment, we've simplified every step of your healthcare
                journey.
              </p>
            </div>
          </section>
          <div className="flex flex-col lg:flex-row items-center justify-between ">
            {steps.map((step, index) => (
              <div key={index} className="relative flex-1 flex items-center">
                <div className="relative px-6 py-8 h-[40vh] border border-gray-200 dark:border-gray-700 rounded-xl transition duration-300 transform hover:scale-[1.03] hover:shadow-xl hover:border-blue-500 w-[300px]">
                  <div className="absolute -top-3 -right-3">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold shadow">
                      {step.number}
                    </div>
                  </div>
                  <div className={`text-4xl mb-4 ${step.color}`}>
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block h-[1px] bg-blue-500 dark:bg-blue-600 border-dotted w-16"></div>
                )}
              </div>
            ))}
          </div>
        </section>
</div>
        <section className="py-12 px-6 bg-white dark:bg-gray-900">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <img
                src={middle}
                alt="Doctor on video call"
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl font-medium text-gray-800 dark:text-white mb-4">
                Our Mission & Vision
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                Founded in 2010, HealthCare Plus was born from a simple belief:
                everyone deserves access to exceptional healthcare without
                barriers. We started as a small clinic and have grown into a
                comprehensive healthcare network serving communities across the
                region.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                Today, we combine the latest medical technology with the
                timeless values of compassionate care. Our telemedicine platform
                and online booking system ensure that quality healthcare is just
                a click away, while our physical facilities provide
                state-of-the-art treatment when you need it most.
              </p>

              <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                We're not just treating symptoms—we're partnering with you on
                your journey to optimal health and wellness. Every day, we work
                to earn your trust and exceed your expectations.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gradient-to-r from-blue-800 to-teal-500 text-center text-white rounded-xl mb-5">
          <div className="max-w-screen-md mx-auto ">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Experience Better Healthcare?
            </h2>
            <p className="text-sm md:text-base mb-6 leading-relaxed">
              Join thousands of satisfied patients who have already transformed
              their healthcare experience.
              <br />
              Start your journey to better health today.
            </p>
            <button
              onClick={() => navigate("/register")}
              className="px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg cursor-pointer mt-1 shadow hover:bg-blue-50 transition"
            >
              Create Free Account
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
