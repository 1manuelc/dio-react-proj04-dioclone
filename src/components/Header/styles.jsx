import styled from 'styled-components';

export const StyledHeader = styled.header`
	height: 5.6rem;
	padding: 1.2rem 7.2rem;

	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #151515;

	@media screen and (width <= 1024px) {
		padding: 1.2rem 2.4rem;
	}
`;

export const LeftArea = styled.div`
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2.4rem;
`;

export const RightArea = styled.div`
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;
