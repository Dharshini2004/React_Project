import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bgH from "../assets/images/logimg.gif";
import bgimg from "../assets/images/bgimg.webp";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState, forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";


const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

const boxstyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "85%",
    height: "80%",
    bgcolor: "background.paper",
    boxShadow: 24,
    marginTop: "30px",
};

const center = {
    position: "relative",
    top: "50%",
    left: "37%",
};

function Login() {
    const [open, setOpen] = useState(false);
    const [remember, setRemember] = useState(false);
    const vertical = "top";
    const horizontal = "right";
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        setOpen(true);
        event.preventDefault();
        // const data = new FormData(event.currentTarget);
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

    function TransitionLeft(props) {
        return <Slide {...props} direction="left" />;
    }

    return (
        <>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                TransitionComponent={TransitionLeft}
                anchorOrigin={{ vertical, horizontal }}
            >
                <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                    Yeah! Login Successfully
                </Alert>
            </Snackbar>
            <div
                style={{
                    backgroundImage: `url(${bgimg})`,
                    backgroundSize: "cover",
                    height: "100vh",
                    color: "#f5f5f5",
                }}
            >
                <Box sx={boxstyle}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Box
                                style={{
                                    backgroundImage: `url(${bgH})`,
                                    backgroundSize: "cover",
                                    marginTop: "60px",
                                    marginLeft: "15px",
                                    marginRight: "15px",
                                    height: "65vh",
                                    // minHeight: "500px",
                                    color: "#f5f5f5",
                                }}
                            ></Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box
                                style={{
                                    backgroundSize: "auto",
                                    height: "75%",
                                    minHeight: "450px",
                                    backgroundColor: "#3b33d5",
                                    marginTop: "30px",
                                }}
                            >
                                <ThemeProvider theme={darkTheme}>
                                    <Container>
                                        <Box height={35} />
                                        <Box sx={center}>
                                            <Avatar
                                                sx={{ ml: "35px", mb: "4px", bgcolor: "#ffffff" }}
                                            >
                                                <LockOutlinedIcon />
                                            </Avatar>
                                            <Typography component="h1" variant="h4">
                                                Sign In
                                            </Typography>
                                        </Box>
                                    </Container>
                                    <Container>
                                        <Box
                                            component="form"
                                            noValidate
                                            onSubmit={handleSubmit}
                                            sx={{ mt: 2 }}
                                        >
                                            <Grid container spacing={1}>
                                                <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        id="email"
                                                        label="Username"
                                                        name="email"
                                                        autoComplete="email"
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        name="password"
                                                        label="Password"
                                                        type="password"
                                                        id="password"
                                                        autoComplete="new-password"
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                                                    <Stack direction="row" spacing={2}>
                                                        <FormControlLabel
                                                            sx={{ width: "60%" }}
                                                            onClick={() => setRemember(!remember)}
                                                            control={<Checkbox checked={remember} />}
                                                            label="Remember me"
                                                        />
                                                        <Typography
                                                            variant="body1"
                                                            component="span"
                                                            onClick={() => {
                                                                navigate("/reset-password");
                                                            }}
                                                            style={{ marginTop: "10px", cursor: "pointer" }}
                                                        >
                                                            Forgot password?
                                                        </Typography>
                                                    </Stack>
                                                </Grid>
                                                <Grid item xs={12} sx={{ ml: "5em", mr: "5em" }}>
                                                    <Button
                                                        type="submit"
                                                        variant="contained"
                                                        fullWidth="true"
                                                        size="large"
                                                        sx={{
                                                            mt: "10px",
                                                            mr: "20px",
                                                            borderRadius: 28,
                                                            color: "#ffffff",
                                                            minWidth: "170px",
                                                            backgroundColor: "#FF9A01",
                                                        }}
                                                    >
                                                        Sign in
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                                                    <Stack direction="row" spacing={2}>
                                                        <Typography
                                                            variant="body1"
                                                            component="span"
                                                            style={{ marginTop: "10px" }}
                                                        >
                                                            Not registered yet?{" "}
                                                            <span
                                                                style={{ color: "#beb4fb", cursor: "pointer" }}
                                                                onClick={() => {
                                                                    navigate("/register");
                                                                }}
                                                            >
                                                                Create an Account
                                                            </span>
                                                        </Typography>
                                                    </Stack>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Container>
                                </ThemeProvider>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    );
}
export default Login