import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Notifications as NotiIcon,
  LightMode as LightModeIcon, 
  DarkMode as DarkModeIcon
} from "@mui/icons-material";
import { useApp } from "../AppProvider";
export default function Header() {
      const { mode, setMode, setOpenDrawer} = useApp();

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: 2}}>
          <Typography>Social</Typography>
          <IconButton color="inherit" onClick={()=> setOpenDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Box>
        <Box>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <NotiIcon />
          </IconButton>
          {
                    mode === "dark" ? (
                        <IconButton color="inherit" onClick={() => setMode("light")}>
                            <LightModeIcon/>
                        </IconButton>
                    ): (
                        <IconButton color="inherit" onClick={() => setMode("dark")}>
                            <DarkModeIcon/>
                        </IconButton>
                    )
                }
        </Box>
      </Toolbar>
    </AppBar>
  );
}
