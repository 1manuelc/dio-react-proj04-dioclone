import styled from 'styled-components';

export const Main = styled.main`
	padding: 4.8rem 16rem;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (width < 1024px) {
		padding: 4.8rem 2rem;
	}
`;

export const Title = styled.h2`
	font-weight: 700;
	font-size: 3.2rem;
	color: #fff;

	span.pink {
		font-size: 100%;
		color: #e4105d;
	}

	@media screen and (width < 1024px) {
		font-size: 2.8rem;
	}
`;

export const Subtitle = styled.p`
	font-size: 2rem;
	color: #fff;
	@media screen and (width < 1024px) {
		font-size: 1.6rem;
	}
`;

export const Column = styled.div`
	display: flex;
	flex-flow: column;
	gap: 2.4rem;
	align-items: flex-start;

	p {
		max-width: 92rem;
		min-width: 24rem;
	}
`;

export const Row = styled.div`
	display: flex;
	flex-flow: row;
	align-items: center;

	@media screen and (width <= 1024px) {
		flex-flow: column;
	}
`;
