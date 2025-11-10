import { Avatar, Box, Button, ButtonGroup, Card, CardContent, IconButton, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import {
    FavoriteBorder as LikeIcon,
    ChatBubble as CommentIcon
} from "@mui/icons-material"
import { useNavigate } from "react-router";
export default function Post() {
    const navigate = useNavigate()
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent sx={{ display: "flex", gap: 2 }}>
        <Avatar sx={{ background: green[500], width: 64, height: 64 }}>
          A
        </Avatar>
        <Box>
          <Typography>Alice</Typography>
          <Typography sx={{ fontSize: 12, color: green[500]}}>A Few Minutes age</Typography>
          <Typography sx={{ mt: 1}} onClick={() => navigate('/show/123')}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ad
            quis voluptates error ipsam dolor alias accusantium quia ab
            repellat?
          </Typography>
          <Box sx={{ mt: 2, display: "flex", justifyContent: "space-around"}}>
            <ButtonGroup>
                <IconButton sx="sm" > 
                    <LikeIcon color="error"/>
                </IconButton>
                <Button sx="sm" variant="text">10</Button>
            </ButtonGroup>
            <ButtonGroup>
                <IconButton sx="sm">
                    <CommentIcon/>
                </IconButton>
                <Button sx="sm" variant="text">5</Button>
            </ButtonGroup>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
