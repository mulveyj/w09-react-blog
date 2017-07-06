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
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Created</th>
                            <th>Author</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.length !== 0
                            ? this.state.posts.map((post) => {
                                return (<Post   key={post.id} 
                                                post={post}/>);
                            })
                            : null}
                    </tbody>
                </table>
            </div>
            
        );
    }
    
}

export default Home;