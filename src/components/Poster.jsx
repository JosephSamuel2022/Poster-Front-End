import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css"; // Import your CSS file

function Poster() {
	const navigate = useNavigate();
	useEffect(() => {
		const usertId = sessionStorage.getItem("userId");
		if (!usertId) {
			navigate("/");
		}
	}, [navigate]);

	const [selectedImage, setSelectedImage] = useState(null);
	const [text, setText] = useState("");

	const handleImageChange = (event) => {
		setSelectedImage(event.target.files[0]);
	};

	const handleTextChange = (event) => {
		setText(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault(); // Prevent the default form submission behavior

		if (!selectedImage || !text) {
			alert("Both an image and text are required to submit.");
			return; // Exit the function without making the request
		}

		try {
			const formData = new FormData();
			formData.append("file", selectedImage);
			formData.append("text", text);

			const response = await axios.post(
				"https://poster-api-tcvz.onrender.com",
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);

			// Handle the response from the server
			console.log(response.data);
		} catch (error) {
			// Handle any errors
			console.error(error);
		}
		navigate("/success");
	};

	return (
		<div className='App'>
			<h1>Image and Text Uploader</h1>
			<form onSubmit={handleSubmit}>
				<div className='upload-container'>
					<input
						type='file'
						onChange={handleImageChange}
						accept='image/*' // Optionally restrict file types to images
					/>

					<textarea
						placeholder='Enter text (multiline)'
						value={text}
						onChange={handleTextChange}
					/>
				</div>
				<button className='button' type='submit'>
					Submit
				</button>
			</form>
			<div>
				<h2>Preview</h2>
				{selectedImage && (
					<img src={URL.createObjectURL(selectedImage)} alt='Preview' />
				)}
				<p className='preview-text'>{text}</p>
			</div>
		</div>
	);
}

export default Poster;
