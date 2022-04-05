import React, { useEffect, useState } from "react"
import UserData from "./subComponents/UserData"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import {
	Box,
	Button,
	Container,
	Modal,
	TextField,
	Typography,
} from "@mui/material"
import Navbar from "./Navbar"
import UnauthorizedAdmin from "../components/subComponents/UnauthorizedAdmin"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	maxWidth: 600,
	minWidth: 250,
	bgcolor: "background.paper",
	color: "white",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
}

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
})

function AdminHome() {
	const navigate = useNavigate()
	const [error, setError] = useState("")
	const [data, setData] = useState({
		name: "",
		email: "",
		phone: "",
		password: "",
	})
	const [users, setUsers] = useState([
		{
			email: "no emails found",
			name: "no users found",
			mobile: "no mobile found",
			id: "no id found",
		},
	])
	useEffect(() => {
		axios.get("http://localhost:8000/api/admin").then((data) => {
			setUsers(data.data.users)
		})
	}, [])

	const handleSearch = (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		axios
			.get(`http://localhost:8000/api/register?search=${data.get("search")}`)
			.then((data) => {
				setUsers(data.data.users)
			})
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		try {
			const url = "http://localhost:8000/api/register"
			const { data: res } = await axios.post(url, data)
			console.log(res.message)
			navigate("/adminhome")
		} catch (error) {
			if (error.response) {
				setError(error.response.data.message)
			}
		}
	}

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value })
	}

	const [open, setOpen] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	if (localStorage.getItem("adminToken")) {
		return (
			<>
				<Navbar adminNav={true} admin="rishi" />
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
								keepMounted
								open={open}
								onClose={handleClose}
								aria-labelledby="keep-mounted-modal-title"
								aria-describedby="keep-mounted-modal-description"
							>
								<Box
									component="form"
									onSubmit={handleSubmit}
									noValidate
									sx={style}
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
										onChange={handleChange}
										value={data.name}
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
										Add
									</Button>
								</Box>
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
