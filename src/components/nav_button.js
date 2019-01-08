import React from 'react';
import {Link} from 'react-router-dom';

export default props => (
    <div classname='row'>
        <div className="col s12 right-align">
            <Link 
            className={`btn ${props.color || 'light-green accent-3'}`}
            to={props.to}
            >
                {props.children}
            </Link>
        </div>
    </div>
)