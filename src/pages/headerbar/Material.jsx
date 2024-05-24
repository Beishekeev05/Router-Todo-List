import React, { useContext, useRef } from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Forma from "../../components/UI/Form";
import { MyContext } from "../../context/Context";
const Material = () => {
	const { createHandlerValue, open, onClose } = useContext(MyContext);

	const onSubmit = (dataValue) => {
		console.log(dataValue, "dataVa;ue");
		createHandlerValue(dataValue);
	};

	return (
		<Container>
			<Block>
				<Button onClick={onClose} variant="contained">
					{open ? "Close Modal App" : "Create new Student card"}
				</Button>
			</Block>
			{open ? (
				<Forma onSubmit={onSubmit} onClose={onClose} />
			) : (
				<Ttext>
					В правом верхнем углу есть кнопка нажмите на него что бы добавить
					новую информацию о студенте
				</Ttext>
			)}
		</Container>
	);
};

export default Material;
const Container = styled.div`
	width: 100%;
	height: 93vh;
	position: relative;
`;
const Block = styled.div`
	width: 150px;
	height: 40px;
	padding: 10px;
	float: right;
`;
const Ttext = styled.h1`
	font-family: monospace;
	font-weight: 900;
	position: absolute;
	top: 50%;
	left: 50%;
	text-decoration: underline;
	line-height: 40px;
	transform: translate(-50%, -50%);
`;
