import React from 'react';

const NoMatch = () => {
    return (
        <section className="hero is-medium is-primary is-bold">
        <div className="hero-body">
            <div className="container">
            <h1 className="title">
                Error 404
            </h1>
            <h2 className="subtitle">
                {'Couldn\'t find your content - soz...'}
            </h2>
            </div>
        </div>
        </section>
    );
};

export default NoMatch;
