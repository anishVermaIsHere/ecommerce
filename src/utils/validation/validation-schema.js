import * as yup from 'yup';

export const signUpSchema = yup.object({
    name: yup
      .string('Enter your full name')
      .min(3, 'Name should be of minimum 3 characters')
      .max(20, 'Name should be of maximum 20 characters')
      .matches(/^[a-zA-Z]+\s|[a-zA-Z]/)
      .required('Name is required'),
    phone: yup
      .string('Enter your phone')
      .min('10', 'Phone no. must be atleast 10 digit')
      .max(14, 'Phone no. must be not more than 14 digit')
      .matches(/^[0-9]{10,14}/)
      .required('Phone is required'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of atleast 8 characters')
      .required('Password is required'),
    confirmPassword: yup.mixed()
     .oneOf([yup.ref('password'), null], 'Passwords not match')
  });

  export const signInSchema=yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters')
      .required('Password is required'),
  });