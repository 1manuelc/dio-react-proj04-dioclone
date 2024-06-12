import database from '../assets/database.json';

export const emailExistsOnDatabase = (email) => {
	return database.map((i) => i.email).indexOf(email) !== -1 ? true : false;
};

export const validateLogin = (email, password) => {
	const emailIndex = database.map((i) => i.email).indexOf(email);

	if (emailIndex === -1) {
		return {
			canLogin: false,
			errorMessage: 'Não existe uma conta associada a esse email',
		};
	} else if (database[emailIndex].password !== password) {
		return {
			canLogin: false,
			errorMessage: 'Senha incorreta',
		};
	} else return { canLogin: true, errorMessage: '' };
};
