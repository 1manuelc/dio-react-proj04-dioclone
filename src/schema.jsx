import * as yup from 'yup';

const schema = yup.object({
	name: yup
		.string('Nome inválido')
		.min(3, 'Nome deve ter no mínimo 3 caracteres'),
	email: yup
		.string('Email inválido')
		.email('Email inválido')
		.required('Email é obrigatório'),
	password: yup
		.string('Senha é obrigatória')
		.min(8, 'Deve ter pelo menos 8 dígitos')
		.required('Senha é obrigatória'),
});

export default schema;
