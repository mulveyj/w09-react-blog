import React from 'react';
import PropTypes from 'prop-types';

const Post = (props) => {
    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                    {'Post by ' + props.post.author}
                </p>
            </header>
            <div className="card-content">
                <div className="content">
                    <p>{props.post.title}</p>
                </div>
            </div>
            <footer className="card-footer">
                <span className="card-footer-item">{'ID: ' + props.post.id}</span>
                <span className="card-footer-item">{'Created At: ' + props.post.createdAt}</span>
            </footer>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired
};

export default Post;