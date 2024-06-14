import styled from 'styled-components';

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	border-radius: 0.8rem 0.8rem 0 0;

	@media (width > 1024px) {
		max-width: 72rem;
	}
`;

export const CardCover = styled.img`
	width: 100%;
	height: 30rem;

	display: flex;
	flex-direction: column;
	align-items: flex-start;

	border-radius: inherit;
`;

export const CardInfos = styled.div`
	padding: 1.2rem 2.4rem;
	display: flex;
	flex-flow: column wrap;
	align-items: flex-start;
	justify-content: center;
	gap: 1.2rem;

	border-radius: 0px 0px 8px 8px;
	background: #3b4651;
`;

export const PostAuthor = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.8rem;
`;

export const TextInfos = styled.div`
	display: flex;
	height: 4rem;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;

	h4 {
		color: #fff;
		font-size: 1.8rem;
		font-weight: 700;
		text-align: center;
	}

	p {
		color: #fff;
		font-size: 1.2rem;
	}
`;

export const PostHeader = styled.div`
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-items: flex-start;
	gap: 0.4rem;

	h4 {
		color: #fff;
		font-size: 1.8rem;
		font-weight: 700;
	}

	p {
		color: #fff;
		font-size: 1.2rem;
	}
`;

export const PostExtraInfos = styled.div`
	display: flex;
	gap: 1.2rem;
	flex-flow: row wrap;
`;

export const PostTags = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
	align-items: center;
	gap: 1.2rem;

	a {
		color: #ffffffcc;
		font-size: 1.4rem;
		cursor: pointer;

		&:hover {
			opacity: 0.6;
		}
	}
`;

export const PostReactions = styled.div`
	display: flex;
	flex-flow: row;
	justify-content: center;
	align-items: center;
	gap: 0.8rem;

	color: #fff;

	p {
		font-weight: 700;
	}
`;
