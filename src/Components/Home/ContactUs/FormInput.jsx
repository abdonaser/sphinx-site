import React from "react";
import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

const FormInput = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  minRows = 1,
  required = false,
  language = "ar",
  index,
  marginSpace = 0, // Added default marginSpace value
}) => {
  const { i18n } = useTranslation();
  const direction = language === "ar" ? "rtl" : "ltr";
  const textAlign = direction === "rtl" ? "right" : "left";
  // const marginClass = `ml-${[18, 22, 30, 35, 50][index % 5]}`;
  return (
    <div
      className={`w-full rounded-lg lg:py-[0px]  `}
      // style={{
      //   [i18n.language === "en"
      //     ? "marginLeft"
      //     : "marginRight"]: `${marginSpace}px`,
      // }}
      dir={direction}>
      <TextField
        fullWidth
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        variant="outlined"
        type={type}
        required={required}
        multiline={name === "Your request"}
        minRows={name === "Your request" ? 5 : minRows}
        InputProps={{
          sx: {
            borderRadius: "30px",
            padding: `${name === "Your request" ? "20px" : "0px"}`,
            borderColor: "#AAE2F9",
          },
        }}
        InputLabelProps={{
          shrink: true,
          sx: {
            fontSize: "18px",
            color: "#000",
            fontWeight: "500",
            fontFamily: "'Changa', sans-serif",
            textAlign: textAlign,
          },
        }}
        sx={{
          direction: direction,
          textAlign: textAlign,
          borderColor: "#ccc",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#AAE2F9",
            },
            "&:hover fieldset": {
              borderColor: "#009688",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#00796b",
            },
          },
        }}
      />
    </div>
  );
};

export default FormInput;
