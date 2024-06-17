import * as yup from 'yup';

const schema = yup.object({
	name: yup
		.string()
		.min(3, 'Nome deve ter no mínimo 3 caracteres')
		.required('Nome é obrigatório'),
	email: yup.string().email('Email inválido').required('Email é obrigatório'),
	password: yup
		.string()
		.min(8, 'Deve ter pelo menos 8 dígitos')
		.required('Senha é obrigatória'),
});

export default schema;
