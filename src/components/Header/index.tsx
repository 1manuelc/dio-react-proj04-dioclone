import { Link } from 'react-router-dom';
import { StyledHeader, LeftArea, RightArea } from './styles';
import Button from '../Button';
import SearchBar from '../SearchBar';
import DioLogo from '../DioLogo';
import ProfilePicture from '../ProfilePicture';
import { LuLogOut } from 'react-icons/lu';
import useAuth from '../../hooks/useAuth';

const Header = () => {
	const { user, handleSignOut } = useAuth();

	return (
		<StyledHeader>
			<LeftArea>
				<Link to='/'>
					<DioLogo />
				</Link>
				{window.innerWidth >= 1024 && user ? (
					<>
						<SearchBar />
						<Link to='#'>Live Code</Link>
						<Link to='#'>Global</Link>
					</>
				) : undefined}
			</LeftArea>
			<RightArea>
				{user ? (
					<>
						<h4>{user.name}</h4>
						<ProfilePicture photoUrl={user.photoSrc} size={36} />
						<Link to='/' onClick={handleSignOut}>
							<LuLogOut color='#fff' size='24' />
						</Link>
					</>
				) : (
					<>
						<Link to='/'>
							<Button text='Home' />
						</Link>
						<Link to='/login'>
							<Button text='Entrar' variant='gray' />
						</Link>
						<Link to='/signup'>
							<Button text='Cadastrar' variant='gray' />
						</Link>
					</>
				)}
			</RightArea>
		</StyledHeader>
	);
};

export default Header;
