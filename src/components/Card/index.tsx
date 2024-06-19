import {
	CardContainer,
	CardCover,
	CardInfos,
	PostAuthor,
	TextInfos,
	PostHeader,
	PostExtraInfos,
	PostTags,
	PostReactions,
} from './styles';

import { LuThumbsUp } from 'react-icons/lu';

import ProfilePicture from '../ProfilePicture';
import { IPost, ICard } from '../../interfaces/types';

const Card = ({ cardInfos }: ICard) => {
	return (
		<CardContainer>
			<CardCover src={cardInfos.cover} />
			<CardInfos>
				<PostAuthor>
					<ProfilePicture
						size={40}
						photoUrl={cardInfos.author.profilePhotoUrl}
						profileUrl={cardInfos.author.profileUrl}
					/>
					<TextInfos>
						<h4>{cardInfos.author.name}</h4>
						<p>{cardInfos.postedAt}</p>
					</TextInfos>
				</PostAuthor>
				<PostHeader>
					<h4>{cardInfos.title}</h4>
					<p>{cardInfos.description?.substr(0, 247).concat('...')}</p>
				</PostHeader>
				<PostExtraInfos>
					<PostTags>
						{cardInfos.tags?.map((tag) => (
							<a key={tag} href={`${tag}`}>
								{tag}
							</a>
						))}
					</PostTags>
					<PostReactions>
						<LuThumbsUp size={20} />
						<p>{cardInfos.likesCount}</p>
					</PostReactions>
				</PostExtraInfos>
			</CardInfos>
		</CardContainer>
	);
};

export default Card;
