import * as yup from "yup";

export const PhoneNumberValidation = yup.object({
  phoneNumber: yup
    .string()
    .min(10, "Invalid phone number")
    .required("Phone number is required"),
});
