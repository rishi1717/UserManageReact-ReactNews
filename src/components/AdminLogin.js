import React from "react"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
})
// const theme = createTheme()

function Login() {
	const handleSubmit = (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		console.log({
			adminid: data.get("adminid"),
			password: data.get("password"),
		})
	}

	return (
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
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}
					>
						<TextField
							margin="normal"
							required
							fullWidth
							id="adminid"
							label="Admin ID"
							name="adminid"
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
	)
}

export default Login
