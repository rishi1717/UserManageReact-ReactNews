import React, { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { Button, Container } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
})

export default function LandingCard() {
	const [isLoading, setLoading] = useState(true)
	const [ran,setRan] = useState(0)
	const [articles, setArticles] = useState([])
	useEffect(() => {
		try {
			async function getNews() {
				const data = await axios.get(
					`https://newsapi.org/v2/everything?q=world&sortBy=popularity&apiKey=5d9cae80086b47fda1a1bffac2de64ce`
				)
				setArticles(data.data.articles)
				setLoading(false)
			}
			getNews()
		} catch (error) {
			console.log(error.message)
		}
	}, [])

	const navigate = useNavigate()
	const nextHandler = () => {
		let n = Math.floor(Math.random() * articles.length)
		console.log(n);
		setRan(n)
	}

	if (isLoading) {
		return <div className="App">Loading...</div>
	} else
		return (
			<ThemeProvider theme={darkTheme}>
				<Box sx={{ maxWidth: 600, pt: "7rem", margin: "auto" }}>
					<Card sx={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
						<Container>
							<CardContent sx={{ minHeight: "15rem" }}>
								<Typography sx={{ textAlign: "center", mb: "0.5rem" }}>
									News Highlight
								</Typography>
								<Typography
									sx={{ fontSize: 22, padding: "0.5rem" }}
									color="text.white"
									gutterBottom
								>
									{articles ? articles[ran].title : ""} "
								</Typography>
								<Typography variant="body1" color="text.secondary">
									{articles ? articles[ran].description : ""}
								</Typography>
								<Container>
									<Button
										sx={{
											float: "right",
											margin: "1rem 0rem",
											padding: "1rem",
										}}
										size="small"
										variant="text"
										onClick={nextHandler}
									>
										Next
									</Button>
								</Container>
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
								navigate("/register")
							}}
						>
							Be a member to access our website
						</Button>
					</Container>
				</Box>
			</ThemeProvider>
		)
}
