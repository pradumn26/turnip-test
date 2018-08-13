import React, {Component} from 'react';
import {connect} from 'react-redux';

import '../stylesheets/HomePage.css';

class HomePage extends Component {
    render() {
        let user = this.props.currentUser;
        return (
            <div id="homePageContainer">
                <div id="profileCard">
                    <img id="homePageBackground" src="/background3.jpg"/>
                    <div id="infoCard">
                        <img id="profilePicture" src={user.pictureUrl}/>
                        <h3>{user.formattedName}</h3>
                        <div id="d1">{user.headline}</div>
                        <div id="d2">{user.location}</div>
                        <div id="d3"><b>Industry:</b> {user.industry}</div>
                        <div id="d4"><b>Email:</b> {user.emailAddress}</div>
                        <a className="btn" href={user.publicProfileUrl}>Go to Linkedin profile</a>
                    </div>
                </div>
                <a href="/auth/logout">Logout</a>
            </div>
        );
    }
}

function mapStateToProps({currentUser}) {
    return {currentUser}
}

export default connect(mapStateToProps)(HomePage);