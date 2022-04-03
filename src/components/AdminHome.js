import React from "react"
import UserData from "./subComponents/UserData"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Box, Button, Container, TextField } from "@mui/material"
import Navbar from "./Navbar"

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
})

const handleSearch = (event) => {
	event.preventDefault()
	const data = new FormData(event.currentTarget)
	console.log(data.get("search"))
}

function AdminHome() {
	return (
		<>
			<Navbar adminNav={true}/>
			<ThemeProvider theme={darkTheme}>
				<Container maxWidth="md">
					<Box
						display="flex"
						justifyContent="center"
						component="form"
						onChange={handleSearch}
						noValidate
						sx={{ mt: 1, mb: 2 }}
					>
						<TextField
							margin="normal"
							fullWidth
							id="search"
							label="Search"
							name="search"
							autoFocus
							variant="standard"
							sx={{ width: "90%" }}
						/>
					</Box>
					<UserData />
					<Box
						display="flex"
						justifyContent="center"
						component="form"
						onSubmit={handleSearch}
						noValidate
						sx={{ mt: 1, mb: 2 }}
					>
						<Button variant="outlined" sx={{ mt: 5 }}>
							Add user
						</Button>
					</Box>
				</Container>
			</ThemeProvider>
		</>
	)
}

export default AdminHome
