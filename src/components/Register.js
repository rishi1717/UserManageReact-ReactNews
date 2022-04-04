import React, { useState } from "react"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Navbar from "./Navbar"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
})

function Register() {
	const [error, setError] = useState("")
	const [data, setData] = useState({
		name: "",
		email: "",
		phone: "",
		password: "",
	})
	const navigate = useNavigate()

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value })
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		try {
			const url = "http://localhost:8000/api/register"
			const { data: res } = await axios.post(url, data)
			navigate("/login")
		} catch (error) {
			if (error.response) {
				setError(error.response.data.message)
			}
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
								onChange={handleChange}
								value={data.name}
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
								onChange={handleChange}
								value={data.email}
							/>
							<TextField
								margin="normal"
								fullWidth
								id="phone"
								label="Phone"
								name="phone"
								variant="standard"
								onChange={handleChange}
								value={data.phone}
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
