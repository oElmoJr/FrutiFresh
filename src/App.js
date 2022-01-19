import AppRoutes from "./routes";
import { ThemeProvider } from "@mui/material";
import theme from "./themes/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
