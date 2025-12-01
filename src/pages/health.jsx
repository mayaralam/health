import Nav from "../components/nav";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import dr1 from "../assets/dr1.jpg";
import dr2 from "../assets/dr2.jpg";
import dr3 from "../assets/dr3.jpg";
import dr4 from "../assets/dr4.jpg";
import dr5 from "../assets/dr5.jpg";
import dr6 from "../assets/dr6.jpg";
import Footer from "../components/footer";
export default function health() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Your request has been submitted successfully!");
  };
  const [showForm, setShowForm] = useState(false);
  const services = [
    {
      title: "24/7 Ambulance",
      subtitle: "Emergency medical transport",
      contact: "911",
      id: "ambulance",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 64 64"
        >
          <path fill="#b3bdc4" d="M29.2 12.8h9.4v4.7h-9.4z" />
          <path
            fill="#e1e8ed"
            d="M4.6 34.4c-.5.6-.7 3.2-.7 3.2v15h54.9s3.3-9.4 3.3-30c0-7.3-4.6-7.5-20.6-7.5s-20 1.5-23.4 4.7C14.8 22.7 8.3 30 4.6 34.4"
          />
          <path
            fill="#3e4347"
            d="M19.5 20.8L7.8 32.9h19.5V17.6c-3.6 0-6.4 1.7-7.8 3.2"
          />
          <path
            fill="#b3bdc4"
            d="M62 54.5c0 1-.8 1.9-1.9 1.9H3.9c-1 0-1.9-.8-1.9-1.9c0-1 .8-1.9 1.9-1.9h56.2c1.1 0 1.9.9 1.9 1.9"
          />
          <path
            fill="#f15744"
            d="M33.9 6.7c-1.6 0-2.6 1.3-2.8 2.8c-.1.8-.9 3.3-.9 3.3h7.5s-.8-2.4-.9-3.3c-.3-1.5-1.4-2.8-2.9-2.8"
          />
          <path
            fill="#ffc7ce"
            d="M32 9.5c0 1 .8 1.9 1.9 1.9V7.6c-1.1 0-1.9.9-1.9 1.9"
          />
          <path
            fill="#f15744"
            d="m40 2l-2.8 4.7l4.6-3.3zM27.7 2l2.9 4.7l-4.7-3.3zm10.9 6.6l4.6-1.9l1 1.9zm-9.4 0l-4.7-1.9l-.9 1.9z"
          />
          <path
            fill="#62727a"
            d="M6.4 46.7v-7.2c0-1-.8-1.9-1.9-1.9h-.6v11h.6c1 0 1.9-.9 1.9-1.9"
          />
          <path
            fill="#f15744"
            d="M61.4 36.6H32.9l-3.8 3.8H6.4v3.8h24.7l3.7-3.7H61c.2-1.2.3-2.5.4-3.9m-8.8-10.7c0-.5-.4-.9-.9-.9h-3.3c-.5 0-.9-.4-.9-.9v-3.3c0-.5-.4-.9-.9-.9h-.9c-.5 0-.9.4-.9.9V24c0 .5-.4.9-.9.9h-3.3c-.5 0-.9.4-.9.9v.9c0 .5.4.9.9.9h3.3c.5 0 .9.4.9.9V32c0 .5.4.9.9.9h.9c.5 0 .9-.4.9-.9v-3.3c0-.5.4-.9.9-.9h3.3c.5 0 .9-.4.9-.9z"
          />
          <path
            fill="#3e4347"
            d="M56.4 54.5c0-4.1-3.4-7.5-7.5-7.5s-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5s7.5-3.4 7.5-7.5"
          />
          <path
            fill="#dae3ea"
            d="M48.9 50.2c2.4 0 4.3 1.9 4.3 4.3s-1.9 4.3-4.3 4.3s-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3"
          />
          <g fill="#3e4347">
            <circle cx="48.9" cy="50.2" r="1.1" />
            <circle cx="45.2" cy="52.4" r="1.1" />
            <circle cx="45.2" cy="56.6" r="1.1" />
            <circle cx="48.9" cy="58.8" r="1.1" />
            <circle cx="52.6" cy="56.6" r="1.1" />
            <path d="M53.1 53.3c-.5.3-1.2.1-1.5-.4s-.1-1.2.4-1.5s1.2-.1 1.5.4s.1 1.2-.4 1.5" />
          </g>
          <circle cx="48.9" cy="54.5" r="2.1" fill="#62727a" />
          <path
            fill="#3e4347"
            d="M22.6 54.5c0-4.1-3.4-7.5-7.5-7.5s-7.5 3.4-7.5 7.5S11 62 15.1 62c4.2 0 7.5-3.4 7.5-7.5"
          />
          <path
            fill="#dae3ea"
            d="M19.4 54.5c0-2.4-1.9-4.3-4.3-4.3s-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3s4.3-1.9 4.3-4.3"
          />
          <g fill="#3e4347">
            <circle cx="15.1" cy="50.2" r="1.1" />
            <circle cx="11.4" cy="52.4" r="1.1" />
            <path d="M10.9 55.7c.5-.3 1.2-.1 1.5.4s.1 1.2-.4 1.5s-1.2.1-1.5-.4s-.1-1.2.4-1.5" />
            <circle cx="15.1" cy="58.8" r="1.1" />
            <circle cx="18.8" cy="56.6" r="1.1" />
            <circle cx="18.8" cy="52.4" r="1.1" />
          </g>
          <circle cx="15.1" cy="54.5" r="2.1" fill="#62727a" />
        </svg>
      ),
      bgColor: "bg-red-100",
    },
    {
      title: "Helpline",
      subtitle: "Medical queries & support",
      contact: "+1 (555) 000-1111",
      id: "helpline",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M20 15.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1c-.3-1.1-.5-2.4-.5-3.6c0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1c0 9.4 7.6 17 17 17c.5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M5 5h1.5c.1.9.3 1.8.5 2.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4z"
          />
        </svg>
      ),
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Request Nurse",
      subtitle: "Home healthcare service",
      contact: null,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M20 9V6h-2v3h-3v2h3v3h2v-3h3V9zM9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m6.39 8.56C13.71 13.7 11.53 13 9 13s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 1 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66M15 18H3v-.78c0-.38.2-.72.52-.88C4.71 15.73 6.63 15 9 15s4.29.73 5.48 1.34c.32.16.52.5.52.88z"
          />
        </svg>
      ),
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      id: "nurse",
      request: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path
              fill="#109335"
              d="M4 7v2h16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2"
            />
            <path
              stroke="#109335"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 5h2a2 2 0 0 1 2 2v2H4V7a2 2 0 0 1 2-2h2m8 0V3m0 2H8m0-2v2M4 9.5V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9.5"
            />
          </g>
        </svg>
      ),
    },
  ];
  const doctors = [
    {
      name: "Dr. Mohamed Attia",
      specialty: "Cardiology",
      qualifications: "MD, FACC",
      phone: "+1 (925) 123-5467",
      available: "Mon, Wed, Fri",
      fee: "$150",
      experience: "15 years",
      image: dr1,
    },
    {
      name: "Dr. Magdy Younis",
      specialty: "Orthopedic Surgery",
      qualifications: "MD, FAOS",
      phone: "+1 (925) 234-5678",
      available: "Tue, Thu",
      fee: "$180",
      experience: "12 years",
      image: dr2,
    },
    {
      name: "Dr. Fady Akram",
      specialty: "Pediatrics",
      qualifications: "MD, FAAP",
      phone: "+1 (925) 345-6789",
      available: "Mon, Tue, Wed, Thu",
      fee: "$120",
      experience: "10 years",
      image: dr3,
    },
    {
      name: "Dr. Aya El-Daly",
      specialty: "General Surgery",
      qualifications: "MD, FACS",
      phone: "+1 (925) 678-9012",
      available: "Tue, Thu",
      fee: "$175",
      experience: "14 years",
      image: dr6,
    },
    {
      name: "Dr. Hamdy El-Nashar",
      specialty: "Neurology",
      qualifications: "MD, PhD",
      phone: "+1 (925) 456-7890",
      available: "Wed, Fri",
      fee: "$200",
      experience: "18 years",
      image: dr4,
    },
    {
      name: "Dr. Amina Salem",
      specialty: "Dermatology",
      qualifications: "MD, FAAD",
      phone: "+1 (925) 567-8901",
      available: "Tue, Thu",
      fee: "$130",
      experience: "9 years",
      image: dr5,
    },
  ];
  return (
    <>
      <div className="bg-gradient-to-b from-blue-200 to-white h-58">
        <Nav />
        <div className="container gap-3 mx-auto px-4 flex flex-col items-center mt-12">
          <h1 className="text-gray-800 font-bold">Your Health, Our Priority</h1>

          <p className="text-gray-600 text-center">
            Access world-class healthcare with our team of experienced medical
            <br />
            professionals. Book your consultation today.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <section className="px-4 bg-white dark:bg-gray-900 mt-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.id}
                onClick={() => s.id === "nurse" && setShowForm(true)}
                className={`cursor-pointer rounded-xl px-2 py-3 shadow hover:shadow-lg transition duration-300 ${s.bgColor}`}
              >
                <div className="flex gap-5 ml-2 mr-2">
                  <div className={`text-4xl ${s.iconColor}`}>{s.icon}</div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-medium text-gray-800">
                      {s.title}
                    </h3>
                    <p className="text-sm text-gray-600">{s.subtitle}</p>
                    {s.contact && (
                      <p className=" font-medium text-sm text-gray-700">
                        {s.contact}
                      </p>
                    )}
                  </div>
                  <div className="flex ml-auto">{s.request}</div>
                </div>
              </div>
            ))}
          </div>
          {showForm && (
            <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-xl relative shadow-lg overflow-y-auto max-h-[90vh] transform scale-95 opacity-0 animate-fade-in">
                <button
                  onClick={() => setShowForm(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12"
                    />
                    <path
                      fill="currentColor"
                      d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
                    />
                  </svg>
                </button>
                <h3 className="text-2xl font-bold text-blue-700 dark:text-white mb-2">
                  Request Home Nurse
                </h3>
                <p className="text-sm text-blue-600 dark:text-gray-300 mb-4">
                  Professional healthcare at your doorstep.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                    >
                      <path
                        fill="currentColor"
                        d="M7.5.875A3.626 3.626 0 0 1 11.127 4.5A3.624 3.624 0 0 1 8.5 7.983c1.197.145 2.224.568 2.997 1.33c.981.967 1.478 2.408 1.478 4.288a.475.475 0 0 1-.949 0c0-1.72-.453-2.88-1.196-3.613c-.745-.733-1.856-1.113-3.33-1.113c-1.472 0-2.584.38-3.328 1.113s-1.197 1.893-1.197 3.613a.475.475 0 0 1-.949 0c0-1.88.497-3.32 1.479-4.289c.772-.76 1.799-1.183 2.995-1.328a3.627 3.627 0 0 1 1-7.109m0 .95a2.676 2.676 0 1 0 0 5.35a2.676 2.676 0 0 0 0-5.35"
                      />
                    </svg>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Patient Name *
                    </label>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter patient's full name"
                    className="w-full p-2 rounded border"
                  />
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M18.4 20.75h-.23a16.7 16.7 0 0 1-7.27-2.58a16.6 16.6 0 0 1-5.06-5.05a16.7 16.7 0 0 1-2.58-7.29A2.3 2.3 0 0 1 3.8 4.1a2.32 2.32 0 0 1 1.6-.84H8a2.36 2.36 0 0 1 2.33 2a9.3 9.3 0 0 0 .53 2.09a2.37 2.37 0 0 1-.54 2.49l-.61.61a12 12 0 0 0 3.77 3.75l.61-.6a2.37 2.37 0 0 1 2.49-.54a9.6 9.6 0 0 0 2.09.53a2.35 2.35 0 0 1 2 2.38v2.4a2.36 2.36 0 0 1-2.35 2.36ZM8 4.75H5.61a.87.87 0 0 0-.61.31a.83.83 0 0 0-.2.62a15.2 15.2 0 0 0 2.31 6.62a15 15 0 0 0 4.59 4.59a15.34 15.34 0 0 0 6.63 2.36A.9.9 0 0 0 19 19a.88.88 0 0 0 .25-.61V16a.86.86 0 0 0-.74-.87a11.4 11.4 0 0 1-2.42-.6a.87.87 0 0 0-.91.19l-1 1a.76.76 0 0 1-.9.12a13.53 13.53 0 0 1-5.11-5.1a.74.74 0 0 1 .12-.9l1-1a.85.85 0 0 0 .19-.9a11.3 11.3 0 0 1-.6-2.42a.87.87 0 0 0-.88-.77"
                      />
                    </svg>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Contact Number *
                    </label>
                  </div>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full p-2 rounded border"
                  />

                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <g fill="none" stroke="currentColor" stroke-width="1">
                        <path d="M8 14.5C10.5 11 12.5 8 12.5 6a4.5 4.5 0 1 0-9 0c0 2 2 5 4.5 8.5Z" />
                        <path d="M10 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z" />
                      </g>
                    </svg>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Home Address *
                    </label>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter complete address"
                    className="w-full p-2 rounded border"
                  />
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25H17A2.75 2.75 0 0 1 19.75 7v11A2.75 2.75 0 0 1 17 20.75H7A2.75 2.75 0 0 1 4.25 18V7A2.75 2.75 0 0 1 7 4.25h1.25V3A.75.75 0 0 1 9 2.25m5.25 3.5V7a.75.75 0 0 0 1.5 0V5.75H17c.69 0 1.25.56 1.25 1.25v2.75H5.75V7c0-.69.56-1.25 1.25-1.25h1.25V7a.75.75 0 0 0 1.5 0V5.75zm-8.5 5.5V18c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25v-6.75z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Preferred Date *
                    </label>
                  </div>
                  <input type="date" className="w-full p-2 rounded border" />
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 48 48"
                    >
                      <circle cx="24" cy="24" r="20" fill="#00acc1" />
                      <circle cx="24" cy="24" r="16" fill="#eee" />
                      <path d="M23 11h2v13h-2z" />
                      <path d="M31.285 29.654L29.66 31.28l-6.504-6.504l1.626-1.627z" />
                      <circle cx="24" cy="24" r="2" />
                      <circle cx="24" cy="24" r="1" fill="#00acc1" />
                    </svg>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Preferred Time *
                    </label>
                  </div>
                  <input type="time" className="w-full p-2 rounded border" />

                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="none"
                        stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M39.5 15.5h-9a2 2 0 0 1-2-2v-9h-18a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2h27a2 2 0 0 0 2-2Zm-11-11l11 11M13.96 15h8.7m-8.7 22.02h5.63M13.96 20.5h17.37m-17.37 5.51h17.37m-17.37 5.51h17.37"
                        stroke-width="1"
                      />
                    </svg>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Service Required
                    </label>
                  </div>

                  <select className="w-full p-2 rounded border">
                    <option>Select service type *</option>
                    <option>Post-surgery care</option>
                    <option>Daily monitoring</option>
                    <option>Medication support</option>
                  </select>

                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                          stroke="#191919"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.826 1v4.304M9.609 1v4.304M14.391 1v4.304M19.174 1v4.304M9.609 7.696l-2.87 2.87L5.305 9.13m4.304 3.827l-2.87 2.87l-1.434-1.436m6.217-4.782h6.217m-6.217 4.782h6.217"
                          stroke-width="1"
                        />
                        <path
                          stroke="#191919"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M22.044 3.87v13.39H17.26a.957.957 0 0 0-.957.957V23H2.914a.956.956 0 0 1-.957-.957V3.87a.957.957 0 0 1 .956-.957h18.174a.956.956 0 0 1 .957.957"
                          stroke-width="1"
                        />
                        <path
                          stroke="#191919"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M22.043 17.26L16.304 23v-4.783a.957.957 0 0 1 .957-.956z"
                          stroke-width="1"
                        />
                      </g>
                    </svg>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Additional Notes
                    </label>
                  </div>

                  <textarea
                    placeholder="Any specific requirements or medical conditions we should know about..."
                    rows="3"
                    className="w-full p-2 rounded border"
                  ></textarea>

                  <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-xl max-w-xl mx-auto mt-6 shadow">
                    <p className="font-semibold text-sm">
                      Service Fee: Starting from $80/visit
                    </p>
                    <p className="text-sm mt-1">
                      Final pricing may vary based on service type and duration.
                      Our team will confirm the exact cost when they contact
                      you.
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="cursor-pointer bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          )}
          <style>
            {`
          @keyframes fade-in {
            0% { opacity: 0; transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in {
            animation: fade-in 0.3s ease-out forwards;
          }
        `}
          </style>
        </section>
      </div>
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-3 mt-10">
            <h6 className="text-2xl mt-10 text-blue-900 dark:text-blue-700">
              Our Specialists
            </h6>
            <p className="mb-7 text-center text-gray-700 dark:text-gray-300">
              Meet our team of highly qualified doctors, each bringing years of
              experience and dedication <br />
              to patient care.
            </p>
          </div>
          <section className="py-12 px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {doctors.map((doc, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
                >
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-72 object-cover transform transition-transform duration-300 hover:scale-105"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                      {doc.name}
                    </h3>
                    <p className="text-sm text-blue-500">{doc.specialty}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {doc.qualifications}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      📞 {doc.phone}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      🗓 Available: {doc.available}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      💰 Fee: {doc.fee}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      🧠 Experience: {doc.experience}
                    </p>
                    <button
                      onClick={() => navigate("/contact")}
                      className="cursor-pointer mt-2 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
