import React, { Component } from "react";
import Post from "../Post/";
import PostInput from "../PostInput/";
import { fbsConfig } from "../../Config/ConfigFB";
import "firebase/database";

class PostDom extends Component {
  constructor(props) {
    super(props);
    this.addPost = this.addPost.bind(this);
    this.removePost = this.removePost.bind(this);

    this.db = fbsConfig
      .database()
      .ref()
      .child("posts");

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    const previousPost = this.state.posts;

    this.db.on("child_added", snap => {
      previousPost.push({
        id: snap.key,
        postContent: snap.val().postContent
      });
      this.setState({
        notes: previousPost
      });
    });

    this.db.on("child_removed", snap => {
      for (let i = 0; i < previousPost.length; i++) {
        if (previousPost[i].id === snap.key) {
          previousPost.splice(i, 1);
        }
      }
      this.setState({
        notes: previousPost
      });
    });
  }

  addPost = (post) => {
    this.db.push().set({ postContent: post });
  }

  removePost = (postId) => {
    console.log("removePost" + postId)
    this.db.child(postId).remove()
  };

  render() {
    return (
        <div>
        <section>
            <PostInput addPost={this.addPost} />
        </section>
        <section>
          {this.state.posts.map(post => {
            return (
              <Post
                postContent={post.postContent}
                postId={post.id}
                key={post.id}
                removePost={this.removePost}
              />
            );
          })}
        </section>
        </div>
    );
  }
}

export default PostDom;
