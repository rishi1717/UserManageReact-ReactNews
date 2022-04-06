import { ThemeProvider } from "@emotion/react"
import { createTheme } from "@mui/material"
import React from "react"
import Navbar from "./Navbar"
import LandingCard from "./subComponents/LandingCard"
import NewsCard from "./subComponents/NewsCard"

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
})

const styles = {
	background: {
		height: "88vh",
		backgroundImage: `url("https://c1.wallpaperflare.com/preview/727/896/949/article-background-broadsheet-business.jpg")`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		color: "white",
	},
}
function Landing() {
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
				<div style={styles.background}>
					<LandingCard />
				</div>
			</>
		)
	}
}

export default Landing
