import React from 'react'
import {Navigate} from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'

function ProtectedRoute({children}) {
    const { isAuthenticated } = useStateContext();

    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute
