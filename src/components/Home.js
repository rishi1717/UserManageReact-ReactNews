import React from "react"
import NewsCard from "./subComponents/NewsCard"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Navbar from "./Navbar"

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
})

function Home() {
	return (
		<>
			<Navbar />
			<ThemeProvider theme={darkTheme}>
				<NewsCard />
			</ThemeProvider>
		</>
	)
}

export default Home
