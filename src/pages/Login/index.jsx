import Header from '../../components/Header';
import { Main, Title, Subtitle, Column, Row } from '../Home/styles.jsx';
import InputText from '../../components/InputText/index.jsx';
import Button from '../../components/Button/index.jsx';
import { StyledForm, Actions } from './styles.jsx';
import { LuMail, LuLock } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const Login = () => {
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
						<StyledForm>
							<InputText
								Icon={LuMail}
								size={20}
								color='#8647AD'
								placeholder='Email'
								type='email'
							/>
							<InputText
								Icon={LuLock}
								size={20}
								color='#8647AD'
								placeholder='Password'
								type='password'
							/>
						</StyledForm>
						<Link to='/userhome' style={{ width: '100%' }}>
							<Button
								text='Entrar'
								variant='highlight'
								itFillWidth
								type='submit'
							/>
						</Link>
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
