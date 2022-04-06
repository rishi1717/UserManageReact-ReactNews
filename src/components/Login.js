import React, { useState } from "react"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Navbar from "./Navbar"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
})
// const theme = createTheme()

function Login() {
	const [data, setData] = useState({ email: "", password: "" })
	const [error, setError] = useState("")

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value })
	}
	const navigate = useNavigate()
	const handleSubmit = async (event) => {
		event.preventDefault()
		try {
			const url = "http://localhost:8000/api/login"
			const { data: res } = await axios.post(url, data)
			console.log(res.name)
			localStorage.setItem("token", res.user)
			localStorage.setItem("userName", res.name)
			navigate('/home')
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message)
			}
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
								onChange={handleChange}
								value={data.email}
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
								onChange={handleChange}
								value={data.password}
							/>
							{error && (
								<Typography component="h1" variant="h5">
									{error}
								</Typography>
							)}
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
