import { LuLock, LuMail } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/index.js';
import Header from '../../components/Header/index.js';
import InputText from '../../components/InputText/index.js';

import { Column, Main, Row, Subtitle, Title } from '../Home/styles.js';
import { Actions, StyledForm } from './styles.js';

import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import schema from '../../schemas/loginSchema';

import { AuthContext } from '../../context/auth.js';
import { ILoginFormData } from '../../types/types.js';

const Login = () => {
	const [loginError, setLoginError] = useState('');
	const navigate = useNavigate();
	const { handleLogin } = useContext(AuthContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		mode: 'onTouched',
	});

	const handleErrorMessage = (message: string): void => {
		setLoginError(`${message}`);
		setTimeout(() => setLoginError(''), 4000);
	};

	const onSubmit = async (data: ILoginFormData): Promise<void> => {
		try {
			const { canLogin, errorMessage } = await handleLogin(data);
			canLogin ? navigate('/userhome') : handleErrorMessage(errorMessage!);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<Header />
			<Main>
				<Row>
					<Column>
						<Title>
							A plataforma para você aprender com experts, dominar as principais
							tecnologias e entrar mais rápido nas empresas mais desejadas.
						</Title>
					</Column>
					<Column
						style={{
							width: '100%',
							alignItems: 'flex-start',
						}}
					>
						<Title>Identifique-se</Title>
						<Subtitle>Faça seu login e make the change._</Subtitle>
						<StyledForm onSubmit={handleSubmit(onSubmit)}>
							<InputText
								Icon={LuMail}
								size={20}
								color='#8647AD'
								placeholder='Email'
								type='email'
								register={register}
								name='email'
							/>
							{errors.email && (
								<p style={{ color: '#ff0000' }}>{errors.email?.message}</p>
							)}

							<InputText
								Icon={LuLock}
								size={20}
								color='#8647AD'
								placeholder='Password'
								type='password'
								register={register}
								name='password'
							/>
							{errors.password && (
								<p style={{ color: '#ff0000' }}>{errors.password?.message}</p>
							)}

							{loginError && <p style={{ color: '#ff0000' }}>{loginError}</p>}

							<Button
								text='Entrar'
								variant='highlight'
								itFillWidth
								type='submit'
							/>
						</StyledForm>

						<Actions>
							<Link to='/' className='yellow'>
								Esqueci minha senha
							</Link>
							<Link to='/signup' className='green'>
								Criar conta
							</Link>
						</Actions>
					</Column>
				</Row>
			</Main>
		</>
	);
};

export default Login;
