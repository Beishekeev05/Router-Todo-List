import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { MyContext } from "../../context/Context";
const InfoStunedts = () => {
	const { data } = useContext(MyContext);
	const { id } = useParams();

	console.log(data.img, "img");
	console.log(id, "id");
	
	const student = data.find((item) => item.id === id);
	console.log(student);
	const navigate = useNavigate();

	return (
		<Container>
			<Card sx={{ width: "100%", maxWidth: 500 }}>
				<CardMedia
					sx={{ height: 400 }}
					image={student.img}
					title={student.name}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Name : {student.name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						City : {student.city}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Age : {student.age}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Gender : {student.gender}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" onClick={() => navigate(-1)}>
						Go Back
					</Button>
				</CardActions>
			</Card>
		</Container>
	);
};

export default InfoStunedts;
const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;
