import React from 'react';
import axios from 'axios';
import PostList from './PostList';
import {API_URL} from './globalVars';


class Home extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            posts:[]
        };
    }
    componentDidMount () {
        axios.get(`${API_URL}/posts`)
            .then((res) => {
                this.setState({
                    posts: res.data.posts
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    render() {
        return (
            <div>
                <h2>Latest Posts</h2>
                    <PostList posts={this.state.posts} />
            </div>
            
        );
    }
    
}

export default Home;