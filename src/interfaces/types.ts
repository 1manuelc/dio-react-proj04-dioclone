import { IconType } from 'react-icons';

export interface IUser {
	id?: number;
	name: string;
	email: string;
	password: string;
	photoSrc?: string;
}

export interface ISignUpFormData {
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

export interface ICard {
	cardInfos: IPost;
}

export interface IButton {
	variant?: string;
	text: string;
	type?: string;
	itFillWidth?: boolean;
	onClickFn?: () => void;
}

export interface IDioLogo {
	height?: number;
}

export interface IInputText {
	Icon: IconType;
	size: number;
	color: string;
	placeholder: string;
	type: string;
	register: Function;
	name: string;
}

export interface IProfilePicture {
	photoUrl?: string;
	profileUrl?: string;
	size?: number;
}

export interface IAuthContext {
	user: IUser | null;
	handleLogin: ({ email, password }: ILoginFormData) => Promise<ILoginResponse>;
	handleSignUp: ({
		name,
		email,
		password,
	}: ISignUpFormData) => Promise<ISignupResponse>;
	handleSignOut: () => void;
}

export interface IAuthContextProvProps {
	children: React.ReactNode;
}
