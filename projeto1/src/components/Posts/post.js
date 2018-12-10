import React, { Component } from 'react';

import './post.css';
import { Row, Col } from 'reactstrap';
import PropTypes from "prop-types";

import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { Api } from "../../Api";
import AfterPost from './AfterPost/afterPost';

class Post extends Component {

    constructor(props){
        super(props);
        this.deletePost = this.deletePost.bind(this);
    }

    deletePost = () => {
        Api.delete('listPost/post/' + this.props.card._id).then(response => {
            if(this.props.deletePost){
                this.props.deletePost(this.props.post);
            }
        })
    }

    render() {
        const { post } = this.props;
        return (
            <div className="Post">
                <Row>
                    <Col xs="auto">
                        <div className="Post-Titulo">
                        </div>
                    </Col>
                    <Col xs="10" style={{ marginLeft: -15 + "px", marginTop: 10 + "px" }}>
                    </Col>
                    {post.text}
                    <IconButton onClick={this.deletePost} aria-label="Delete">
                        <DeleteIcon/>
                    </IconButton>
                </Row>
                <AfterPost></AfterPost>
            </div>
        );
    }
}

Post.PropTypes = {
    onPostClick: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};
export default Post;