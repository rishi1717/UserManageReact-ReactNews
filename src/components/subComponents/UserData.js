import * as React from "react"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Button, Container, TextField } from "@mui/material"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	minWidth: 250,
	maxWidth: 500,
	bgcolor: "background.paper",
	color: "white",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
}

export default function UserData() {
	const [open, setOpen] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
	let arr = [1, 2, 3, 4, 5]
	return (
		<Container>
			{arr.map((elem) => {
				return (
					<Accordion key={elem}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography>User</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>name: {elem}</Typography>
							<Typography>mobile: {elem}</Typography>
							<Typography>email: {elem}</Typography>
							<Container>
								<Button
									sx={{
										float: "right",
										marginLeft: "0.4rem",
										marginBottom: "0.5rem",
									}}
									size="small"
									variant="outlined"
									onClick={handleOpen}
								>
									Update
								</Button>
								<Modal
									// keepMounted
									open={open}
									onClose={handleClose}
									aria-labelledby="keep-mounted-modal-title"
									aria-describedby="keep-mounted-modal-description"
								>
									<Box
										component="form"
										onSubmit={""}
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
										/>
										<TextField
											margin="normal"
											required
											fullWidth
											id="email"
											label="Email Address"
											name="email"
											variant="standard"
										/>
										<TextField
											margin="normal"
											fullWidth
											id="Phone"
											label="Phone"
											name="Phone"
											variant="standard"
										/>
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
								<Button
									sx={{
										float: "right",
										marginLeft: "0.4rem",
										marginBottom: "0.5rem",
									}}
									size="small"
									variant="outlined"
									color="error"
								>
									Delete
								</Button>
							</Container>
						</AccordionDetails>
					</Accordion>
				)
			})}
		</Container>
	)
}
