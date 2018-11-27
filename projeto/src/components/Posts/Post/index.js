import React, { Component } from 'react';
import './styles.css';
import { Row, Col } from 'reactstrap';


class Post extends Component {

    render() {
        return (
            <div className="Post">
                <Row>
                    <Col xs="auto">
                        <div className="UserPictureMedium">
                        </div>
                    </Col>
                    <Col xs="10" style={{ marginLeft: -15 + "px", marginTop: 10 + "px" }}>
                    </Col>
                </Row>
                <hr />
                <div className="Post-Content">
                    <p>Se o mundo existe, Graças a Deus, por que ele existe ?</p>
                </div>
                <hr />
            </div>
        );
    }
}

export default Post;