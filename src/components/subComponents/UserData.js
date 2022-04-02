import * as React from "react"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Button, Container } from "@mui/material"

export default function UserData() {
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
									sx={{ float: "right", marginLeft:'0.4rem', marginBottom:'0.5rem' }}
									size="small"
									variant="outlined"
								>
									Update
								</Button>
								<Button
									sx={{ float: "right", marginLeft:'0.4rem', marginBottom:'0.5rem' }}
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
