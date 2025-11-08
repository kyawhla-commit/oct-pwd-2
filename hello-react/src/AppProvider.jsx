import { createContext, useContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import App from "./App";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const AppContext = createContext();

const queryClient = new QueryClient();

export default function AppProvider() {
  // console.log("running create theme function ")
  const [mode, setMode] = useState("dark");

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
      },
    });
  }, [mode]);

  return (
    <AppContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <App />
          <CssBaseline />
        </QueryClientProvider>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
