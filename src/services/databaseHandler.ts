import { api } from './api';

export const emailExistsOnDatabase = async (
	email: string
): Promise<boolean | undefined> => {
	try {
		const response = await api.get(`/users?email=${email}`);
		return response.data.length === 1;
	} catch (error) {
		console.log(error);
	}
};

interface IValidateLogin {
	canLogin: boolean;
	errorMessage: string;
}

export const validateLogin = async (
	email: string,
	password: string
): Promise<IValidateLogin> => {
	try {
		const response = await api.get(
			`/users?email=${email}&password=${password}`
		);

		const emailExists = response.data.length === 1;
		if (!emailExists) {
			return {
				canLogin: false,
				errorMessage: 'Não existe uma conta associada a esse email',
			};
		} else {
			const serverPassword = response.data[0].password;
			if (password !== serverPassword) {
				return {
					canLogin: false,
					errorMessage: 'Senha incorreta',
				};
			} else {
				return { canLogin: true, errorMessage: '' };
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

interface IUser {
	name?: string;
	email?: string;
	password?: string;
}

export const createUser = async ({ name, email, password }: IUser) => {
	await api.post('/users', { name, email, password });
};
