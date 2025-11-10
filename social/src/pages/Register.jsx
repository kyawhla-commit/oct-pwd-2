import { Box, Typography, OutlinedInput, Button } from "@mui/material";

export default function Register() {
   return <Box>
        <Typography variant="h3" sx={{ mb: 4}}>Register</Typography>
        <form >
            <OutlinedInput fullWidth placeholder="name" sx={{mb: 2}}></OutlinedInput>
            <OutlinedInput fullWidth placeholder="username" sx={{mb: 2}}></OutlinedInput>
            <OutlinedInput fullWidth placeholder="bio" sx={{mb: 2}}></OutlinedInput>
            <OutlinedInput fullWidth type="password" placeholder="password" sx={{mb: 2}}></OutlinedInput>
            <Button fullWidth variant="contained">Register</Button>
        </form>
    </Box>
}