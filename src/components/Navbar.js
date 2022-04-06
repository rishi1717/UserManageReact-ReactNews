import React from "react"
import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import NewspaperIcon from "@mui/icons-material/Newspaper"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

const Toast = Swal.mixin({
	background: "#1E1E1E",
	color: "white",
	toast: true,
	position: "top-end",
	showConfirmButton: false,
	timerProgressBar: true,
})

function Navbar(props) {
	const admin = props.admin || ""
	const user = props.user || ""
	let navbarRight
	const navigate = useNavigate()

	const logoHandler = () => {
		navigate("/")
	}

	if (props.adminNav) {
		if (admin) {
			navbarRight = (
				<Button
					sx={{ marginLeft: "auto" }}
					variant="outlined"
					color="inherit"
					size="small"
					onClick={() => {
						localStorage.removeItem("adminToken")
						navigate("/admin")
						Toast.fire({
							position: "bottom-right",
							icon: "success",
							title: "Logged out",
							showConfirmButton: false,
							timer: 3000,
						})
					}}
				>
					Logout
				</Button>
			)
		} else {
			navbarRight = <div></div>
		}
	} else {
		if (!user) {
			navbarRight = (
				<>
					<Button
						sx={{ marginLeft: "auto" }}
						variant="outlined"
						color="inherit"
						size="small"
						onClick={() => {
							navigate("/login")
						}}
					>
						Login
					</Button>
					<Button
						sx={{ marginLeft: "0.6rem" }}
						variant="outlined"
						color="inherit"
						size="small"
						onClick={() => {
							navigate("/register")
						}}
					>
						Register
					</Button>
				</>
			)
		} else {
			navbarRight = (
				<Button
					sx={{ marginLeft: "auto" }}
					variant="outlined"
					color="inherit"
					size="small"
					onClick={() => {
						localStorage.removeItem("token")
						navigate("/")
						Toast.fire({
							position: "bottom-right",
							icon: "success",
							title: "Logged out",
							showConfirmButton: false,
							timer: 3000,
						})
					}}
				>
					Logout
				</Button>
			)
		}
	}

	return (
		<div style={{ marginBottom: "5rem" }}>
			<AppBar sx={{ background: "black" }} position="fixed">
				<Toolbar>
					<NewspaperIcon onClick={logoHandler} />
					<Typography sx={{ marginLeft: "0.4rem" }}>React News</Typography>
					{navbarRight}
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default Navbar
