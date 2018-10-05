import React, { Component } from 'react';

class PostInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            newPostContent : ''
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.postText = this.postText.bind(this);
    }

    handleUserInput(e){
        this.setState({
            newPostContent:e.target.value
        })
    }

    postText(){
        this.props.addPost(this.state.newPostContent)
        this.setState({
            newPostContent: ''
        })
    }

    render() { 
        return (  
            <div>
                <input className="postInput"
                placeholder="Escribe tu pregunta" 
                value={this.state.newPostContent}
                onChange={this.handleUserInput}/>
                <button className="noteButton" 
                onClick={this.postText}>Publicar</button>
            </div>
        );
    } 
}
 
export default PostInput;