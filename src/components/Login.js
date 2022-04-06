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
import { useForm } from "react-hook-form"

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
})
// const theme = createTheme()

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const [data, setData] = useState({ email: "", password: "" })
	const [error, setError] = useState("")

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value })
	}
	const navigate = useNavigate()
	const onSubmit = async (event) => {
		event.preventDefault()
		try {
			const url = "http://localhost:8000/api/login"
			const { data: res } = await axios.post(url, data)
			console.log(res.name)
			localStorage.setItem("token", res.user)
			localStorage.setItem("userName", res.name)
			navigate("/home")
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
							onSubmit={handleSubmit(onSubmit)}
							noValidate
							sx={{ mt: 1 }}
						>
							<TextField
								{...register("email", {
									required: "Provide your Email!",
									minLength: {
										value: 8,
										message: "Not a valid Email",
									},
									pattern: {
										value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
										message: "Not a valid Email",
									},
								})}
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
								error={!!errors?.email}
								helperText={errors?.email ? errors.email.message : null}
							/>
							<TextField
								{...register("password", {
									required: "Provide your password!",
								})}
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
								error={!!errors?.password}
								helperText={
									errors?.password ? errors.password.message : null
								}
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
