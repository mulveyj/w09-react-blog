import React from 'react';

class Pagination extends React.Component {
    render () {
        return (
            <nav className="pagination">
                <a className="pagination-previous">Previous</a>
                <a className="pagination-next">Next page</a>
                <ul className="pagination-list">
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
                </ul>
            </nav>
        );
    }
}

export default Pagination;