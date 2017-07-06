import React from 'react';
import axios from 'axios';
//import {
//  BrowserRouter as Router,
//  Route,
//  Link
//} from 'react-router-dom';
const API_URL = 'https://react-router-blog-api-ptpsayzdyc.now.sh/';


class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Latest Posts</h2>
            </div>
            
        );
    }
    componentDidMount () {
        axios.get(`${API_URL}`)
            .then((res) => {
                console.dir(res);
                this.setState({
                    status: res.data.status
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    
}

export default Home;