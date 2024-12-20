import { createTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const useAppTheme = () => {
  const { i18n } = useTranslation();

  const direction = i18n.language === "en" ? "ltr" : "rtl";

  const theme = createTheme({
    direction: direction,
  });

  return theme;
};

export default useAppTheme;
