import React from 'react';
import Post from '../Post';
import propTypes from 'prop-types';

const ListPost = props => {
    return (
        <u1 className="list-post">
            {props.posts.map(post => (
                <Post 
                  post={post}
                  key={post.id}
                  onPostClick={props.onPostClick}
                />
            ))}
       </u1>
   );
}

ListPost.defaultProps = {
  posts: []
};

ListPost.propTypes = {
  //classes: propTypes.object.isRequired,
  onPostClick: propTypes.func.isRequired,

};

export default ListPost;
