// LoginPage.js
import React, { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
function LoginPage() {
	const navigate = useNavigate();
	const [password, setPassword] = useState("");

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const correctPassword = import.meta.env.VITE_PASSWORD;

	const [error, setError] = useState("");

	const handleLogin = () => {
		if (password === correctPassword) {
			sessionStorage.setItem("userId", 1);

			navigate("/poster");
		} else {
			setError("Wrong password");
		}
	};

	return (
		<div className='login-container'>
			<h1>Login</h1>
			<input
				type='password'
				placeholder='Password'
				value={password}
				onChange={handlePasswordChange}
			/>
			<button className='button' onClick={handleLogin}>
				Login
			</button>
			{error && <div style={{ color: "red" }}>{error}</div>}
		</div>
	);
}

export default LoginPage;
