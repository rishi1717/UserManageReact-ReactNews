import React from "react"
import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Navbar from "./Navbar"
import RegisterForm from "./subComponents/RegisterForm"

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
})

export default function Register() {
	
	return (
		<>
			<Navbar />
			<ThemeProvider theme={darkTheme}>
				<Container component="main" maxWidth="sm">
					<CssBaseline />
					<Box
						sx={{
							marginTop: 15,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Typography component="h1" variant="h5">
							Register
						</Typography>
						<RegisterForm />
					</Box>
				</Container>
			</ThemeProvider>
		</>
	)
}

