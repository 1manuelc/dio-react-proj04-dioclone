import {
	UserContainer,
	UserInfos,
	ProgressBar,
	ActualProgress,
} from './styles';
import ProfilePicture from '../ProfilePicture';

interface IUserInRank {
	name: string;
	profileUrl?: string;
	profilePhotoUrl?: string;
	progressPercent: number;
}

const UserInRank = ({
	name,
	profileUrl,
	profilePhotoUrl,
	progressPercent,
}: IUserInRank) => {
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

export default UserInRank;
