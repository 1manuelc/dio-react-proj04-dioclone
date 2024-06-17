import { createContext, useState, ReactNode, FC } from 'react';
import { api } from '../services/api';
import {
	ILoginFormData,
	ILoginResponse,
	ISignupFormData,
	ISignupResponse,
	IUser,
} from '../types/types';

interface IAuthContext {
	user: IUser;
	handleLogin: ({ email, password }: ILoginFormData) => Promise<ILoginResponse>;
	handleSignup: ({
		name,
		email,
		password,
	}: ISignupFormData) => Promise<ISignupResponse>;
}

interface IAuthContextProvProps {
	children: ReactNode;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider: FC<IAuthContextProvProps> = ({
	children,
}) => {
	const [user, setUser] = useState<IUser>({} as IUser);

	const handleLogin = async ({
		email,
		password,
	}: ILoginFormData): Promise<ILoginResponse> => {
		try {
			const response = await api.get(`/users?email=${email}`);
			const users = response.data;
			const emailExists = users.length === 1;

			if (!emailExists) {
				return {
					canLogin: false,
					errorMessage: 'Não existe uma conta associada a esse email',
				};
			} else {
				const user = users[0];
				if (password !== user.password) {
					return {
						canLogin: false,
						errorMessage: 'Senha incorreta',
					};
				} else {
					setUser(users[0]);
					return { canLogin: true };
				}
			}
		} catch (error) {
			console.log(error);
			return {
				canLogin: false,
				errorMessage: 'Um erro inesperado ocorreu durante a validação do login',
			};
		}
	};

	const handleSignup = async ({
		name,
		email,
		password,
	}: ISignupFormData): Promise<ISignupResponse> => {
		try {
			const response = await api.get(`/users?email=${email}`);
			const emailAlreadyUsed = response.data.length === 1;

			if (emailAlreadyUsed)
				return { success: false, errorMessage: 'Email já cadastrado' };
			else {
				await api.post('/users', { name, email, password });
				setUser(response.data[0]);
				return { success: true, errorMessage: '' };
			}
		} catch (error) {
			console.log(error);
			return {
				success: false,
				errorMessage: 'Um erro inesperado ocorreu durante o cadastro',
			};
		}
	};

	return (
		<AuthContext.Provider value={{ user, handleLogin, handleSignup }}>
			{children}
		</AuthContext.Provider>
	);
};
