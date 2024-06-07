import PropTypes from 'prop-types';
import {
	UserContainer,
	UserInfos,
	ProgressBar,
	ActualProgress,
} from './styles';
import ProfilePicture from '../ProfilePicture';

const UserInRank = ({ name, profileUrl, profilePhotoUrl, progressPercent }) => {
	return (
		<UserContainer>
			<ProfilePicture
				photoUrl={profilePhotoUrl}
				size={40}
				profileUrl={profileUrl}
			/>

			<UserInfos>
				<a href={profileUrl}>
					<h4>{name}</h4>
				</a>
				<ProgressBar>
					<ActualProgress percentual={progressPercent} />
				</ProgressBar>
			</UserInfos>
		</UserContainer>
	);
};

UserInRank.propTypes = {
	name: PropTypes.string.isRequired,
	profileUrl: PropTypes.string,
	profilePhotoUrl: PropTypes.string,
	progressPercent: PropTypes.number,
};

export default UserInRank;
