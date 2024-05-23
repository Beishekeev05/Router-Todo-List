import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NotFoundPage = () => {
	const navigate = useNavigate();

	const handleGoHome = () => {
		navigate("/");
	};

	const handleGoBack = () => {
		navigate(-1);
	};

	return (
		<Container>
			<Title>404 - Page Not Found</Title>
			<Text>Sorry, the page you are looking for does not exist.</Text>
			<ButtonContainer>
				<Button onClick={handleGoHome}>Go to Home</Button>
				<Button onClick={handleGoBack}>Go Back</Button>
			</ButtonContainer>
		</Container>
	);
};

export default NotFoundPage;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background-color: #f8f9fa;
`;

const Title = styled.h1`
	font-size: 3rem;
	color: #343a40;
`;

const Text = styled.p`
	font-size: 1.25rem;
	color: #6c757d;
	margin-bottom: 2rem;
`;

const ButtonContainer = styled.div`
	display: flex;
	gap: 1rem;
`;

const Button = styled.button`
	padding: 0.75rem 1.5rem;
	font-size: 1rem;
	color: #fff;
	background-color: #007bff;
	border: none;
	border-radius: 0.25rem;
	cursor: pointer;
	transition: background-color 0.3s;

	&:hover {
		background-color: #0056b3;
	}
`;
