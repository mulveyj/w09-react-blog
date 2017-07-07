import React from 'react';
import PostRow from './PostRow';
import Pagination from './Pagination';
import PropTypes from 'prop-types';

class PostList extends React.Component {
    render () {
        return (
            <div>
                <Pagination/>
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
                        {this.props.data.posts !== undefined
                            ? this.props.data.posts.map((post) => {
                                return (<PostRow   key={post.id} 
                                                post={post}/>);
                            })
                            : null}
                    </tbody>
                </table>
            </div>
        );
    }
}

PostList.propTypes = {
    data: PropTypes.object.isRequired
};

export default PostList;