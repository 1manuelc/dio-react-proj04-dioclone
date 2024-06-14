import './styles';
import Header from '../../components/Header/index';
import Button from '../../components/Button/index';
import { Main, Title, Subtitle, Column, Row } from './styles';
import { Link } from 'react-router-dom';

import heroImgPath from '../../assets/heroimg.png';

function Home() {
	return (
		<>
			<Header isAuthenticated={false} />
			<Main>
				<Row>
					<Column>
						<Title>
							<span className='pink'>Implemente seu futuro</span> global agora!
						</Title>
						<Subtitle>
							Domine as tecnologias utilizadas pelas empresas mais inovadoras do
							mundo e encare seu novo desafio profissional, evoluindo em
							comunidade com os melhores experts.
						</Subtitle>
						<Link style={{ width: '100%' }} to='/login'>
							<Button
								text={'Começar agora!'}
								variant='highlight'
								itFillWidth={true}
							/>
						</Link>
					</Column>

					<img
						style={{ maxWidth: '64%', placeSelf: 'center' }}
						width={'100%'}
						src={heroImgPath}
						alt='DIO Hero Image'
					/>
				</Row>
			</Main>
		</>
	);
}

export default Home;
