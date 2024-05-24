import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { MyContext } from "../../context/Context";

const Students = () => {
	const { data } = useContext(MyContext);
	const navigate = useNavigate();
	return (
		<Container>
			<Button
				onClick={() => navigate("/courses/material")}
				sx={{ position: "fixed", right: 50 }}
				variant="contained">
				Go to create page
			</Button>
			{data.map((item) => (
				<Card key={item.id} sx={{ width: 345,height:430 }}>
					<CardMedia
						component="img"
						sx={{ height: 250 }}
						image={item.img}
						title={item.name}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							Name : {item.name}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							City : {item.city}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Age : {item.age}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Gender : {item.gender}
						</Typography>
					</CardContent>
					<CardActions>
						<NavLink to={`${item.id}/info`}>
							<Button size="small">Learn More</Button>
						</NavLink>
					</CardActions>
				</Card>
			))}
		</Container>
	);
};

export default Students;
const Container = styled.div`
	width: 100%;
	height: 90vh;
	overflow: hidden;
	overflow-y: scroll;
	padding: 10px;
	display: flex;
	position: relative;
	flex-wrap: wrap;
	gap: 2.5rem;
	justify-content: center;
`;
