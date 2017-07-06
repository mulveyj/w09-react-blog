import React from 'react';
import axios from 'axios';
import PostList from './PostList';
import {API_URL} from './globalVars';

class Author extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            posts:[]
        };
    }
    componentDidMount () {
        axios.get(`${API_URL}${this.props.match.url}`)
            .then((res) => {
                console.dir(res.data);
                this.setState({
                    posts: res.data.posts
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    render () {
        return (
            <div>
                <h2 className='subtitle'>{`All Posts By ${this.props.match.params.author}`}</h2>
                    <PostList posts={this.state.posts} />
            </div>
        );
    }

}

export default Author;