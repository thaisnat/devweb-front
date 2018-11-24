import React, { Component } from "react";
import PropTypes from "prop-types";

class Post extends Component {

    render(){
        const { onPostClick, post} = this.props;
        return (
        <li className="post-timeline">
            <label className="post_label">
                <input
                    className="post_checkbox"
                    type="checkbox"
                    checked={post.done}
                    onChange={() => onPostClick(post)}
                />
                {post.text}
            </label>
         </li>

        );
    }
}

Post.prototypes = {
    onPostClick: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

export default Post;