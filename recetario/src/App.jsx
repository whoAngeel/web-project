import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import Nomatch from "./pages/404/Nomatch";
import SignUpPage from "./pages/SignUp";
import FormReceta from "./pages/MisRecetas/FormReceta.jsx";
import User from "./pages/MisRecetas/User";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/signup" element={<SignUpPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/" element={<Home />} />
				{/* <Route path="/sesion" element={ <Sesion/>} /> */}
				<Route path="*" element={<Nomatch />}></Route>
				<Route path="/mis-recetas" element={<User />} />
				<Route path="/mis-recetas/nueva-receta" element={<FormReceta />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
