import React, {Component} from 'react';
import {connect} from 'react-redux';

import LoginPage from './LoginPage';
import HomePage from './HomePage';

class LandingPage extends Component {
    render() {
        switch (this.props.currentUser) {
            case null:
                return null;
            case false:
                return <LoginPage/>;
            default:
                return <HomePage/>
        }
    }
}

function mapStateToProps({currentUser}) {
    return {currentUser}
}

export default connect(mapStateToProps)(LandingPage);