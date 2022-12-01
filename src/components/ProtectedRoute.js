import styles from '../styles/components/ProtectedRoute.module.css'
import { useAuthenticationStatus } from '@nhost/react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from './Spinner';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, isLoading } = useAuthenticationStatus();
    const { pathname } = useLocation();
    
    if (isLoading) {
        return (
        <div className={styles.container}>
            <Spinner />
        </div>
        );
    }
    
    if (isAuthenticated) {
        return children;
    }
    return <Navigate to={`/sign-in?redirect=${pathname}`} replace={true} />;
};
    
export default ProtectedRoute;