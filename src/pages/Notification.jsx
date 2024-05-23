import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const Notification = () => {
	const navigation = useNavigate();
	return (
		<div>
			<h1> Notification Page</h1>
			<br />
			<Button onClick={() => navigation("/anouncements")} variant="contained">
				Go to Anouncement Page
			</Button>
		</div>
	);
};

export default Notification;
