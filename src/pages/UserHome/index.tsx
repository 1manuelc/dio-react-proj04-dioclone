import Card from '../../components/Card';
import Header from '../../components/Header';
import { Main, Column, Row } from '../Home/styles';
import { RankingColumn } from './styles';
import UserInRank from '../../components/UserInRank';
import { IMockPosts, IMockRanking } from './types';

const loggedUser = {
	name: 'Manuel Carlos',
	profileUrl: 'https://github.com/1manuelc/',
	profilePhotoUrl: 'https://avatars.githubusercontent.com/u/110443154?v=4',
};

const mockPosts: IMockPosts = {
	postsArray: [
		{
			cover:
				'https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?q=80&w=2927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			title: 'Implementando o clone da DIO em React',
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ipsam consequuntur fuga alias quos possimus iusto aliquam, repudiandae consequatur omnis quis impedit, ea ab amet accusamus eligendi! Autem reprehenderit quos architecto, consequatur ex adipisci suscipit modi officiis tenetur error, perspiciatis officia saepe aliquid accusamus eum iste, assumenda tempora tempore rem.',
			postedAt: '8 minutos atrás',
			author: {
				name: 'Manuel Carlos',
				profileUrl: 'https://github.com/1manuelc/',
				profilePhotoUrl:
					'https://avatars.githubusercontent.com/u/110443154?v=4',
			},
			tags: ['#React', '#StyledComponents', '#ReactRouterDom', '#ReactIcons'],
			likesCount: 16,
		},
		{
			cover:
				'https://images.unsplash.com/photo-1606166325683-e6deb697d301?q=80&w=2985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			title: 'Desenvolvendo um protótipo de clone da DIO no Figma',
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ipsam consequuntur fuga alias quos possimus iusto aliquam, repudiandae consequatur omnis quis impedit, ea ab amet accusamus eligendi! Autem reprehenderit quos architecto, consequatur ex adipisci suscipit modi officiis tenetur error, perspiciatis officia saepe aliquid accusamus eum iste, assumenda tempora tempore rem.',
			postedAt: '1h atrás',
			author: {
				name: 'Kowalski',
				profilePhotoUrl: '',
			},
			tags: ['#Figma', '#AutoLayout', '#Responsividade', '#LucideIcons'],
			likesCount: 64,
		},
	],
};

const mockRanking: IMockRanking = {
	rankingArray: [
		{
			name: 'Manuel Carlos',
			progressPercent: 88,
			profilePhotoUrl: 'https://avatars.githubusercontent.com/u/110443154?v=4',
			profileUrl: 'https://github.com/1manuelc/',
		},
		{
			name: 'Piragiba',
			progressPercent: 86,
		},
		{
			name: 'Johnsons',
			progressPercent: 84,
		},
		{
			name: 'Zezinho',
			progressPercent: 83,
		},
		{
			name: 'Kowalski',
			progressPercent: 82,
		},
	],
};

const UserHome = () => {
	return (
		<>
			<Header isAuthenticated profilePhotoUrl={loggedUser.profilePhotoUrl} />
			<Main>
				<Row>
					<Column>
						{mockPosts.postsArray.length > 0 ? (
							mockPosts.postsArray.map((post) => {
								return <Card key={post.title} cardInfos={post} />;
							})
						) : (
							<p>Erro ao obter postagens</p>
						)}
					</Column>

					<RankingColumn>
						<h3>Ranking top 5 da semana</h3>

						{mockRanking.rankingArray.length > 0 ? (
							mockRanking.rankingArray.map((user) => {
								return (
									<UserInRank
										key={user.name}
										name={user.name}
										profilePhotoUrl={user.profilePhotoUrl}
										profileUrl={user.profileUrl}
										progressPercent={user.progressPercent}
									/>
								);
							})
						) : (
							<p>Erro ao obter ranking</p>
						)}
					</RankingColumn>
				</Row>
			</Main>
		</>
	);
};

export default UserHome;
