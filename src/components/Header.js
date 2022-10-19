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
        <header style={{backgroundColor: 'black'}}>
            <h1 style={{color: 'white'}}>Duncan Payne</h1>
            <h2 style={{color: 'white'}}>Multi-Media Artist</h2>
            <Navbar dark style={{backgroundColor: 'rgb(117,117,117)'}} sticky='top' expand='md'>
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