import React, { createContext, useState } from "react";

const MyContext = createContext();

const ContextProvaider = ({ children }) => {
	const [data, setData] = useState([
		{
			img: "https://cdn.regnum.ru/uploads/pictures/news/2020/11/15/regnum_picture_1605470762142034_big.jpg",
			gender: "female",
			city: "Talas",
			age: "39",
			name: "Gal Gadot",
			id: 1,
		},
		{
			img: "https://www.proficinema.com/upload/iblock/885/885fa8ccfe92273fb8f19c104ca1c586.jpg",
			gender: "female",
			city: "Talas",
			age: "34",
			name: "Scarlet Yohanson",
			id: 2,
		},
		{
			img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/d91cf99a-63a2-432a-a72b-ae0b8c6ea1d6/220x330",
			gender: "female",
			city: "Talas",
			age: "54",
			name: "Andjelina Jolly",
			id: 3,
		},
		{
			img: "https://www.film.ru/sites/default/files/people/1556329-1377655.jpg",
			gender: "female",
			city: "Talas",
			age: "35",
			name: "Ember Herts",
			id: 4,
		},
		{
			img: "https://www.hdclub.ua/files/people/medium/mediumi5aa9ac470c217.jpg",
			gender: "female",
			city: "Talas",
			age: "44",
			name: "Sharlis Teron",
			id: 5,
		},
	]);
	const [open, setOpen] = useState(false);

	const onClose = () => {
		setOpen((prev) => !prev);
	};

	const createHandlerValue = (param) => {
		setData((prevState) => [...prevState, param]);
	};

	return (
		<MyContext.Provider value={{ createHandlerValue, onClose, data, open }}>
			{children}
		</MyContext.Provider>
	);
};

export { ContextProvaider, MyContext };
