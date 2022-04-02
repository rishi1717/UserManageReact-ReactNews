import React from "react"
import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import NewspaperIcon from "@mui/icons-material/Newspaper"

function Navbar() {
	return (
		<div style={{marginBottom:'5rem'}}>
			<AppBar sx={{ background: "black" }} position="fixed">
				<Toolbar>
					<NewspaperIcon />
					<Typography sx={{ marginLeft: "0.4rem" }}> React News</Typography>
					<Button
						sx={{ marginLeft: "auto" }}
						variant="outlined"
						color="inherit"
						size="small"
					>
						Login
					</Button>
					<Button
						sx={{ marginLeft: "0.6rem" }}
						variant="outlined"
						color="inherit"
						size="small"
					>
						Register
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default Navbar
