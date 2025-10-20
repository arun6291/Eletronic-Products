import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App.jsx";
import "./index.css"; // keep your global styles

// 1️⃣ Create a custom Material-UI theme
const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
        },
      },
    },
  },
});

// 2️⃣ Render your app with ThemeProvider
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* applies global typography + resets */}
      <App />
    </ThemeProvider>
  </StrictMode>
);
