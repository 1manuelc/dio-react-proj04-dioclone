import styled, { css } from 'styled-components';

interface IPhotoContainer {
	customsize: number;
}

export const PhotoContainer = styled.img<IPhotoContainer>`
	${({ customsize }) =>
		customsize
			? css`
					width: ${customsize / 10 + 'rem'};
					height: ${customsize / 10 + 'rem'};
			  `
			: undefined}

	border-radius: 50%;
`;
