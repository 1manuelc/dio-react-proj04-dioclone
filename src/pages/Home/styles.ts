import styled from 'styled-components';

export const Main = styled.main`
	padding: 4.8rem 12rem;
	display: flex;
	justify-content: space-between;
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
		font-size: 2.4rem;
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
	align-items: center;
	justify-content: center;

	p {
		max-width: 92rem;
		min-width: 24rem;
	}

	h3 {
		color: #fff;
		font-size: 2.8rem;
		font-weight: 700;
	}
`;

export const Row = styled.div`
	width: 100%;
	display: flex;
	flex-flow: row;
	justify-content: space-around;
	gap: 8rem;

	@media screen and (width <= 1024px) {
		flex-flow: column;
		gap: 4.8rem;
	}
`;
