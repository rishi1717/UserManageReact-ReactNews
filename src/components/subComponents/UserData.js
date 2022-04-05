import React, { useEffect, useState } from "react"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Button, Container, TextField } from "@mui/material"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Swal from "sweetalert2"

const Toast = Swal.mixin({
	background: "#1E1E1E",
	color: "white",
	toast: true,
	position: "bottom-end",
	showConfirmButton: false,
	timerProgressBar: true,
})

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	minWidth: 250,
	maxWidth: 500,
	bgcolor: "black",
	color: "white",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
}

export default function UserData(props) {
	const navigate = useNavigate()
	const [users, setUsers] = useState([
		{
			email: "no emails found",
			name: "no users found",
			mobile: "no mobile found",
			id: "no id found",
		},
	])
	const [open, setOpen] = React.useState(false)
	const [error, setError] = useState("")
	const [data, setData] = useState({
		name: "",
		email: "",
		phone: "",
	})
	useEffect(() => {
		setUsers(props.users)
	}, [props.users])

	const handleOpen = (userId) => {
		setOpen(true)
		let obj = users.find((o) => o._id === userId)
		setData(obj)
	}
	const handleClose = () => setOpen(false)

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value })
	}

	const handleUpdate = async (event) => {
		event.preventDefault()
		try {
			const url = "http://localhost:8000/api/register"
			const { data: res } = await axios.put(url, data)
			console.log(res.message)
			navigate("/adminhome")
			setOpen(false)
			Toast.fire({
				position: "bottom-end",
				icon: "success",
				title: "User Updated",
				showConfirmButton: false,
				timer: 3000,
			})
			setUsers(res.users)
		} catch (error) {
			if (error.response) {
				setError(error.response.data.message)
			}
		}
	}

	const handleDelete = (userId) => {
		Swal.fire({
			title: "Are you sure?",
			text: "User details will be lost!",
			icon: "warning",
			background: "#1E1E1E",
			color: "white",
			showCancelButton: true,
			confirmButtonColor: "#380300",
			cancelButtonColor: "#072e00",
			confirmButtonText: "Delete!",
		}).then(async (result) => {
			if (result.isConfirmed) {
				let obj = users.find((o) => o._id === userId)
				console.log(obj)
				try {
					const url = "http://localhost:8000/api/register"
					const { data: res } = await axios.delete(url, { data: obj })
					console.log(res.message)
					setUsers(res.users)
					Toast.fire({
						position: "bottom-end",
						icon: "success",
						title: "User Deleted",
						showConfirmButton: false,
						timer: 3000,
					})
				} catch (error) {
					if (error.response) {
						setError(error.response.data.message)
					}
				}
			}
		})
	}

	return (
		<Container>
			{users.map((elem) => {
				return (
					<Accordion key={elem.email}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography>{elem.name}</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography component={'div'} >
								<Typography
									display="inline"
									sx={{ color: "#757272" }}
									fontWeight="fontWeightBold"
								>
									id :{" "}
								</Typography>
								{elem._id}
							</Typography>
							<Typography component={'div'} >
								<Typography display="inline" sx={{ color: "#757272" }} fontWeight="fontWeightBold">
									name :{" "}
								</Typography>
								{elem.name}
							</Typography>
							<Typography component={'div'} >
								<Typography display="inline" sx={{ color: "#757272" }} fontWeight="fontWeightBold">
									mobile :{" "}
								</Typography>
								{elem.phone}
							</Typography>
							<Typography component={'div'} >
								<Typography display="inline" sx={{ color: "#757272" }} fontWeight="fontWeightBold">
									email :{" "}
								</Typography>
								{elem.email}
							</Typography>
							<Container sx={{m:'1rem'}}>
								<Button
									sx={{
										float: "right",
										marginLeft: "0.4rem",
										marginBottom: "0.5rem",
									}}
									size="small"
									variant="outlined"
									onClick={() => handleOpen(elem._id)}
								>
									Update
								</Button>

								<Button
									sx={{
										float: "right",
										marginLeft: "0.4rem",
										marginBottom: "0.5rem",
									}}
									size="small"
									variant="outlined"
									color="error"
									onClick={() => handleDelete(elem._id)}
								>
									Delete
								</Button>
							</Container>
						</AccordionDetails>
						<Modal
							// keepMounted
							open={open}
							onClose={handleClose}
							aria-labelledby="keep-mounted-modal-title"
							aria-describedby="keep-mounted-modal-description"
						>
							<Box
								component="form"
								onSubmit={handleUpdate}
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
								{error && (
									<Typography sx={{ color: "red" }}>
										{error}
									</Typography>
								)}
								<Button
									type="submit"
									fullWidth
									variant="outlined"
									sx={{ mt: 3, mb: 2 }}
								>
									Update
								</Button>
							</Box>
						</Modal>
					</Accordion>
				)
			})}
		</Container>
	)
}
