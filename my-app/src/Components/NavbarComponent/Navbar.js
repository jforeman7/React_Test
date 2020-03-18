import React, { PureComponent } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';

/**
 *  Component for the Navigation Bar.
 */
class MyNavbar extends PureComponent {

    render() {
        return(
            <Navbar bg='dark' variant='dark'>
                <Navbar.Brand href='/'>Sue Fitness</Navbar.Brand>
                <Nav className='mr-auto'>
                    <Nav.Link href='/workouts'>Workouts</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export { MyNavbar };