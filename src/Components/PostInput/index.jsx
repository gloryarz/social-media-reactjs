import React, { Component } from "react";
import "./postInput.css";
import { Row, Col, Button } from "react-bootstrap";

class PostInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPostContent: ""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.postText = this.postText.bind(this);
  }

  handleUserInput(e) {
    this.setState({
      newPostContent: e.target.value
    });
  }

  postText() {
    this.props.addPost(this.state.newPostContent);
    this.setState({
      newPostContent: ""
    });
  }

  render() {
    return (
      <Row>
        <Col xs={12} >
          <input
            className="postInput"
            placeholder="Escribe tu pregunta"
            value={this.state.newPostContent}
            onChange={this.handleUserInput}
          />
          <Button className="noteButton" onClick={this.postText}>
            Publicar
          </Button>
        </Col>
      </Row>
    );
  }
}

export default PostInput;
