import React, { Component } from "react";
import { Button, Col, Well, Image, Row } from "react-bootstrap";
import "./post.css";
import incognito from './incognito.png'

class Post extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.postId = props.postId;
    this.handleRemovePost = this.handleRemovePost.bind(this);
  }

  handleRemovePost(id) {
    console.log("key: " + id);
    this.props.removePost(id);
  }

  handleEditPost(id) {
    this.props.editPost(id);
  }

  render() {
    return (
      <Col xs={12} md={6} lg={4}>
        <Well bsSize="large">
          <Row>
            <Col xs={3}>
              <Image src={this.props.photo === 'null' ? (incognito) : 
              (this.props.photo)
            } circle responsive />
            </Col>
            <Col xs={8}>
              <h4 className="name">{this.props.name === 'null' ? 
              (this.props.mail) : (this.props.name)
            }</h4>
              <p className="dates">
                {this.props.date} {this.props.hour}
              </p>
            </Col>
            <Col xs={10}>
              <p className="postContent ">{this.props.postContent}</p>
            </Col>
            {this.props.user === localStorage.getItem("user") ? (
              <Col xs={10}>
                <Button onClick={() => this.handleRemovePost(this.postId)}>
                  <i className="fas fa-trash" />
                </Button>
                <Button onClick={() => this.handleEditPost(this.postId)}>
                  <i className="fas fa-pencil-alt" />
                </Button>
              </Col>
            ) : (
              <Col xs={10}>
                <Button onClick={() => this.handleEditPost(this.postId)}>
                  <i className="fas fa-heart" />
                </Button>
              </Col>
            )}
          </Row>
        </Well>
      </Col>
    );
  }
}

export default Post;
