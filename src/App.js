import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Landing from "./components/Landing"
import Register from "./components/Register"
import AdminLogin from "./components/AdminLogin"
import AdminHome from "./components/AdminHome"

function App() {
	const login = <Login />
	const landing = <Landing />
	const register = <Register />
	const adminLogin = <AdminLogin />
	const adminHome = <AdminHome />
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" exact element={landing} />
					<Route path="/login" exact element={login} />
					<Route path="/register" exact element={register} />
					<Route path="/adminlogin" exact element={adminLogin} />
					<Route path="/adminhome" exact element={adminHome} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
