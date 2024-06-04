import Header from '../../components/Header';
import { Main, Title, Subtitle, Column, Row } from '../Home/styles.jsx';
import InputText from '../../components/InputText/index.jsx';
import Button from '../../components/Button/index.jsx';
import { StyledForm, Actions } from '../Login/styles.jsx';
import { LuMail, LuLock, LuUser } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const Signup = () => {
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
						<StyledForm>
							<InputText
								Icon={LuUser}
								size={20}
								color='#8647AD'
								placeholder='Nome completo'
								type='text'
							/>
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
								text='Cadastrar'
								variant='highlight'
								itFillWidth
								type='submit'
							/>
						</Link>
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
