import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home/';
import Login from './pages/Login/';
import Signup from './pages/Signup/';
import UserHome from './pages/UserHome/';
import { GlobalStyle } from './global';
import { AuthContextProvider } from './context/auth';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/signup',
		element: <Signup />,
	},
	{
		path: '/userhome',
		element: <UserHome />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<AuthContextProvider>
			<GlobalStyle />
			<RouterProvider router={router} />
		</AuthContextProvider>
	</React.StrictMode>
);
