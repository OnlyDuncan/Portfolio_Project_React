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
            <Navbar style={{backgroundColor: 'gray'}} sticky='top' expand='md'>
                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className='ms-auto align-center justify-content-between w-100' navbar>
                        <NavItem>
                            <NavLink className='nav-link' to='/' style={{color: 'white'}}>
                                Entry
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/news' style={{color: 'white'}}>
                                News
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/portfolio' style={{color: 'white'}}>
                                Portfolio
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/about' style={{color: 'white'}}>
                                About Me
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/contact' style={{color: 'white'}}>
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