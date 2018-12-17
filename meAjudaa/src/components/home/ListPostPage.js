import React, { Component } from 'react';
import Post from '../Posts/Post';
import NewPost from '../Posts/NewPost';
import { Api } from '../../services/Api';
import Timeline from '../home/Timeline/Timeline';

class ListPostPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bodyText: '',
      posts: []
    }
  }

  componentWillMount = async () => {
    await this.refresh();
  }

  refresh = async () => {
    const response = await Api.get('post');
    this.setState({ posts: response.data });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="root">
        <Timeline />
        <div>
          {posts.map(post => (
            <div>
              <Post post={post}
                deletePost={this.refresh}
              />
            </div>
          ))}
        </div>
        <NewPost newPost={this.refresh}
        />
      </div>
    );
  }
}

export default ListPostPage;