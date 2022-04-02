import React from "react"
import NewsCard from "./subComponents/NewsCard"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
})

function Home() {
	return (
		<ThemeProvider theme={darkTheme}>
			<NewsCard />
		</ThemeProvider>
	)
}

export default Home
