import {
	FC,
	createContext, useState
} from 'react';
import { api } from '../services/api';
import {
	IAuthContext,
	IAuthContextProvProps,
	ILoginFormData,
	ILoginResponse,
	ISignUpFormData,
	ISignupResponse,
	IUser,
} from '../interfaces/types';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider: FC<IAuthContextProvProps> = ({
	children,
}) => {
	const [user, setUser] = useState<IUser | null>(null);

	const handleLogin = async ({
		email,
		password,
	}: ILoginFormData): Promise<ILoginResponse> => {
		try {
			const response = await api.get(`/users?email=${email}`);
			const user = response.data[0];
			const emailExists = response.data.length === 1;

			if (!emailExists) {
				return {
					canLogin: false,
					errorMessage: 'Não existe uma conta associada a esse email',
				};
			} else {
				if (password !== user.password) {
					return {
						canLogin: false,
						errorMessage: 'Senha incorreta',
					};
				} else {
					setUser(user);
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

	const handleSignUp = async ({
		name,
		email,
		password,
	}: ISignUpFormData): Promise<ISignupResponse> => {
		try {
			const response = await api.get(`/users?email=${email}`);
			const emailAlreadyUsed = response.data.length === 1;

			if (emailAlreadyUsed)
				return { success: false, errorMessage: 'Email já cadastrado' };
			else {
				await api.post('/users', { name, email, password });
				setUser({ name, email, password });
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

	const handleSignOut = () => {
		setUser(null);
	};

	return (
		<AuthContext.Provider
			value={{ user, handleLogin, handleSignUp, handleSignOut }}
		>
			{children}
		</AuthContext.Provider>
	);
};
