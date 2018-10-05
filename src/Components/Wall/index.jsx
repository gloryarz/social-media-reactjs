import React, { Component } from 'react';
import NavBar from '../Nav/'
import PostDom from '../PostDom/'
import { Col, Row, Grid } from 'react-bootstrap';

class Wall extends Component {

    render() {
        return (
            <div>
            <NavBar />
            <Grid>
                <Row>
                    <PostDom />
                </Row>
            </Grid>
            </div>
        );

    }

}

export default Wall;