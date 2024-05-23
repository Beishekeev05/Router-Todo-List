import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Schedule = () => {
	const navigate = useNavigate();

	return (
		<div>
			<h1>Schedule Page</h1>
			<br />
			<Button onClick={() => navigate("/notification")} variant="contained">
				Go to Notification Page
			</Button>
		</div>
	);
};

export default Schedule;
