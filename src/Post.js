import React from 'react';
import axios from 'axios';
import {API_URL} from './globalVars';

class Post extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            post:{}
        };
    }
    componentDidMount () {
        axios.get(`${API_URL}${this.props.match.url}`)
            .then((res) => {
                this.setState({
                    post: res.data.post
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    render () {
        return (
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        {this.state.post.title}
                    </p>
                </header>
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                        <img src={this.state.post.avatarUrl} alt={this.state.post.avatarUrl}/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{this.state.post.author}</p>
                        <p className="title is-6">{this.state.post.createdAt}</p>
                        <p className="title is-6">{this.state.post.id}</p>
                    </div>
                </div>
                <div className="card-content">
                    <div className="content">
                        <p>{this.state.post.body}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;