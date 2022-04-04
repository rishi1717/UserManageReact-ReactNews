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

function Register() {
	const navigate = useNavigate()

	const handleSubmit = async (event) => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const dataObj = {
			name: formData.get("name"),
			email: formData.get("email"),
			password: formData.get("password"),
			phone: formData.get("phone"),
		}
		console.log(dataObj)

		try {
			await fetch("http://localhost:8000/api/register/", {
				method: "POST",
				headers: {
					"content-Type": "application/json",
				},
				body: JSON.stringify(dataObj),
			})
			navigate("/login")
		} catch (e) {
			alert(e.message)
		}
	}

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
								id="name"
								label="Name"
								name="name"
								autoFocus
								variant="standard"
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								variant="standard"
							/>
							<TextField
								margin="normal"
								fullWidth
								id="phone"
								label="Phone"
								name="phone"
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
								Register
							</Button>
						</Box>
					</Box>
				</Container>
			</ThemeProvider>
		</>
	)
}

export default Register
