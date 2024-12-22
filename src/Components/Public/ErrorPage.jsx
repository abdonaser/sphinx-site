import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { error404 as Icon404 } from "../../assets/icons";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <Container
      component="main"
      maxWidth={false}
      disableGutters
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}>
      <Box
        sx={{
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          backgroundColor: "#fff",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Box
          component="img"
          src={Icon404}
          alt="404 Error"
          sx={{
            height: { xs: 80, sm: 100 }, // Make the icon responsive
            width: { xs: 80, sm: 100 },
            marginBottom: 2,
          }}
        />
        <Typography component="p" variant="h6" gutterBottom color="primary">
          We can't seem to find the page you're looking for.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleGoBack}
          sx={{
            marginTop: 2,
            textTransform: "none",
            padding: "10px 20px",
          }}>
          Go Back Home
        </Button>
      </Box>
    </Container>
  );
};

export default ErrorPage;
