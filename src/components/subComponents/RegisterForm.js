import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	maxWidth: 500,
	minWidth: 250,
	bgcolor: "background.paper",
	color: "white",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
}

export default function RegisterForm() {
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
			console.log(res.message)
			navigate("/login")
		} catch (error) {
			if (error.response) {
				setError(error.response.data.message)
			}
		}
	}

	return (
		<Box component="form" onSubmit={handleSubmit} noValidate sx={style}>
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
	)
}
