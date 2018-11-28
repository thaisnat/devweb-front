import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from "prop-types";
import './post.css';
import AfterPost from './AfterPost/afterPost';

class Post extends Component {

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