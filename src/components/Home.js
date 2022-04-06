import React from "react"
import NewsCard from "./subComponents/NewsCard"
import Unauthorized from "./subComponents/Unauthorized"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Navbar from "./Navbar"

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
})

function Home() {
	
	if (localStorage.getItem("token")) {
		return (
			<>
				<Navbar user="rishi" />
				<ThemeProvider theme={darkTheme}>
					<NewsCard />
				</ThemeProvider>
			</>
		)
	} else {
		return (
			<>
				<Navbar />
				<ThemeProvider theme={darkTheme}>
					<Unauthorized />
				</ThemeProvider>
			</>
		)
	}
}

export default Home
