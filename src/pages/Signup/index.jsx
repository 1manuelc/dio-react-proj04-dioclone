import { LuLock, LuMail, LuUser } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/index.jsx';
import Header from '../../components/Header';
import InputText from '../../components/InputText/index.jsx';
import { Column, Main, Row, Subtitle, Title } from '../Home/styles.jsx';
import { Actions, StyledForm } from '../Login/styles.jsx';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import schema from '../../schema.jsx';

import { useState } from 'react';
import { emailExistsOnDatabase } from '../../utils/checkInDatabase.jsx';

const Signup = () => {
	const [signupError, setSignupError] = useState('');
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		const { email } = data;

		if (!emailExistsOnDatabase(email)) navigate('/userhome');
		else {
			setSignupError('Email já cadastrado');
			setTimeout(() => {
				setSignupError('');
			}, 4000);
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
						<Title>Comece agora grátis</Title>
						<Subtitle>Crie sua conta e make the change._</Subtitle>
						<StyledForm onSubmit={handleSubmit(onSubmit)}>
							<InputText
								Icon={LuUser}
								size={20}
								color='#8647AD'
								placeholder='Nome completo'
								type='text'
								register={register}
								name='name'
							/>
							{errors.name && (
								<p style={{ color: '#ff0000' }}>{errors.name?.message}</p>
							)}

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

							{signupError && <p style={{ color: '#ff0000' }}>{signupError}</p>}

							<Button
								text='Cadastrar'
								variant='highlight'
								itFillWidth
								type='submit'
							/>
						</StyledForm>

						<Actions>
							<p>
								Ao clicar em &quot;criar minha conta grátis&quot;, declaro que
								aceito as Políticas de Privacidade e os Termos de Uso da DIO.
							</p>
						</Actions>
						<Actions>
							<span>
								Já tenho conta,&nbsp;
								<Link to='/login' className='green'>
									Fazer login
								</Link>
							</span>
						</Actions>
					</Column>
				</Row>
			</Main>
		</>
	);
};

export default Signup;
