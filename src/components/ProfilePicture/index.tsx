import PropTypes from 'prop-types';
import { PhotoContainer } from './styles';

interface IProfilePicture {
	photoUrl?: string;
	profileUrl?: string;
	size?: number;
}

const ProfilePicture = ({
	photoUrl,
	profileUrl,
	size = 24,
}: IProfilePicture) => {
	if (!photoUrl)
		photoUrl =
			'https://th.bing.com/th/id/R.634c153f9405f89ccfb5ab38f689f51c?rik=IzY0V%2fpVJiFoAQ&pid=ImgRaw&r=0';

	return (
		<>
			<a href={profileUrl}>
				<PhotoContainer customsize={size} src={photoUrl} />
			</a>
		</>
	);
};

export default ProfilePicture;
