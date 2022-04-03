import React from "react"
import Navbar from "./Navbar"
import LandingCard from "./subComponents/LandingCard"

const styles = {
	background: {
		height: "88vh",
		backgroundImage: `url("https://c1.wallpaperflare.com/preview/727/896/949/article-background-broadsheet-business.jpg")`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		color: "white",
	}
}
function Landing() {
	return (
		<>
			<Navbar />
			<div style={styles.background}>
				<LandingCard />
			</div>
		</>
	)
}

export default Landing