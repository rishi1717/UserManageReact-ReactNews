import React from "react"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom"

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
})
// const theme = createTheme()

function Login() {
	const navigate = useNavigate()
	const handleSubmit = async (event) => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const dataObj = {
			email: formData.get("email"),
			password: formData.get("password"),
		}
		console.log(dataObj)
		try{
			const respose = await fetch("http://localhost:8000/api/login", {
				method: "POST",
				headers: {
					"content-Type": "application/json",
				},
				body: JSON.stringify(dataObj),
			})
			const data = await respose.json()

			if (data.user) {
				localStorage.setItem('token',data.user)
				navigate('/home')
			} else {
				alert("Please check your username or password")
			}
		}catch(err){
			alert(err.message)
		}
	}

	return (
		<>
			<Navbar />
			<ThemeProvider theme={darkTheme}>
				<Container component="main" maxWidth="md">
					<CssBaseline />
					<Box
						sx={{
							marginTop: 20,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Typography component="h1" variant="h5">
							Log in
						</Typography>
						<Box
							component="form"
							onSubmit={handleSubmit}
							noValidate
							sx={{ mt: 1 }}
						>
							<TextField
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoFocus
								variant="standard"
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								variant="standard"
							/>
							<Button
								type="submit"
								fullWidth
								variant="outlined"
								sx={{ mt: 3, mb: 2 }}
							>
								Sign In
							</Button>
						</Box>
					</Box>
				</Container>
			</ThemeProvider>
		</>
	)
}

export default Login
