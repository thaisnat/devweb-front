import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Post from './post';

const ListPost = props => {
  return (
    <List className="App-list">
      {props.posts.map(post => (
        <ul className="App-list">
          <Post
            post={post}
            key={post.id}
            onPostClick={props.onPostClick}
          />
        </ul>
      ))}
    </List>
  );
}


ListPost.defaultProps = {
  posts: []
};

ListPost.propTypes = {
  onPostClick: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object)
};

export default ListPost;