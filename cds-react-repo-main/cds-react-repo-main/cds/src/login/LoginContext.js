import React from 'react';
import AppContent from './AppContent';
import { LoginProvider } from './LoginProvider';

const LoginContext = () => {
    return (
        <div>
            <LoginProvider>
                <AppContent />
            </LoginProvider>
        </div>
    );
}

export default LoginContext;