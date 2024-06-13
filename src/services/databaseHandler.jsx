import { api } from './api';

export const emailExistsOnDatabase = async (email) => {
	try {
		const response = await api.get(`/users?email=${email}`);
		return response.data.length === 1;
	} catch (error) {
		console.log(error);
	}
};

export const validateLogin = async (email, password) => {
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
	}
};

export const createUser = async ({ name, email, password }) => {
	await api.post('/users', { name, email, password });
};
