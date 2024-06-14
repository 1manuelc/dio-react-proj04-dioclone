import dioLogoPath from '../../assets/dioLogo.svg';

interface IDioLogo {
	height?: number;
}

const DioLogo = ({ height = 24 }: IDioLogo) => {
	return <img src={dioLogoPath} alt='DIO Logo' height={height} />;
};

export default DioLogo;
