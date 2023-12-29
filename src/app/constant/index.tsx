import * as Yup from 'yup';

export const formValidationSchema = Yup.object({
  name: Yup.string()
    .required("Nama harus diisi!")
    .min(4, "Nama harus memiliki lebih dari 4 karakter!"),
  email: Yup.string()
    .email("Email harus valid!")
    .required("Email harus diisi!"),
  password: Yup.string()
    .required("Password harus diisi!")
    .min(8, "Password harus memiliki lebih dari 8 karakter!"),
});