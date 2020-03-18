import React, { PureComponent } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavDropdown } from 'react-bootstrap';

/**
 *  Component for the Navigation Bar.
 */
class MyNavbar extends PureComponent {

    render() {
        return(
            <Navbar bg='dark' variant='dark'>

                <Navbar.Brand href='/'>Sue Fitness</Navbar.Brand>
                
                <Nav className='mr-auto'>

                    <NavDropdown title='Workouts' id='collapsible-nav-dropdown'>
                        <NavDropdown.Item href='/workoutplans' >Workout Plans</NavDropdown.Item>
                        <NavDropdown.Item href='/exercises' >Exercises</NavDropdown.Item>
                        <NavDropdown.Item href='/warmups'>Warm Ups</NavDropdown.Item>
                        <NavDropdown.Item href='/mobilityandrecovery'>Mobility and Recovery</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href='/about'>About</Nav.Link>

                </Nav>
            </Navbar>
        );
    }
}

export { MyNavbar };