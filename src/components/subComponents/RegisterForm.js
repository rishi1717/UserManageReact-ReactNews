import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Swal from "sweetalert2"
import { useForm } from "react-hook-form"

const Toast = Swal.mixin({
	background: "#1E1E1E",
	color: "white",
	toast: true,
	position: "top-end",
	showConfirmButton: false,
	timerProgressBar: true,
})

export default function RegisterForm(props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
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

	const onSubmit = async (event) => {
		try {
			const url = "http://localhost:8000/api/register"
			const { data: res } = await axios.post(url, data)
			console.log(res.message)
			if (props.admin) navigate("/adminhome")
			else navigate("/login")
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
		<Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
			<TextField
				{...register("name", {
					required: "Provide your name!",
					minLength: {
						value: 2,
						message: "Atleast 2 characters required",
					},
				})}
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
				error={!!errors?.name}
				helperText={errors?.name ? errors.name.message : null}
			/>
			<TextField
				{...register("email", {
					required: "Provide your Email!",
					minLength: { value: 8, message: "Not a valid Email" },
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
				variant="standard"
				onChange={handleChange}
				value={data.email}
				error={!!errors?.email}
				helperText={errors?.email ? errors.email.message : null}
			/>
			<TextField
				{...register("phone", {
					required: "Provide your phone no!",
					minLength: { value: 9, message: "Not a valid phone number" },
					maxLength: { value: 12, message: "Not a valid phone number" },
				})}
				margin="normal"
				fullWidth
				required
				id="phone"
				label="Phone"
				name="phone"
				variant="standard"
				onChange={handleChange}
				value={data.phone}
				error={!!errors?.phone}
				helperText={errors?.phone ? errors.phone.message : null}
			/>
			<TextField
				{...register("password", {
					required: "Provide a password!",
					minLength: { value: 8, message: "Atleast 8 charecters" },
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
				helperText={errors?.password ? errors.password.message : null}
			/>
			{error && <Typography sx={{ color: "red" }}>{error}</Typography>}
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
