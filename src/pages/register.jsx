import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export default function Register() {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    email: yup.string().email("Invalid email format").required("Required"),
    password: yup.string().min(6, "Minimum 6 characters").required("Required"),
    username: yup.string().min(3, "Minimum 3 characters").required("Required"),
    phone: yup
      .string()
      .matches(/^[0-9]{10,15}$/, "Enter a valid phone number")
      .required("Required"),
  });
  const handleSubmit = (values, { resetForm }) => {
    const newUser = {
      username: values.username,
      email: values.email,
      password: values.password,
       phone: values.phone,
    };
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    toast.success("Registration successful!");
    resetForm();
    navigate("/login");
  };
  return (
    <>
        <div
          className="w-screen h-screen bg-cover bg-center flex items-center justify-center "
        >
     <Formik
          initialValues={{ email: "", password: "", username: "", phone: ""}}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        > <Form className="flex flex-col gap-4 bg-opacity-50 p-10 rounded-lg bg-black/70 text-white w-80 md:w-96">
             <div className="flex flex-col items-center text-center gap-3">
            <h1 className="text-2xl text-blue-400">
            Create Your Account
            </h1>
            <p className="text-sm mb-4">
              Join thousands of patients who trust us with their healthcare needs. Register today to book appointments, consultations, and access your medical records.
            </p>
          </div>
            <div>
              <label htmlFor="username">Username :</label>
              <Field
                className="input  focus:outline-none text-black dark:text-white border-2 hover:border-blue-500"
                id="username"
                name="username"
                placeholder="Enter your Username"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-600"
              />
            </div>
            <div>
              <label htmlFor="email">Email Address:</label>
              <Field
                className="input  focus:outline-none text-black dark:text-white border-2 hover:border-blue-500"
                id="email"
                name="email"
                placeholder="Enter your Email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600"
              />
            </div>
            <div>
              <label htmlFor="password">Password :</label>
              <Field
                className="input  focus:outline-none text-black dark:text-white border-2 hover:border-blue-500"
                id="password"
                name="password"
                placeholder="Enter your Password"
                type="password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-600"
              />
            </div>
            <div>
              <label htmlFor="password">Phone Number :</label>
              <Field
                className="input  focus:outline-none text-black dark:text-white border-2 hover:border-blue-500"
                id="phone"
                name="phone"
                placeholder="Enter your Phone Number"
                type="tel"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-600"
              />
            </div>
            <button
              className="cursor-pointer bg-blue-400 text-white py-2 px-4 rounded mt-4"
              type="submit"
            >
             Create Account
            </button>
            <div className="flex gap-2">
              <p className="text-white">
                Already have an account?
              </p>
              <a href="/login" className="text-transparent bg-clip-text bg-blue-400">
                Sign In
              </a>
            </div>
          </Form>
        </Formik>
      </div>
      </>
     );
}
