import React, { Component } from 'react';

import { MyNavbar } from '../Components/NavbarComponent';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HomeComponent } from '../Components/HomeComponent';
import { WorkoutPlansComponent } from '../Components/WorkoutComponents/WorkoutPlans';
import { ExercisesComponent } from '../Components/WorkoutComponents/Exercises';
import { WarmUpsComponent } from '../Components/WorkoutComponents/WarmUps';
import { MobilityAndRecoveryComponent } from '../Components/WorkoutComponents/MobilityAndRecovery';

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
                    <Route path = '/workoutplans' component = { WorkoutPlansComponent } />
                    <Route path = '/exercises' component = { ExercisesComponent } />
                    <Route path = '/warmups' component = { WarmUpsComponent } />
                    <Route path = '/mobilityandrecovery' component = { MobilityAndRecoveryComponent } />
                </Router>
            </div>
        );
    }
}

export { App };