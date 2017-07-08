import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class Pagination extends React.Component {
    render () {
        return (
            <nav className="pagination">
                <a className="pagination-previous">Previous</a>
                <a className="pagination-next">Next page</a>
                <ul className="pagination-list">
                    <PageButton currentPage={this.props.currentPage} pos={0}/>
                </ul>
            </nav>
        );
    }
}

const PageButton = (props) => {
    // const outcomes =    [{active:0, buttons:[1,2,3,`&hellip;`,10]},
    //                     {active:1, buttons:[1,2,3,`&hellip;`,10]},
    //                     {active:2, buttons:[1,2,3,`&hellip;`,10]},
    //                     {active:2, buttons:[2,3,4,`&hellip;`,10]},
    //                     {active:2, buttons:[3,4,5,`&hellip;`,10]},
    //                     {active:2, buttons:[4,5,6,`&hellip;`,10]},
    //                     {active:2, buttons:[5,6,7,`&hellip;`,10]},
    //                     {active:2, buttons:[6,7,8,`&hellip;`,10]},
    //                     {active:3, buttons:[1,`&hellip;`,8,9,10]},
    //                     {active:4, buttons:[1,`&hellip;`,8,9,10]}];
    // const buttonVal = outcomes[props.currentPage] ? outcomes[props.currentPage].buttons[props.pos] : null;
    return (
        <li>
            <Link className="pagination-link" 
                  to={'/posts?page='+ (props.currentPage + 2).toString()}>
                  {props.currentPage + 2}
                  </Link>
        </li>
    );

};

Pagination.propTypes = {
    currentPage:PropTypes.number.isRequired
};

PageButton.propTypes = {
    currentPage:PropTypes.number.isRequired
};

export default Pagination;

/*
<li>
                    <a className="pagination-link is-current">1</a>
                    </li>
                    <li>
                    <a className="pagination-link">2</a>
                    </li>
                    <li>
                    <a className="pagination-link">3</a>
                    </li>
                    <li>
                    <span className="pagination-ellipsis">&hellip;</span>
                    </li>
                    <li>
                    <a className="pagination-link">10</a>
                    </li>
*/