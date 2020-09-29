
import React from 'react'
import { Redirect } from 'react-router-dom'
import store from "store";
import Timer from '../helpers/AutoLogout'

class ProtectedRoute extends React.Component {

    render() {
        const Component = this.props.component;
        
        const isAuthenticated = store.get("user")
       
        return isAuthenticated ? (
            <div>
            <Component {...this.props}/>
            <Timer />
            </div>
        ) : (
            <Redirect to={{ pathname: '/login' }} />
        );
    }
}

export default ProtectedRoute;