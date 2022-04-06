import React from "react"
import AdminHome from "./AdminHome"
import AdminLogin from "./AdminLogin"

function Admin() {
	if (localStorage.getItem("adminToken")) {
		return (
			<>
				<AdminHome/>
			</>
		)
	} else {
		return (
			<>
				<AdminLogin />
			</>
		)
	}
}

export default Admin
