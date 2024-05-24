import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Forma = ({ onSubmit, onClose, data }) => {
	const [name, setName] = useState("");
	const [gender, setGender] = useState("");
	const [city, setCity] = useState("");
	const [age, setAge] = useState("");
	const [img, setImg] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		setName(data.name);
		setGender(data.gender);
		setCity(data.city);
		setAge(data.age);
		setImg(data.img);
	}, [data]);

	const submitHandler = (e) => {
		e.preventDefault();

		const newValue = {
			img,
			name,
			gender,
			city,
			age,
			id: Math.floor(Math.random() * 1000),
		};

		console.log(newValue);

		onSubmit(newValue);
		setAge("");
		setCity("");
		setGender("");
		setImg("");
		setName("");
		onClose();
		navigate("/courses/students");
	};

	return (
		<Container>
			<FormContainer onSubmit={submitHandler}>
				<FormTitle>Добавить информацию о студенте</FormTitle>
				<FormGroup>
					<Label htmlFor="photo">Фото:</Label>
					<Input
						onChange={(e) => setImg(e.target.value)}
						type="url"
						id="photo"
						name="photo"
						value={img}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="name">Имя:</Label>
					<Input
						onChange={(e) => setName(e.target.value)}
						type="text"
						id="name"
						name="name"
						value={name}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="gender">Гендер:</Label>
					<Select
						onChange={(e) => setGender(e.target.value)}
						id="gender"
						value={gender}
						name="gender">
						<option value="male">Гендер</option>
						<option value="male">Мужской</option>
						<option value="female">Женский</option>
						<option value="other">Другой</option>
					</Select>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="city">Город:</Label>
					<Input
						value={city}
						onChange={(e) => setCity(e.target.value)}
						type="text"
						id="city"
						name="city"
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="age">Возраст:</Label>
					<Input
						onChange={(e) => setAge(e.target.value)}
						type="number"
						id="age"
						value={age}
						name="age"
					/>
				</FormGroup>
				<Button variant="contained" type="submit">
					Contained
				</Button>
				<Button
					sx={{ marginLeft: "10px" }}
					onClick={onClose}
					variant="contained"
					type="button">
					Cancel
				</Button>
			</FormContainer>
		</Container>
	);
};

export default Forma;

const Container = styled.div`
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #f9f9f9;
`;

const FormContainer = styled.form`
	width: 400px;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	background-color: #fff;
`;

const FormTitle = styled.h2`
	text-align: center;
	margin-bottom: 20px;
`;

const FormGroup = styled.div`
	margin-bottom: 15px;
`;

const Label = styled.label`
	display: block;
	margin-bottom: 5px;
	font-weight: bold;
`;

const Input = styled.input`
	width: 100%;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
`;

const Select = styled.select`
	width: 100%;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
`;

const SubmitButton = styled.button`
	width: 100%;
	padding: 10px;
	border: none;
	border-radius: 5px;
	background-color: #007bff;
	color: white;
	font-size: 16px;
	cursor: pointer;

	&:hover {
		background-color: #0056b3;
	}
`;
