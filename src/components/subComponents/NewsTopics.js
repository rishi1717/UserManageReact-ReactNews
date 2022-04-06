import { useEffect, useState } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { CardActionArea } from "@mui/material"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import axios from "axios"

export default function NewsTopics(props) {
	const [articles, setArticles] = useState([])

	useEffect(() => {
		async function getNews() {
			const data = await axios.get(
				`https://newsapi.org/v2/everything?q=${props.topic}&sortBy=popularity&apiKey=5d9cae80086b47fda1a1bffac2de64ce`
			)
			setArticles(data.data.articles)
		}
		getNews()
	}, [props.topic])

	return (
		<Container component="main">
			<Box sx={{ flexGrow: 1 }}>
				<Typography variant="h4" sx={{ marginTop: "2rem", color: "white" }}>
					{props.topic} News
				</Typography>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					{articles.map((article) => {
						// console.log(article)
						return (
							<Grid item xs={4} sm={4} md={4} lg={3} key={article.url}>
								<Card sx={{ height: "27rem", marginTop: "1rem" }}>
									<CardActionArea>
										<CardMedia
											component="img"
											height="140"
											image={article.urlToImage}
											alt="Article Image"
										/>
										<CardContent>
											<Typography
												gutterBottom
												variant="h5"
												component="div"
											>
												{article.title}
											</Typography>
											<Typography
												variant="body2"
												color="text.secondary"
											>
												{article.content}
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
							</Grid>
						)
					})}
				</Grid>
			</Box>
		</Container>
	)
}
