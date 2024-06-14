export interface IUser {
	name: string;
	progressPercent: number;
	profilePhotoUrl?: string;
	profileUrl?: string;
}

export interface IMockRanking {
	rankingArray: Array<IUser>;
}

export interface IPost {
	cover?: string;
	title: string;
	description?: string;
	postedAt: string;
	author: IAuthor;
	tags?: Array<string>;
	likesCount?: number;
}

export interface IMockPosts {
	postsArray: Array<IPost>;
}

export interface IAuthor {
	name: string;
	profileUrl?: string;
	profilePhotoUrl?: string;
}
