import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
export default function Comment() {
  return (
    <Box  sx={{ mb: 2, border: "1px solid #88888826", padding: 2,  }}>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Avatar sx={{ background: green[500], width: 64, height: 64 }}>
          B
        </Avatar>
        <Box>
          <Typography>Bob</Typography>
          <Typography sx={{ fontSize: 12, color: green[500]}}>A Few Minutes age</Typography>
          <Typography sx={{ mt: 1}} >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ad
            quis voluptates error ipsam dolor alias accusantium quia ab
            repellat?
          </Typography>
         
        </Box>
      </Box>
    </Box>
  );
}
