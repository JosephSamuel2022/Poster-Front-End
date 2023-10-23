import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // Import your CSS file
import LoginPage from "./components/LoginPage";
import { Routes, Route } from "react-router-dom";
import Poster from "./components/Poster";
import Success from "./components/Success";
function App() {
	return (
		<Routes>
			<Route path='/' element={<LoginPage />} />
			<Route path='/poster' element={<Poster />} />
			<Route path='/success' element={<Success />} />
		</Routes>
	);
}

export default App;
