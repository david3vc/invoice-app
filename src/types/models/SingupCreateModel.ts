export default interface SingupCreateModel {
	email: string;
    password: string;
	confirmPassword?: string;
	status: number;
}