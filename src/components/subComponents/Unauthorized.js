import * as React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { Button, Container } from "@mui/material"
import { useNavigate } from "react-router-dom"

export default function Unauthorized() {
    const navigate = useNavigate()
	return (
		<Box sx={{ maxWidth: 600, pt: "7rem", margin: "auto" }}>
			<Card sx={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
				<Container>
					<CardContent sx={{ minHeight: "5rem" }}>
						<Typography sx={{ textAlign: "center", mb: "0.5rem" }}>
							Unauthorized
						</Typography>
						<Typography
							sx={{ fontSize: 22, padding: "2rem", textAlign:'center' }}
							color="text.white"
							gutterBottom
						>
							You are unauthorized to access this page!
						</Typography>
					</CardContent>
				</Container>
			</Card>
			<Container sx={{ textAlign: "center" }}>
				<Button
					color="warning"
					sx={{
						margin: "1rem",
						marginLeft: "0.4rem",
						marginTop: "2rem",
					}}
					size="small"
					variant="contained"
					onClick={() => {
						navigate("/login")
					}}
				>
					Login to access our website
				</Button>
			</Container>
		</Box>
	)
}
