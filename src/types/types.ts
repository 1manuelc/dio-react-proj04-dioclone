export interface IUser {
	id?: number;
	name: string;
	email: string;
	password: string;
}

export interface ISignupFormData {
	name: string;
	email: string;
	password: string;
}

export interface ILoginFormData {
	email: string;
	password: string;
}

export interface ILoginResponse {
	canLogin: boolean;
	errorMessage?: string;
}

export interface ISignupResponse {
	success: boolean;
	errorMessage?: string;
}

export interface IUserInRank {
	id?: number;
	name: string;
	progressPercent: number;
	profilePhotoUrl?: string;
	profileUrl?: string;
}

export interface IRankingList {
	rankingArray: Array<IUserInRank>;
}

export interface IPost {
	cover?: string;
	title: string;
	description?: string;
	postedAt: string;
	author: IPostAuthor;
	tags?: Array<string>;
	likesCount?: number;
}

export interface IPostAuthor {
	name: string;
	profileUrl?: string;
	profilePhotoUrl?: string;
}

export interface IPostList {
	postsArray: Array<IPost>;
}
