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

export default function Register(props) {
	
	return (
		<>
			{!props.admin && <Navbar />}
			<ThemeProvider theme={darkTheme}>
				<Container component="main" maxWidth="sm">
					<CssBaseline />
					<Box
						sx={{
							marginTop: 15,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							background:'black',
							color:'white',
							padding:'2rem 4rem'
						}}
					>
						<Typography component="h1" variant="h5">
							{props.heading ? props.heading : "Register"}
						</Typography>
						<RegisterForm
							heading={props.heading ? props.heading : "Register"}
						/>
					</Box>
				</Container>
			</ThemeProvider>
		</>
	)
}

