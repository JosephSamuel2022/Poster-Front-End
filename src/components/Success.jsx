import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Success = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const usertId = sessionStorage.getItem("userId");
		if (!usertId) {
			navigate("/");
		}
	}, [navigate]);

	const handleBack = () => {
		sessionStorage.setItem("userId", 1);
		navigate("/poster");
	};

	return (
		<div className='center'>
			<h2>Thank You!</h2>
			<p>Your submission was successful.</p>
			<button className='button' onClick={handleBack}>
				Back to Poster
			</button>
		</div>
	);
};

export default Success;
