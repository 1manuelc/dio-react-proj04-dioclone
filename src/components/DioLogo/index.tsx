import dioLogoPath from '../../assets/dioLogo.svg';

import { IDioLogo } from '../../interfaces/types';

const DioLogo = ({ height = 24 }: IDioLogo) => {
	return <img src={dioLogoPath} alt='DIO Logo' height={height} />;
};

export default DioLogo;
