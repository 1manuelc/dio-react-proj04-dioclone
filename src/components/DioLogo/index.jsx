import path from '../../assets/dioLogo.svg';
import PropTypes from 'prop-types';

const DioLogo = ({ height = 24 }) => {
	return <img src={path} alt='DIO Logo' height={height} />;
};

DioLogo.propTypes = {
	height: PropTypes.number,
};

export default DioLogo;
