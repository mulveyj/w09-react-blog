import React from 'react';
import axios from 'axios';
//import {
//  BrowserRouter as Router,
//  Route,
//  Link
//} from 'react-router-dom';
import PostList from './PostList';
const API_URL = 'https://react-router-blog-api-ptpsayzdyc.now.sh/';


class Home extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            posts:[]
        };
    }
    componentDidMount () {
        axios.get(`${API_URL}posts`)
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