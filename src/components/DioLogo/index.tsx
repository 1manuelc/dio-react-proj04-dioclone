import dioLogoPath from '../../assets/dioLogo.svg';

import { IDioLogo } from '../../types/types';

const DioLogo = ({ height = 24 }: IDioLogo) => {
	return <img src={dioLogoPath} alt='DIO Logo' height={height} />;
};

export default DioLogo;
