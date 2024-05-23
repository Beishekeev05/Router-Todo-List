import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const Baselayout = () => {
	return (
		<Container>
			<Nav>
				<StyledNavLink to={"courses"}>Courses</StyledNavLink>
				<StyledNavLink to={"anouncements"}>Anouncements</StyledNavLink>
				<StyledNavLink to={"notification"}>Notification</StyledNavLink>
				<StyledNavLink to={"schedule"}>Schedule</StyledNavLink>
			</Nav>
			<Content>
				<Outlet />
			</Content>
		</Container>
	);
};

export default Baselayout;

const Container = styled.div`
	display: flex;
	height: 100vh;
`;

const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	width: 200px;
	background-color: #343a40;
	padding: 20px;
`;

const StyledNavLink = styled(NavLink)`
	color: #fff;
	text-decoration: none;
	margin-bottom: 10px;
	padding: 10px;
	border-radius: 4px;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #495057;
	}

	&.active {
		background-color: #007bff;
	}
`;

const Content = styled.div`
	flex-grow: 1;
	padding: 20px;
	background-color: #f8f9fa;
`;
