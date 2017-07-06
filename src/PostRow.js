import React from 'react';
import PropTypes from 'prop-types';
//import Post from './Post';
import {Link} from 'react-router-dom';

const PostRow = (props) => {
    const authorUrl = parseAuthor(props.post.author);
    return (
        <tr>
            <th><Link to={'/posts/' + props.post.id}>Post</Link></th>
            <td>{props.post.createdAt}</td>
            <td><Link to={'/authors/' + authorUrl}>{props.post.author}</Link></td>
            <td>
                <div className='box'>
                    <div className="content">
                        <p>{props.post.title}</p>
                    </div>
                </div>
            </td>
        </tr>
    );
};

// parse author name
function parseAuthor (name) {
    return name.split(' ').join('%20');
}

PostRow.propTypes = {
    post: PropTypes.object.isRequired
};

export default PostRow;