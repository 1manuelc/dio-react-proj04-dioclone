import PropTypes from 'prop-types';

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

/* cardInfos object structure:
    cover: string,
    title: string,
    description: string,
    postedAt: string,
    author: object { name, profileUrl, profilePhotoUrl },
    tags: array,
    likeCount: number,
*/

const Card = ({ cardInfos }) => {
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
					<p>{cardInfos.description.substr(0, 247).concat('...')}</p>
				</PostHeader>
				<PostExtraInfos>
					<PostTags>
						{cardInfos.tags.map((tag) => (
							<a key={tag} href={`${tag}`}>
								{tag}
							</a>
						))}
					</PostTags>
					<PostReactions>
						<LuThumbsUp size={20} />
						<p>{cardInfos.likeCount}</p>
					</PostReactions>
				</PostExtraInfos>
			</CardInfos>
		</CardContainer>
	);
};

Card.propTypes = {
	cardInfos: PropTypes.object.isRequired,
};

export default Card;
