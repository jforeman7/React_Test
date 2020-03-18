import React, { PureComponent } from "react";

import './styles.css';

class WorkoutComponent extends PureComponent {

    render() {

        return (
            <div className='WorkoutTiles'>
                <div>
                    Workout Plans
                </div>
                <div>
                    Exercises
                </div>
                <div>
                    Warm Ups
                </div>
                <div>
                    Mobility and Recovery
                </div>
            </div>
        );
    }
}

export { WorkoutComponent };