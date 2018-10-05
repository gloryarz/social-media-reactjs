import React, { Component } from 'react';
import NavBar from '../Nav/'
import PostDom from '../PostDom/'

class Wall extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <PostDom />
            </div>
        );

    }

}

export default Wall;