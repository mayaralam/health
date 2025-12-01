import Nav from "../components/nav";
import bcg from "../assets/bcg.png";
import doc1 from "../assets/doc1.jpg";
import doc2 from "../assets/doc2.jpg";
import doc3 from "../assets/doc3.jpg";
import doc4 from "../assets/doc4.jpg";
import doc5 from "../assets/doc5.jpg";
import doc6 from "../assets/doc6.jpg";
import { useNavigate } from "react-router-dom";
import { IoMdStar } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useState } from "react";
import Footer from "../components/footer";
export default function home() {
  const faqs = [
    {
      question: "How do I book an appointment?",
      answer:
        "Booking an appointment is easy! Simply fill out our online booking form above, select your preferred department, doctor, date, and time. You will receive a confirmation email within 24 hours. You can also call us directly at (555) 123-4567.",
    },
    {
      question: "What should I bring to my first appointment?",
      answer:
        "Please bring a valid ID, your insurance card (if applicable), a list of current medications, any relevant medical records from previous providers, and a list of questions or concerns you want to discuss with your doctor.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "Yes, we accept most major insurance plans including Blue Cross Blue Shield, Aetna, UnitedHealthcare, Cigna, and Medicare. Please contact our billing department to verify if your specific plan is accepted.",
    },
    {
      question: "What are your hours of operation?",
      answer:
        "We are open Monday through Friday from 8:00 AM to 6:00 PM, and Saturdays from 9:00 AM to 2:00 PM. We are closed on Sundays and major holidays. Emergency services are available 24/7 through our hotline.",
    },
    {
      question: "Can I request a specific doctor?",
      answer:
        "Absolutely! When booking your appointment, you can select your preferred doctor from the available options. If your preferred doctor is not available on your chosen date, we will suggest alternative times or recommend another qualified specialist in the same department.",
    },
    {
      question: "How early should I arrive for my appointment?",
      answer:
        "We recommend arriving 15 minutes before your scheduled appointment time, especially if it's your first visit. This allows time for check-in, paperwork, and insurance verification to ensure your appointment starts on time.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We understand that plans change. Please notify us at least 24 hours in advance if you need to cancel or reschedule your appointment. This allows us to offer the time slot to other patients who need care.",
    },
    {
      question: "Do you offer telemedicine appointments?",
      answer:
        "Yes, we offer virtual consultations for many types of appointments. During the booking process, you can select whether you prefer an in-person or telemedicine visit. Our doctors use secure, HIPAA-compliant video conferencing for remote consultations.",
    },
    {
      question: "How do I get my test results?",
      answer:
        "Test results are typically available within 3-5 business days. You will receive a notification via email or phone when your results are ready. You can view them through our patient portal or discuss them with your doctor during a follow-up appointment.",
    },
    {
      question: "Do you provide emergency services?",
      answer:
        "While we do not have a full emergency department, we offer urgent care services for non-life-threatening conditions during business hours. For serious emergencies, please call 911 or visit your nearest emergency room immediately.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const navigate = useNavigate();
  const stats = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M3.5 8a5.5 5.5 0 1 1 8.596 4.547a9.005 9.005 0 0 1 5.9 8.18a.751.751 0 0 1-1.5.045a7.5 7.5 0 0 0-14.993 0a.75.75 0 0 1-1.499-.044a9.005 9.005 0 0 1 5.9-8.181A5.5 5.5 0 0 1 3.5 8M9 4a4 4 0 1 0 0 8a4 4 0 0 0 0-8m8.29 4q-.221 0-.434.03a.75.75 0 1 1-.212-1.484a4.53 4.53 0 0 1 3.38 8.097a6.69 6.69 0 0 1 3.956 6.107a.75.75 0 0 1-1.5 0a5.19 5.19 0 0 0-3.696-4.972l-.534-.16v-1.676l.41-.209A3.03 3.03 0 0 0 17.29 8"
          />
        </svg>
      ),
      value: "50,000+",
      label: "Happy Patients",
      color: "text-blue-600",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="M16 3c-.625 0-1.246.21-1.781.594L12.563 4.75L10.655 5h-.031l-.031.031A3.39 3.39 0 0 0 8.03 7.594L8 7.625v.031l-.25 1.938l-1.156 1.5l-.032.031v.031c-.699 1.117-.73 2.559.032 3.625l1.187 1.656l.313 1.72l-3.219 4.905l-1.031 1.532h4.781l1.156 2.687L10.5 29l1.031-1.563l3.156-4.75c.848.348 1.805.38 2.626 0l3.156 4.75L21.5 29l.719-1.719l1.156-2.687h4.781l-1.031-1.532L24 18.313l.25-1.875l1.156-1.656l.032-.031v-.031c.699-1.117.73-2.528-.032-3.594L24.25 9.469l-.375-1.875h.031c-.004-.024-.027-.04-.031-.063c-.18-1.308-1.215-2.37-2.531-2.531h-.032l-1.875-.25l-1.656-1.156A3.07 3.07 0 0 0 16 3m0 2.031c.23 0 .457.07.625.188L18.406 6.5l.219.156l.25.032L21.063 7h.03c.45.05.762.363.813.813v.062l.407 2.219l.03.219l.157.187l1.281 1.781c.239.332.27.895-.031 1.375l-1.406 1.969l-.032.25L22 18.063v.03a1 1 0 0 1-.156.438l-.063.032v.03a.88.88 0 0 1-.593.313h-.063l-2.281.407l-.25.03l-.188.157l-1.781 1.281c-.332.239-.926.27-1.406-.031l-1.625-1.25l-.188-.156l-.281-.032L10.937 19h-.03a.89.89 0 0 1-.688-.438a1 1 0 0 1-.125-.375v-.062l-.406-2.281l-.032-.25l-.156-.188l-1.281-1.781c-.239-.332-.27-.926.031-1.406l1.25-1.625l.156-.188l.031-.281l.282-2.094c.004-.015.027-.015.031-.031a1.4 1.4 0 0 1 1-1c.016-.004.016-.027.031-.031l2.094-.282l.25-.03l.219-.157l1.781-1.281c.168-.117.395-.188.625-.188m6.906 15.219l1.532 2.344H22.03l-.25.625l-.687 1.593l-2.125-3.25l.468-.343l1.97-.344v.031c.023-.004.038-.027.062-.031a2.97 2.97 0 0 0 1.437-.625zm-13.812.031a2.85 2.85 0 0 0 1.562.719h.031l1.907.25l.437.344l-2.125 3.218l-.687-1.593l-.25-.625H7.563z"
          />
        </svg>
      ),
      value: "100+",
      label: "Expert Doctors",
      color: "text-green-600",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          >
            <path d="M21.25 12a9.25 9.25 0 1 1-18.5 0a9.25 9.25 0 0 1 18.5 0" />
            <path d="M11.25 6.75v6h4" />
          </g>
        </svg>
      ),
      value: "15+",
      label: "Years Experience",
      color: "text-purple-600",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 24 24"
        >
          <g fill="none" fill-rule="evenodd">
            <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
            <path
              fill="currentColor"
              d="M18.494 3.801c2.095 1.221 3.569 3.7 3.504 6.592c-.081 3.61-2.89 6.794-7.679 9.638c-.71.422-1.458.969-2.319.969c-.845 0-1.625-.557-2.32-.97c-4.787-2.843-7.597-6.028-7.678-9.637c-.065-2.892 1.409-5.37 3.504-6.592C7.466 2.66 9.928 2.653 12 4.338c2.072-1.685 4.534-1.679 6.494-.537M17.487 5.53c-1.394-.812-3.136-.783-4.644.743a1.19 1.19 0 0 1-1.686 0c-1.508-1.526-3.25-1.555-4.644-.743c-1.444.842-2.56 2.628-2.511 4.82c.056 2.511 2.04 5.194 6.7 7.962c.408.243.834.554 1.298.683c.464-.129.89-.44 1.298-.683c4.66-2.768 6.644-5.45 6.7-7.963c.05-2.19-1.067-3.977-2.511-4.819"
            />
          </g>
        </svg>
      ),
      value: "98%",
      label: "Satisfaction Rate",
      color: "text-red-600",
    },
  ];
  const services = [
    {
      title: "General Medicine",
      description:
        "Comprehensive healthcare for common illnesses, preventive care, and routine check-ups with experienced physicians.",
      hoverBgColor: "group-hover:bg-blue-700",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="-2 -2 24 24"
        >
          <path
            fill="currentColor"
            d="M7 12.917v.583a4.5 4.5 0 1 0 9 0v-1.67a3.001 3.001 0 1 1 2 0v1.67a6.5 6.5 0 1 1-13 0v-.583A6 6 0 0 1 0 7V2a2 2 0 0 1 2-2h1a1 1 0 1 1 0 2H2v5a4 4 0 1 0 8 0V2H9a1 1 0 1 1 0-2h1a2 2 0 0 1 2 2v5a6 6 0 0 1-5 5.917M17 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
          />
        </svg>
      ),
    },
    {
      title: "Cardiology",
      description:
        "Advanced heart care including diagnostics, treatment, and prevention of cardiovascular diseases.",
      hoverBgColor: "group-hover:bg-red-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M7.402 3.098a3.75 3.75 0 0 0-5.304 5.304l5.558 5.27L8 14l5.892-5.588a3.75 3.75 0 1 0-5.294-5.313L8 3.697zM2.796 7.685a2.747 2.747 0 0 1 .01-3.88a2.75 2.75 0 0 1 3.889 0L8 5.111l1.305-1.306a2.75 2.75 0 1 1 3.89 3.89L8 12.62z"
          />
        </svg>
      ),
    },
    {
      title: "Neurology",
      description:
        "Expert care for neurological disorders, brain health, and nervous system conditions.",
      hoverBgColor: "group-hover:bg-purple-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path
              fill="currentColor"
              d="M5 15.75h.75a.75.75 0 0 0-.396-.662zm0-7.501l.353.662a.75.75 0 0 0 .397-.662zM8.5 2.75v.75a2.75 2.75 0 0 1 2.75 2.75h1.5A4.25 4.25 0 0 0 8.5 2zm3.5 3.5h-.75v11.5h1.5V6.25zm0 11.5h-.75A2.75 2.75 0 0 1 8.5 20.5V22a4.25 4.25 0 0 0 4.25-4.25zm-3.5 3.5v-.75a2.75 2.75 0 0 1-2.75-2.75h-1.5A4.25 4.25 0 0 0 8.5 22zM5 17.75h.75v-2h-1.5v2zm0-2l.354-.662A3.5 3.5 0 0 1 3.5 12H2a5 5 0 0 0 2.646 4.412zM2.75 12h.75a3.5 3.5 0 0 1 1.853-3.09L5 8.25l-.353-.661A5 5 0 0 0 2 12zM5 8.249h.75V6.25h-1.5v1.999zM5 6.25h.75A2.75 2.75 0 0 1 8.5 3.5V2a4.25 4.25 0 0 0-4.25 4.25z"
            />
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M8.952 15.775a4.25 4.25 0 1 1-1.736-8.02M12 15a4 4 0 0 0-4-4m4 4a4 4 0 0 1 4-4"
            />
            <path
              fill="currentColor"
              d="M19 15.75h-.75a.75.75 0 0 1 .396-.662zm0-7.501l-.353.662a.75.75 0 0 1-.397-.662zM15.5 2.75v.75a2.75 2.75 0 0 0-2.75 2.75h-1.5A4.25 4.25 0 0 1 15.5 2zM12 6.25h.75v11.5h-1.5V6.25zm0 11.5h.75a2.75 2.75 0 0 0 2.75 2.75V22a4.25 4.25 0 0 1-4.25-4.25zm3.5 3.5v-.75a2.75 2.75 0 0 0 2.75-2.75h1.5A4.25 4.25 0 0 1 15.5 22zm3.5-3.5h-.75v-2h1.5v2zm0-2l-.354-.662A3.5 3.5 0 0 0 20.5 12H22a5 5 0 0 1-2.646 4.412zM21.25 12h-.75a3.5 3.5 0 0 0-1.853-3.09L19 8.25l.353-.661A5 5 0 0 1 22 12zM19 8.249h-.75V6.25h1.5v1.999zm0-1.999h-.75A2.75 2.75 0 0 0 15.5 3.5V2a4.25 4.25 0 0 1 4.25 4.25z"
            />
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M15.048 15.775a4.25 4.25 0 1 0 1.736-8.02"
            />
          </g>
        </svg>
      ),
    },
    {
      title: "Orthopedics",
      description:
        "Specialized treatment for bone, joint, and musculoskeletal system injuries and conditions.",
      hoverBgColor: "group-hover:bg-green-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 48 48"
        >
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
            d="M2 23.3548H11L17.8889 4L28.8889 44L37 23.3548H46"
          />
        </svg>
      ),
    },
    {
      title: "Pediatrics",
      description:
        "Dedicated healthcare for infants, children, and adolescents with compassionate pediatric specialists.",
      hoverBgColor: "group-hover:bg-pink-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 36 36"
        >
          <path
            fill="#f7dece"
            d="M36 18.5c0-1.639-.97-3.004-2.273-3.385C32.367 7.658 25.85 2 18 2S3.633 7.658 2.273 15.115C.97 15.496 0 16.861 0 18.5c0 1.736 1.087 3.168 2.51 3.442C4.269 28.868 10.527 34 18 34s13.731-5.132 15.49-12.058C34.912 21.668 36 20.236 36 18.5"
          />
          <path
            fill="#662113"
            d="M18 25c-3 0-4-1-4 1s2 4 4 4s4-2 4-4s-1-1-4-1"
          />
          <circle cx="22.5" cy="18.5" r="2.5" fill="#662113" />
          <circle cx="13.5" cy="18.5" r="2.5" fill="#662113" />
          <path fill="#fff" d="M18 26h2v1s0 1-1 1s-1-1-1-1z" />
          <path
            fill="#d89882"
            d="M17.982 11h-.031a4.36 4.36 0 0 1-3.135-1.304a3.74 3.74 0 0 1-1.076-2.847a.99.99 0 0 1 1.057-.935c.551.033.972.508.939 1.06c-.029.495.155.983.503 1.336a2.42 2.42 0 0 0 1.725.729c.653-.036 1.27-.247 1.735-.705a3.31 3.31 0 0 0 .032-4.677a4.39 4.39 0 0 0-6.202-.042a.999.999 0 1 1-1.404-1.424a6.395 6.395 0 0 1 9.03.061a5.29 5.29 0 0 1-.052 7.486c-.836.827-1.945 1.262-3.121 1.262"
          />
        </svg>
      ),
    },
    {
      title: "Ophthalmology",
      description:
        "Complete eye care services including vision tests, treatments, and surgical procedures.",
      hoverBgColor: "group-hover:bg-cyan-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 36 36"
        >
          <path
            fill="#e1e8ed"
            d="M35.059 18c0 3.304-7.642 11-17.067 11S.925 22.249.925 18c0-3.314 34.134-3.314 34.134 0"
          />
          <path
            fill="#292f33"
            d="M35.059 18H.925c0-3.313 7.642-11 17.067-11s17.067 7.686 17.067 11"
          />
          <path
            fill="#f5f8fa"
            d="M33.817 18c0 2.904-7.087 9.667-15.826 9.667S2.166 21.732 2.166 18c0-2.912 7.085-9.666 15.825-9.666C26.73 8.333 33.817 15.088 33.817 18"
          />
          <circle cx="18" cy="18" r="8.458" fill="#8b5e3c" />
          <circle cx="18" cy="18" r="4.708" fill="#292f33" />
          <circle cx="14.983" cy="15" r="2" fill="#f5f8fa" />
        </svg>
      ),
    },
    {
      title: "Physical Therapy",
      description:
        "Rehabilitation services to restore movement, reduce pain, and improve quality of life.",
      hoverBgColor: "group-hover:bg-orange-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 14 14"
        >
          <path
            fill="#8fbffa"
            d="M11.846 2.154a2.154 2.154 0 0 0-4.308 0c.003.57.231 1.116.636 1.518L3.672 8.174a2.15 2.15 0 0 0-1.518-.636a2.154 2.154 0 1 0 0 4.308a2.154 2.154 0 0 0 4.308 0a2.15 2.15 0 0 0-.636-1.518l4.502-4.502c.402.405.948.633 1.518.636a2.154 2.154 0 0 0 0-4.308"
          />
        </svg>
      ),
    },
    {
      title: "Pharmacy Services",
      description:
        "On-site pharmacy with prescription medications, consultations, and medication management.",
      hoverBgColor: "group-hover:bg-violet-400",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 48 48"
        >
          <g fill="none" stroke-width="4">
            <path
              fill="#2076e8"
              fill-rule="evenodd"
              stroke="#fff"
              d="M9.97315 22.0623L17.2506 15.9558L24.528 9.84929C28.9703 6.12177 35.5932 6.7012 39.3207 11.1435C43.0483 15.5858 42.4688 22.2087 38.0265 25.9362L30.7491 32.0427L23.4717 38.1492C19.0294 41.8767 12.4065 41.2973 8.67896 36.855C4.95144 32.4127 5.53087 25.7898 9.97315 22.0623Z"
              clip-rule="evenodd"
            />
            <path
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.6885 21.8613L25.4261 28.6992"
            />
          </g>
        </svg>
      ),
    },
  ];
  const testimonials = [
    {
      name: "Essam Adel",
      since: "2021",
      rating: 5,
      review:
        "The level of care I received at HealthCare Plus was exceptional. Dr. Amgad took the time to listen to my concerns and explained everything clearly. The staff was friendly and professional, making my visit comfortable and stress-free.",
      image: doc1,
    },
    {
      name: "Osama El-Sayed",
      since: "2020",
      rating: 5,
      review:
        "I've been to many clinics, but HealthCare Plus stands out. The online booking system is incredibly convenient, and I never have to wait long. Dr. Shams is an excellent orthopedic specialist who helped me recover from my sports injury.",
      image: doc2,
    },
    {
      name: "Ramy Ghonem",
      since: "2022",
      rating: 5,
      review:
        "As a mother of three, finding a pediatrician who truly cares about my children was crucial. Dr. Nour is amazing with kids and always makes them feel comfortable. The entire team treats us like family!",
      image: doc3,
    },
    {
      name: "Tarek Gamal",
      since: "2019",
      rating: 5,
      review:
        "The comprehensive care and attention to detail at HealthCare Plus is remarkable. They use the latest technology and treatment methods, and the doctors are always up-to-date with medical advances. Highly recommend!",
      image: doc4,
    },
    {
      name: "Safaa Dawood",
      since: "2023",
      rating: 5,
      review:
        "The facility is modern and clean, the staff is incredibly helpful, and the doctors are knowledgeable and caring. The entire experience from booking to follow-up care has been seamless. Best healthcare experience!",
      image: doc5,
    },
    {
      name: "Amr Hamdy",
      since: "2021",
      rating: 5,
      review:
        "What I appreciate most is how they treat patients with respect and dignity. The doctors take time to answer questions and never rush through appointments. The follow-up care is excellent too!",
      image: doc6,
    },
  ];
  return (
    <>
      <div className="bg-gradient-to-b from-blue-50 to-white h-screen">
        <Nav />
        <div className="container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 items-center py-4 md:mt-20 mt-0">
          <section className=" py-16 px-6">
            <div className="max-w-screen-lg mx-auto space-y-6">
              <div className="inline-flex items-center px-2.5 py-1 rounded-full font-semibold text-sm shadow-md bg-blue-100 text-blue-600 ">
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-200"></span>
                </span>
                Trusted by 50,000+ patients nationwide
              </div>
              <div>
                <h1 className="text-gray-800 mb-1 mt-2">Your Health,</h1>
                <h1 className="text-blue-500">Our Priority</h1>
              </div>
              <p className="text-gray-600 max-w-xl mx-auto text-sm">
                Expert Medical Care When You Need It Experience world-class
                healthcare with our team of certified medical professionals.
                Book appointments instantly, get expert consultations, and take
                control of your health journey with comprehensive care tailored
                to your needs.
              </p>
              <div className="flex gap-4 mt-8 flex-wrap">
                <a
                  onClick={() => navigate("/health")}
                  className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white flex gap-2 items-center font-semibold px-6 py-2 rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M26 4h-4V2h-2v2h-8V2h-2v2H6c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 22H6V12h20zm0-16H6V6h4v2h2V6h8v2h2V6h4z"
                    />
                  </svg>
                  Schedule Appointment
                </a>
                <a
                  onClick={() => navigate("/about")}
                  className="cursor-pointer bg-white border border-blue-500 text-blue-500 hover:bg-blue-50 font-semibold px-6 py-2 rounded-lg"
                >
                  Learn More
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
                <div className="text-sm text-gray-700 font-medium">
                  🕒 24/7 Available
                </div>
                <div className="text-sm text-gray-700 font-medium">
                  ⏱️ 15 min Avg. Wait
                </div>
                <div className="text-sm text-gray-700 font-medium">
                  ⭐ 98% Satisfaction
                </div>
              </div>
            </div>
          </section>
          <img src={bcg} className="w-xl h-99" />
        </div>
      </div>
      <div className="container mx-auto px-4">
        <section className="py-12 px-6">
          <div className="max-w-screen-lg mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-85 md:mt-0">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-3">
                <div className={`text-4xl flex justify-center  ${stat.color}`}>
                  {stat.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {stat.value}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <section className="py-16 px-6 ">
            <div className="max-w-screen-xl mx-auto text-center space-y-6">
              <button className="bg-blue-100 text-blue-500 px-6 py-2 rounded-full font-medium hover:bg-blue-200 transition duration-300">
                Our Services
              </button>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm">
                Comprehensive Medical Services for Your Well-being. <br />
                From preventive care to specialized treatments, our
                multidisciplinary team provides exceptional healthcare services
                tailored to your unique needs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="group space-y-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6  shadow transition duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-120 transform"
                  >
                    <div
                      className={`bg-blue-500 text-white w-12 h-12 items-center justify-center rounded-full flex mx-auto transition duration-300 ${service.bgColor} ${service.hoverBgColor}`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* hover:shadow-lg transition duration-300 */}

      <section className="container mx-auto py-16 px-6 ">
        <div className="max-w-screen-xl mx-auto text-center space-y-6">
          <button className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full font-medium hover:bg-blue-200 transition duration-300">
            Patient Testimonials
          </button>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm mb-3">
            What Our Patients Say About Us
          </p>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm">
            Don't just take our word for it. Here's what our patients have to
            say about their <br />
            experience with HealthCare Plus.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow hover:shadow-lg transition duration-300 text-left"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                      {t.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Patient since {t.since}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 text-yellow-400 mb-2">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <div key={i}>
                      <IoMdStar />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t.review}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
<div className=" bg-gray-50 dark:bg-gray-900">
      <section className="container mx-auto py-16 px-6">
        <div className="max-w-screen-md mx-auto text-center space-y-6">
         <button className="bg-blue-100 text-blue-500 px-4 py-2 rounded-full font-medium hover:bg-blue-200 transition duration-300">
            FAQ
          </button>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
          Frequently Asked Questions
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Find answers to common questions about our services, appointments,
            and policies
          </p>

          <div className="mt-10 space-y-4 text-left">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 hover:dark:bg-gray-900"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-4 py-3 text-gray-500 dark:text-white font-medium focus:outline-none"
                >
                  {faq.question}
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                    

                </button>
                {openIndex === index && (
                  <div className="px-4 pb-4 text-sm text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
       </div>
    <section className="container py-12 px-6 bg-blue-50 dark:bg-blue-100 rounded-xl md:max-w-screen-md max-w-sm mx-auto text-center mb-7 mt-7">
      <h3 className="text-xl font-semibold mb-2 text-black">Still have questions?</h3>
      <p className="text-sm mb-6 text-black">
        Can't find the answer you're looking for? Please contact our support team.
      </p>
      <button onClick={() => navigate("/contact")} className="bg-blue-600 text-white px-6 py-2 rounded-xl font-medium shadow-md cursor-pointer hover:bg-blue-700 transition duration-300">
        Contact Support
      </button>
    </section>
   
    <Footer />
    </>
  );
}
