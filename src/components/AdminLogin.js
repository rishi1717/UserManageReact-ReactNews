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

function AdminLogin() {
	const navigate = useNavigate()
	const [data, setData] = useState({ adminid: "", password: "" })
	const [error, setError] = useState("")

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value })
	}
	const onSubmit = async (event) => {
		try {
			const url = "http://localhost:8000/api/admin"
			const { data: res } = await axios.post(url, data)
			console.log(res)
			localStorage.setItem("adminToken", res.admin)
			navigate("/adminhome")
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

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	return (
		<>
			<Navbar adminNav={true} />
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
							Admin
						</Typography>
						<Box
							component="form"
							onSubmit={handleSubmit(onSubmit)}
							noValidate
							sx={{ mt: 1 }}
						>
							<TextField
								{...register("adminid", {
									required: "Provide your adminId!",
								})}
								margin="normal"
								required
								fullWidth
								id="adminid"
								label="Admin ID"
								name="adminid"
								autoFocus
								variant="standard"
								onChange={handleChange}
								value={data.adminid}
								error={!!errors?.adminid}
								helperText={
									errors?.adminid ? errors.adminid.message : null
								}
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
							{error && <Typography color="red">{error}</Typography>}
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

export default AdminLogin
