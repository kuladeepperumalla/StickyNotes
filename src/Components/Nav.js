import React, { Component } from  "react";
import ReactBootstrap, {Navbar} from 'react-bootstrap';

class Nav extends Component {
    render() {
        return(
            <div className="Nav nav-margin">
                 
                <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                    <img
                        alt="icon"
                        src="/img/logo.svg"
                        width="30"
                        height="30"
                        className=" align-top"
                    />{'  '}
                    <span className="nav_title " width="30" >STICKY NOTES</span>

                   
                    </Navbar.Brand>
                </Navbar>
                    <br />
                    
                    
                </>
                
                
                  
            </div>
        );
    }
}
export default Nav;