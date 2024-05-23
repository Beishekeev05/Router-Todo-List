import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const Anouncements = () => {
	const navigate = useNavigate();
	return (
		<div>
			<h1>Anouncement Page</h1>
			<Button onClick={() => navigate("/courses/students")} variant="contained">
				Go to Student Page
			</Button>
		</div>
	);
};

export default Anouncements;
