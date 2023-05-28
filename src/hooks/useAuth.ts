import { LocalStorageSession } from "../sessions";

const useAuth = (): boolean => {
	return LocalStorageSession.isValidAuthorization();
};

export default useAuth;