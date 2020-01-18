import React, { Component } from 'react';

import { TestComponent } from '../TestComponent/TestComponent';

class HomeComponent extends Component {

    render() {
        return(
            <TestComponent/>
        );
    }
}

export { HomeComponent };