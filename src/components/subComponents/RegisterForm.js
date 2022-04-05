import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Swal from "sweetalert2"

const Toast = Swal.mixin({
	background: "#1E1E1E",
	color: "white",
	toast: true,
	position: "top-end",
	showConfirmButton: false,
	timerProgressBar: true,
})

export default function RegisterForm(props) {
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
			if (props.admin) navigate("/login")
			else navigate("/adminhome")
			Toast.fire({
				position: "bottom-right",
				icon: "success",
				title: "user registered",
				showConfirmButton: false,
				timer: 3000,
			})
		} catch (error) {
			if (error.response) {
				setError(error.response.data.message)
			}
		}
	}

	return (
		<Box component="form" onSubmit={handleSubmit} noValidate>
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
				{props.heading}
			</Button>
		</Box>
	)
}
