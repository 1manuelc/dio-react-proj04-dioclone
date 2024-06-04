import PropTypes from 'prop-types';

const ProfilePicture = ({ src, size = 32 }) => {
	return (
		<img style={{ borderRadius: '50%' }} src={src} width={size} height={size} />
	);
};

ProfilePicture.propTypes = {
	src: PropTypes.string.isRequired,
	size: PropTypes.number,
};

export default ProfilePicture;
