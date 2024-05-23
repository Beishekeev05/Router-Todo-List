import React, { useContext } from "react";
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
			{open && <Forma onSubmit={onSubmit} onClose={onClose} />}
		</Container>
	);
};

export default Material;
const Container = styled.div`
	width: 100%;
	height: 93vh;
`;
const Block = styled.div`
	width: 150px;
	height: 40px;
	padding: 10px;
	float: right;
`;
