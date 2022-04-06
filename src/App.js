import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Landing from "./components/Landing"
import Register from "./components/Register"
import Admin from "./components/Admin"

function App() {
	const login = <Login />
	const landing = <Landing />
  const register = <Register/>
  const admin = <Admin />
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" exact element={landing} />
					<Route path="/login" exact element={login} />
					<Route path="/register" exact element={register} />
					<Route path="/admin" exact element={admin} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
