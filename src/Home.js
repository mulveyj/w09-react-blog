import React from 'react';
import axios from 'axios';
//import {
//  BrowserRouter as Router,
//  Route,
//  Link
//} from 'react-router-dom';
import Post from './Post';
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
                    posts: res.data.posts[0]
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
                {this.state.posts.length !== 0
                    ? <Post   key={this.state.posts.id} 
                        post={this.state.posts}/>
                    : null}
            </div>
            
        );
    }
    
}

export default Home;