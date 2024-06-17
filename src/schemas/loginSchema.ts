import * as yup from 'yup';

const loginSchema = yup.object({
	email: yup.string().email('Email inválido').required('Email é obrigatório'),
	password: yup
		.string()
		.min(8, 'Deve ter pelo menos 8 dígitos')
		.required('Senha é obrigatória'),
});

export default loginSchema;
