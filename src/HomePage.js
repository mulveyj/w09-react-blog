import React from 'react';
import axios from 'axios';
import PostList from './PostList';
import {API_URL} from './globalVars';


class Home extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            data:{},
            page: 0
        };
    }
    componentDidMount () {
        const url = this.props.match.url === '/'
                    ? '/posts?page=0'
                    : this.props.match.url + this.props.location.search;
        axios.get(`${API_URL}${url}`)
            .then((res) => {
                console.log(this.props.location.search);
                console.dir(res.data);
                this.setState({
                    data: res.data
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    render() {
        return (
            <div>
                <h2 className='subtitle'>{'Latest Posts, Page ' 
                                + (this.state.data.page + 1)}</h2>
                    <PostList data={this.state.data} />
            </div>
            
        );
    }
    
}

export default Home;