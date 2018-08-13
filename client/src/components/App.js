import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import LandingPage from './LandingPage';
import {fetchUser} from '../actions';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path="/" exact component={LandingPage}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, {fetchUser})(App);