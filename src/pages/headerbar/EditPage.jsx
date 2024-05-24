import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../../context/Context";

const EditPage = () => {
	const { data } = useContext(MyContext);
	const { id } = useParams();
	const user = data.find((item) => item.id === +id);
	console.log(user);
  
	return <div>EditPage</div>;
};

export default EditPage;
