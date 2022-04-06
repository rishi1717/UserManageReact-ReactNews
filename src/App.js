import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Landing from "./components/Landing"
import Register from "./components/Register"
import Admin from "./components/Admin"
import Home from "./components/Home"

function App() {
	const login = <Login />
	const landing = <Landing />
	const register = <Register />
	const admin = <Admin />
	const home = <Home />
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" exact element={landing} />
					<Route path="/login" exact element={login} />
					<Route path="/home" exact element={home} />
					<Route path="/register" exact element={register} />
					<Route path="/admin" exact element={admin} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
