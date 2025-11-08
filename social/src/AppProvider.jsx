import { createContext, useContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import App from "./App";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Show from "./pages/Show";
const AppContext = createContext();

const queryClient = new QueryClient();

import { createBrowserRouter, RouterProvider } from "react-router";

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
         {
            path: "/",
            Component: Posts,
        },
         {
            path: "/login",
            Component: Login,
        },
         {
            path: "/register",
            Component: Register,
        },
         {
            path: "/profile",
            Component: Profile,
        },
         {
            path: "/Show/:id",
            Component: Show,
        },
        ,
    ]
       
    
  },
]);

export default function AppProvider() {
  // console.log("running create theme function ")
  const [mode, setMode] = useState("dark");
  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
      },
    });
  }, [mode]);

  return (
    <AppContext.Provider value={{ mode, setMode, openDrawer, setOpenDrawer }}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />,
          <CssBaseline />
        </QueryClientProvider>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
