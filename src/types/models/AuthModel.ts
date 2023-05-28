import SecurityModel from './SecurityModel';

export default interface AuthModel {
	id: number;
	email: string;
	status: number;
	security: SecurityModel;
}
