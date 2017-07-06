import React from 'react';
import PropTypes from 'prop-types';

const Post = (props) => {
    return (
        // <div>
        //     <span>{props.post.author}</span>
        //     <span>{props.post.createdAt}</span>
        //     <span>{props.post.title}</span>
        // </div>
        <tr>
            <th>{props.post.id}</th>
            <td>{props.post.createdAt}</td>
            <td>{props.post.author}</td>
            <td>{props.post.title}</td>
        </tr>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired
};

export default Post;