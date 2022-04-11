import React, { useCallback, useEffect, useState } from "react"
import UserData from "./subComponents/UserData"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Box, Button, Container, Modal, TextField } from "@mui/material"
import Navbar from "./Navbar"
import UnauthorizedAdmin from "../components/subComponents/UnauthorizedAdmin"
import axios from "axios"
import Register from "./Register"

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
})

function AdminHome() {
	const [users, setUsers] = useState([
		{
			email: "no emails found",
			name: "no users found",
			mobile: "no mobile found",
			id: "no id found",
		},
	])

	const handleSearch = (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		axios
			.get(`http://localhost:8000/api/register?search=${data.get("search")}`)
			.then((data) => {
				setUsers(data.data.users)
			})
	}

	const [open, setOpen] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = useCallback(() => {
		setOpen(false)
		axios.get("http://localhost:8000/api/admin").then((data) => {
			setUsers(data.data.users)
		})
	}, [])

	useEffect(() => {
		axios.get("http://localhost:8000/api/admin").then((data) => {
			setUsers(data.data.users)
		})
	}, [handleClose])

	if (localStorage.getItem("adminToken")) {
		return (
			<>
				<Navbar adminNav={true} admin="admin" />
				<ThemeProvider theme={darkTheme}>
					<Container maxWidth="md">
						<Box
							display="flex"
							justifyContent="center"
							component="form"
							autoComplete="off"
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
						<UserData users={users} />
						<Box display="flex" justifyContent="center">
							<Button
								variant="outlined"
								sx={{ mt: 5 }}
								onClick={handleOpen}
							>
								Add user
							</Button>
							<Modal
								// keepMounted
								open={open}
								onClose={handleClose}
								aria-labelledby="keep-mounted-modal-title"
								aria-describedby="keep-mounted-modal-description"
							>
								<>
									<Register admin="true" heading="Add User" />
								</>
							</Modal>
						</Box>
					</Container>
				</ThemeProvider>
			</>
		)
	} else {
		return (
			<>
				<Navbar adminNav={true} />
				<ThemeProvider theme={darkTheme}>
					<UnauthorizedAdmin />
				</ThemeProvider>
			</>
		)
	}
}

export default AdminHome
