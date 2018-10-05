import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class Post extends Component {
    constructor(props){
        super(props);
        console.log(props)
        this.postContent = props.postContent;
        this.postId = props.postId;
        this.handleRemovePost = this.handleRemovePost.bind(this);
    }

    handleRemovePost(id){
        console.log("key: " + id);
        this.props.removePost(id);
    }

    render() { 
        return (  
            <div className="post">
                <p className="postContent">{ this.postContent }</p>
                <Button onClick={() => this.handleRemovePost(this.postId)}>
                    <i class="fas fa-trash"></i>
                </Button>
            </div>

        );
    }
}
 
export default Post;