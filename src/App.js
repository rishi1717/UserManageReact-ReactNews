import "./App.css"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Landing from "./components/Landing"
import Home from "./components/Home"
import AdminHome from "./components/AdminHome"
import AdminLogin from "./components/AdminLogin"
import Register from "./components/Register"

function App() {
	const login = <Login />
	const landing = <Landing />
  const register = <Register/>
  const home = <Home/>
  const adminlogin = <AdminLogin/>
  const adminhome = <AdminHome/>  
	return (
		<>
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path="/" exact element={landing} />
					<Route path="/login" exact element={login} />
					<Route path="/register" exact element={register} />
					<Route path="/home" exact element={home} />
					<Route path="/adminlogin" exact element={adminlogin} />
					<Route path="/adminhome" exact element={adminhome} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
