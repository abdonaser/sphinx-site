import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router";
import { ThemeProvider } from "@mui/material/styles";
import useAppTheme from "./Styles/mui/theme";
import Loading from "./Components/Public/Loading";
function App() {
  const theme = useAppTheme();
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
