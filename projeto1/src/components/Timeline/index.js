import React, { Component } from 'react';
import NewPost from "../Posts/NewPost";
import ListPost from "../Posts/listPost";

class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts:[
                {
                id: 0,
                text: "Posts",
                done: false
                }
            ]
        };
    }

togglePost = toggledPost => {
    this.setState(prevState => {
        const {posts} = prevState;

        const newPosts = posts.map(post => {
            if(toggledPost.id === post.id){
                return {
                    ...post,
                    done: !post.done
                };
            } else {
                return post;
            }
        });
        return { posts: newPosts};
    });
}

newPost = text => {
    this.setState(prevState => {
        const { posts } = prevState;
        const newPost = {
          text,
          done: false,
          id: posts.length
        };
  
        return {
          posts: posts.concat([newPost])
        };
    });
}

    render() {
        const {posts} = this.state;
        return (
            <div classeName="App-timeline">
                <Timeline >Sistema de Monitoria Online</Timeline>
                <ListPost
                    posts={posts}
                    onPostClick={this.togglePost}
                    newPost={this.newPost}
                />
                <NewPost onSubmit={this.newPost} />
            </div>
        );
    }

}
export default Timeline;