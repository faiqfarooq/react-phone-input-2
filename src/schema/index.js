import * as yup from "yup";
import { isValidNumber } from "libphonenumber-js";

export const PhoneNumberValidation = yup.object({
  phoneNumber: yup
    .string()
    .test("valid-phone", "Invalid phone number", (value) => {
      if (!value) return true; // Allow empty value
      return isValidNumber(`+${value}`);
    })
    .required("Phone number is required"),
});
