import { createContext, useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import App from "./App";

const AppContext = createContext()

export default function AppProvider( ) {
    const theme = createTheme({
        palette: {
            mode: "dark",
        }
    });

    return (
        <AppContext.Provider value={{}}>
            <ThemeProvider>
                <App/>
                <CssBaseline/>
            </ThemeProvider>
        </AppContext.Provider>
    )
}

export function useApp() {
    return useContext(AppContext);
}