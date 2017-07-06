import React from 'react';
import PostRow from './PostRow';
import PropTypes from 'prop-types';

class PostList extends React.Component {
    render () {
        return (
            <table className='component-postlist-table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Created</th>
                            <th>Author</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.length !== 0
                            ? this.props.posts.map((post) => {
                                return (<PostRow   key={post.id} 
                                                post={post}/>);
                            })
                            : null}
                    </tbody>
            </table>
        );
    }
}

PostList.propTypes = {
    posts: PropTypes.object.isRequired
};

export default PostList;