
import React from 'react';

const Alert = ({ message, success, failure }) => {
    return ((
        <div className={`alert${success ? ' success' : ''}${failure ? ' failure' : ''}`}>
            <span className="alert-message">
                {message}
            </span>
        </div>
    ));
};

export default Alert;
