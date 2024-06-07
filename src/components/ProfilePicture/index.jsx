import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const PhotoContainer = styled.img`
	${({ customsize }) =>
		customsize
			? css`
					width: ${customsize / 10 + 'rem'};
					height: ${customsize / 10 + 'rem'};
			  `
			: undefined}

	border-radius: 50%;
`;

const ProfilePicture = ({ photoUrl, profileUrl, size = 24 }) => {
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

ProfilePicture.propTypes = {
	photoUrl: PropTypes.string.isRequired,
	profileUrl: PropTypes.string,
	size: PropTypes.number,
};

export default ProfilePicture;
