import { createBrowserRouter, Navigate } from "react-router-dom";
import Baselayout from "../Layout/Baselayout";
import Courser from "../pages/Courses";
import Material from "../pages/headerbar/Material";
import Students from "../pages/headerbar/Students";
import Ratings from "../pages/headerbar/Ratings";
import InfoStunedts from "../pages/headerbar/InfoStunedts";
import Anouncements from "../pages/Anouncements";
import Notification from "../pages/Notification";
import Schedule from "../pages/Schedule";
import NotFoundPage from "../pages/404/NotFoundPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Baselayout />,
		children: [
			{ index: true, element: <Navigate to={"courses/material"} replace /> },
			{
				path: "courses",
				element: <Courser />,
				children: [
					{ index: true, element: <Navigate to={"material"} replace /> },

					{ path: "material", element: <Material /> },

					{
						path: "students",
						children: [
							{ index: true, element: <Students /> },
							{ path: ":id/info", element: <InfoStunedts /> },
						],
					},
					{ path: "ratings", element: <Ratings /> },
				],
			},
			{
				path: "anouncements",
				element: <Anouncements />,
			},
			{
				path: "notification",
				element: <Notification />,
			},
			{
				path: "schedule",
				element: <Schedule />,
			},
		],
		errorElement: <NotFoundPage />,
	},
]);
