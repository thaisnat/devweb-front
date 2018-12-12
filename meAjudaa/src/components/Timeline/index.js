import React, { Component } from 'react';
import NewPost from '../Posts/newPost';
import ListPost from '../Posts/listPost';
import logo from '../../dv.gif';

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
       
      ]
    }
  }

  togglePost = toggledPost => {
    this.setState(prevState => {
      const { posts } = prevState;

      const newPosts = posts.map(post => {
        if (toggledPost.id === post.id) {
          return {
            ...post,
            done: !post.done
          };
        } else {
          return post;
        }
      });
      return { posts: newPosts };
    });
  }

  newPostt = text => {
    this.setState(prevState => {
      const { posts } = prevState;
      const newPost = {
        text,
        done: false,
        id: posts.lenght
      };

      return {
        posts: posts.concat([newPost])
      };
    });
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="App-timeline">
        <img src={logo} alt="loading..." className="App-logo" />
        <NewPost onSubmit={this.newPostt} />
        <ListPost
          posts={posts}
          onPostClick={this.togglePost}
          newPostt={this.newPostt}
        />
      </div>
    );
  }
}
export default Timeline;