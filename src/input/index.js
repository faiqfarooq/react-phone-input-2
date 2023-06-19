import { Box, Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { PhoneNumberValidation } from "../schema";
import "react-phone-input-2/lib/style.css";
import "react-phone-input-2/lib/high-res.css";
import "./style.css";

const ErrorTypo = {
  fontWeight: 400,
  fontSize: "0.75rem",
  lineHeight: 1.66,
  letterSpacing: "0.03333em",
  textAlign: "left",
  marginLeft: "20px",
  marginTop: "3px",
  color: "#e53935",
};
const phoneMainBox = {
  width: "100%",
  height: "20rem",
  mt: 3,
  overflow: "hidden",
  position: "relative",
};
const phonePlaceholder = {
  fontFamily: "InterRegular",
  fontSize: "16px",
  fontWeight: 400,
  color: "#9CA3AF",
  position: "absolute",
  zIndex: 99,
  top: "3%",
  left: "15%",
  backgroundColor: "white",
  padding: ".5rem",
  "@media (max-width:482px)": {
    left: "18%",
  },
  "@media (max-width:415px)": {
    left: "20%",
  },
  "@media (max-width:384px)": {
    left: "23%",
  },
  "@media (max-width:348px)": {
    left: "27%",
  },
  "@media (max-width:301px)": {
    left: "30%",
    whiteSpace: "nowrap",
    width: "4rem",
  },
  "@media (max-width:280px)": {
    left: "33%",
    whiteSpace: "nowrap",
    width: "3rem",
  },
};

function Phone() {
  // formik initialization
  const initialValues = {
    phoneNumber: "",
  };
  const [Focus, setFocus] = useState(false);
  const phoneInputRef = useRef(null);

  const handleClick = () => {
    if (phoneInputRef.current) {
      phoneInputRef.current.focus();
      // You can also access other methods of the PhoneInput component using the ref, e.g., phoneInputRef.current.isValidNumber()
    }
  };
  const handlePhoneNumberChange = async (value, country) => {
    formik.setFieldValue("phoneNumber", value);
  };
  const onSubmit = async (values) => {
    console.log(" formik", values);
  };
  const formik = useFormik({
    onSubmit,
    initialValues,
    validationSchema: PhoneNumberValidation,
  });
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: "30rem",
            width: "100%",
            height: "20rem",
          }}
        >
          <form onSubmit={formik.handleSubmit}>
            <Box sx={phoneMainBox}>
              <Typography
                onClick={() => {
                  setFocus(true);
                  handleClick();
                }}
                sx={{ ...phonePlaceholder, display: Focus ? "none" : "block" }}
              >
                Enter your number
              </Typography>
              <PhoneInput
                country={"kr"}
                autoFormat={false}
                value={formik.values.phoneNumber}
                onChange={handlePhoneNumberChange}
                onFocus={() => {
                  setFocus(true);
                }}
                name="phoneNumber"
                placeholder={"Enter phone number"}
                inputProps={{
                  name: "mobile",
                  ref: phoneInputRef,
                  style: { height: "56px", width: "100%", fontSize: "1rem" },
                }}
                inputStyle={{
                  width: "300px", // Set the width of the input field
                  border: "1px solid red",
                }}
                dropdownProps={{
                  name: "country",
                  tabIndex: 1,
                }}
                buttonStyle={{
                  minWidth: "55px",
                }}
                dropdownStyle={{
                  fontFamily: "InterRegular",
                  fontSize: "14px",
                }}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <Typography style={ErrorTypo}>
                  {formik.errors.phoneNumber}
                </Typography>
              ) : null}
            </Box>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Phone;
