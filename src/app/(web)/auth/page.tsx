"use client";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import { formValidationSchema } from "../../constant";

const Auth = () => {
  const inputStyles =
    "border border-black dark:border-white sm:text-xs text-black rounded-full block w-full p-3 focus:outline-none";

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("Form values: ", values);
    },
  });

  return (
    <section className="container mx-auto h-screen">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
        <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
          <h1 className="text-xl font-bold md:text-2xl">Buat akun</h1>
          <p>Atau</p>
          <span className="inline-flex items-center">
            <AiFillGithub className="mr-3 text-4xl cursor-pointer text-black dark:text-white" />{" "}
            | <FcGoogle className="ml-3 text-4xl cursor-pointer" />
          </span>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col space-y-4 md:space-y-6 items-center"
        >
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 self-start text-xs px-2">
              {formik.errors.name}
            </div>
          )}
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            className={inputStyles}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            required
          />

          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 self-start text-xs px-2">
              {formik.errors.email}
            </div>
          )}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@email.com"
            className={inputStyles}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            required
          />

          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 self-start text-xs px-2">
              {formik.errors.password}
            </div>
          )}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••"
            className={inputStyles}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            required
          />

          <button
            type="submit"
            className="w-[50%] bg-blue-400 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-800 hover:transition-all font-bold focus:outline-none  rounded-full text-sm px-5 py-3 text-center"
          >
            Sign up
          </button>
        </form>
        <span className="flex w-full justify-center">
          Sudah punya akun?
          <button className="text-blue-700 dark:text-blue-500 underline ml-2">
            Login
          </button>
        </span>
      </div>
    </section>
  );
};

export default Auth;
