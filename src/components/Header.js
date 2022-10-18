import { Navbar,
         Collapse,
         NavbarToggler,
         Nav,
         NavItem,
    } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header style={{backgroundColor: 'gray'}}>
            <h1>Duncan Payne</h1>
            <br/>
            <h2>Multi-Media Artist</h2>
            <Navbar dark color='primary' sticky='top' expand='md'>
                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className='ms-auto align-center justify-content-between w-100' navbar>
                        <NavItem>
                            <NavLink className='nav-link' to='/'>
                                Entry
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/news'>
                                News
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/portfolio'>
                                Portfolio
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/about'>
                                About Me
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/contact'>
                                Contact Me
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    );
};

export default Header;