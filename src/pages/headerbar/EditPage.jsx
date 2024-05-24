import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../../context/Context";
import Form from "../../components/UI/Form";
import styled from "styled-components";
const EditPage = () => {
	const { data, editModalHandler, onClose } = useContext(MyContext);
	const { id } = useParams();
	const user = data.find((item) => item.id === +id);
	const navigate = useNavigate();
	console.log(user);

	const onSubmit = (valueData) => {
		editModalHandler({ ...valueData, id });
	};
	const close = () => {
		onClose();
		navigate(-1);
	};
	return (
		<Container>
			<Form data={user || null} onClose={close} onSubmit={onSubmit} />
		</Container>
	);
};

export default EditPage;

const Container = styled.div`
	margin: 40px;
`;
