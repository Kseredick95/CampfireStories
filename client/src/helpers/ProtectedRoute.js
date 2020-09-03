
import React from 'react'
import { Redirect } from 'react-router-dom'
import store from "store";

class ProtectedRoute extends React.Component {

    render() {
        const Component = this.props.component;
        
        const isAuthenticated = store.get("user")
       
        return isAuthenticated ? (
            <Component />
        ) : (
            <Redirect to={{ pathname: '/login' }} />
        );
    }
}

export default ProtectedRoute;