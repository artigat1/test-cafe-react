import React from 'react';

const Suggestions = (props) => {
    if(props.results.length === 0) {
        return <ul />
    }
    
    const options = props.results.map(x => (
        <li key={x.url}>
            {x.name}
        </li>
    ));

    return <ul>{options}</ul>
};

export default Suggestions;
