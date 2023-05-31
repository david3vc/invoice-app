import { SecurityModel } from "../types";

const STORAGE_OF_AUTHORIZATION = 'STORAGE_OF_AUTHORIZATION';
const ID_USER = 'id_user';
const USERNAME = 'username';

export const saveAuthorization = (data: SecurityModel): void => {
	localStorage.setItem(STORAGE_OF_AUTHORIZATION, JSON.stringify(data));
};

export const saveIdUser = (id: number): void => {
	localStorage.setItem(ID_USER, JSON.stringify(id));
};

export const saveUsername = (username: string): void => {
	localStorage.setItem(USERNAME, JSON.stringify(username));
};

export const getIdUser = (): number => {
	const data = localStorage.getItem(ID_USER);

	if (data == null) throw new Error('Login required');

	return JSON.parse(data);
};

export const getUsername = (): number => {
	const data = localStorage.getItem(USERNAME);

	if (data == null) throw new Error('Login required');

	return JSON.parse(data);
};

export const getAuthorization = (): SecurityModel => {
	const data = localStorage.getItem(STORAGE_OF_AUTHORIZATION);

	if (data == null) throw new Error('Login required');

	return JSON.parse(data);
};

export const removeAuthorization = (): void => {
	localStorage.removeItem(STORAGE_OF_AUTHORIZATION);
	localStorage.removeItem(ID_USER);
	localStorage.removeItem(USERNAME);
};

export const existsAuthorization = (): boolean => {
	const data = localStorage.getItem(STORAGE_OF_AUTHORIZATION);

	if (data !== null) return true;

	return false;
};

export const isValidAuthorization = (): boolean => {
	const data = localStorage.getItem(STORAGE_OF_AUTHORIZATION);

	if (data == null) return false;

	const security: SecurityModel = JSON.parse(data);

	if (security.expiresOn?.length === 0) return false;

	const expiresOn = new Date(security.expiresOn);
	const currentDate = new Date();

	return expiresOn > currentDate;
};
