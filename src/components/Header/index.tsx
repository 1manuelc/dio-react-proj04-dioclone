import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledHeader, LeftArea, RightArea } from './styles';
import Button from '../Button';
import SearchBar from '../SearchBar';
import DioLogo from '../DioLogo';
import ProfilePicture from '../ProfilePicture';
import { LuChevronDown } from 'react-icons/lu';

interface IHeader {
	isAuthenticated?: boolean;
	profilePhotoUrl?: string;
}

const Header = ({ isAuthenticated = false, profilePhotoUrl }: IHeader) => {
	return (
		<StyledHeader>
			<LeftArea>
				<Link to='/'>
					<DioLogo />
				</Link>
				{isAuthenticated ? (
					<>
						{window.innerWidth >= 1024 ? (
							<>
								<SearchBar />
								<Button text='Live Code' />
								<Button text='Global' />
							</>
						) : undefined}
					</>
				) : undefined}
			</LeftArea>
			<RightArea>
				{isAuthenticated ? (
					<>
						<ProfilePicture photoUrl={profilePhotoUrl} size={36} />
						<LuChevronDown color='#fff' size='24' />
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
