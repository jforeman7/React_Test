import React, { Component } from 'react';

import { MyNavbar } from '../Components/NavbarComponent/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HomeComponent } from '../Components/HomeComponent/HomeComponent';
import { WorkoutComponent } from '../Components/WorkoutsComponent/WorkoutComponent';

/**
 *  Main App component for the entire web application.
 */
class App extends Component {

    render() {
        return(
            <div>
                <MyNavbar/>
                <Router>
                    <Route exact path = '/' component = { HomeComponent } />
                    <Route path = '/workouts' component = { WorkoutComponent } /> 
                </Router>
            </div>
        );
    }
}

export { App };