import React, { useEffect } from "react"
import NewsCard from "./subComponents/NewsCard"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Navbar from "./Navbar"
import jwtDecode from "jwt-decode"
import { useNavigate } from "react-router-dom"

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
})

function Home() {
	const navigate = useNavigate()
	useEffect(() => {
		const token = localStorage.getItem("token")
		if (token) {
			const user = jwtDecode(token)
			if (!user) {
				localStorage.removeItem("token")
				navigate("/login")
			} else {
				console.log('used effect');
			}
		}
	}, [navigate])
	return (
		<>
			<Navbar user="rishi"/>
			<ThemeProvider theme={darkTheme}>
				<NewsCard />
			</ThemeProvider>
		</>
	)
}

export default Home
