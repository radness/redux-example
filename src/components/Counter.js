import React, { Component } from 'react';
import Control from './Control';
import Value from './Value';

class Counter extends Component {
    render() {
        return (
            <div>
                <Value />
                <Control />
            </div>
        )
    }
}

export default Counter;