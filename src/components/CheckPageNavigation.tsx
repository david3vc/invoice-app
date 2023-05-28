import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

interface BaseProps {
	children: ReactElement;
}
export const PrivateOutlet = ({ children }: BaseProps) => {
	const auth = useAuth();
	if (!auth) return <Navigate to="/login" replace />;

	return children;
};

export const PublicOutlet = ({ children }: BaseProps) => {
	const auth = useAuth();

	if (auth) return <Navigate to="/" replace />;

	return children;
};
