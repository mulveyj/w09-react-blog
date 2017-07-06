import React from 'react';
import PropTypes from 'prop-types';
//import Post from './Post';
import {Link} from 'react-router-dom';

const PostRow = (props) => {
    return (
        <tr>
            <th><Link to={'/posts/' + props.post.id}>Post</Link></th>
            <td>{props.post.createdAt}</td>
            <td>{props.post.author}</td>
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

PostRow.propTypes = {
    post: PropTypes.object.isRequired
};

export default PostRow;