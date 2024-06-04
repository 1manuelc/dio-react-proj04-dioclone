import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledHeader, LeftArea, RightArea } from './styles';
import Button from '../Button/';
import SearchBar from '../SearchBar/';
import DioLogo from '../DioLogo/';
import ProfilePhoto from '../ProfilePhoto/';
import { LuChevronDown } from 'react-icons/lu';

const Header = ({ isAuthenticated = false }) => {
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
						<ProfilePhoto
							src='https://avatars.githubusercontent.com/u/110443154?v=4'
							size={36}
						/>
						<Button text={<LuChevronDown color='#fff' size='24' />} />
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

Header.propTypes = {
	isAuthenticated: PropTypes.bool,
};

export default Header;