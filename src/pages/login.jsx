import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export default function Login() {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Required")
      .test("is-valid", "Enter a valid email", (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10,15}$/;
        return emailRegex.test(value) || phoneRegex.test(value);
      }),
    password: yup.string().required("Required"),
  });

  const handleLogin = (values, { resetForm }) => {
    const { email, password } = values;
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (u) => (u.email === email || u.phone === email) && u.password === password
    );

    if (foundUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      toast.success("Login successful!");
      resetForm();
      navigate("/");
    } else {
      toast.error("Invalid Email or Password");
    }
  };
  return (
    <div className="w-screen h-screen bg-cover bg-center flex items-center justify-center flex-col ">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
      >
        <Form className="flex flex-col gap-4 bg-opacity-50 p-10 rounded-lg bg-black/70 text-white w-80 sm:w-96">
          <div className="flex flex-col items-center text-center gap-2">
            <h1 className="text-2xl text-blue-400">HealthCare Plus</h1>
            <h1 className="text-white text-2xl">Welcome Back</h1>
            <p className="text-sm mb-4">
              Sign in to book appointments and manage your consultations
            </p>
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <Field
              className="input focus:outline-none px-2 py-1 rounded text-black dark:text-white border-2 hover:border-blue-500"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-400 text-sm"
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <Field
              className="input focus:outline-none px-2 py-1 rounded text-black dark:text-white border-2 hover:border-blue-500"
              id="password"
              name="password"
              placeholder="Enter your password"
              type="password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-400 text-sm"
            />
          </div>
          <button
            type="submit"
            className="cursor-pointer bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded mt-4"
          >
            Sign In
          </button>
          <div className="flex gap-2">
            <p className="text-white">Don’t have an account? </p>
            <a
              href="/register"
              className="text-transparent bg-clip-text bg-blue-400"
            >
              Sign Up
            </a>
          </div>
        </Form>
      </Formik>
      <p className="mt-6">
        Need help? <span className="text-blue-500">Contact Support</span>
      </p>
    </div>
  );
}
