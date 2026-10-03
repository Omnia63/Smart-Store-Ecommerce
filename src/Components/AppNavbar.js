import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function AppNavbar () {
  const [expanded, setExpanded] = useState(false);
  const closeNavbar = () => setExpanded(false);
  const cart = useSelector((state) =>  state.cart);
  const wishlist = useSelector((state) => state.wishlist);
  const {isAuthenticated, user}= useSelector((state) => state.auth);

    return(
        <>
    <Navbar expand="lg" expanded={expanded} onToggle={setExpanded} 
    className="d-flex justify-content-between" fixed='top' style={{backgroundColor:' #F5F3EF'}}>
      <Container>
        <Link to="/" className='navbar-brand'>Smart Store</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='nav-link' onClick={closeNavbar}>Home</Link>
            <Link to="/products" className='nav-link' onClick={closeNavbar}>Products</Link>
            <Link to="/categories" className='nav-link' onClick={closeNavbar}>Categories</Link>
            </Nav>
            <Nav>
            <Link to="/wishlist" className='nav-link' onClick={closeNavbar}>❤️ {wishlist.length}</Link>
            <Link to="/cart" className='nav-link' onClick={closeNavbar}>🛒 {cart.length}</Link>
            {isAuthenticated ? (<Link to="/profile" className="nav-link" onClick={closeNavbar}>👤<span>Welcome, {user.user_metadata.name}</span></Link>) : 

             (<Link to="/register" className="nav-link" onClick={closeNavbar}>👤</Link>)}
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default AppNavbar;