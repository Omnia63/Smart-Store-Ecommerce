import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function AppNavbar () {
  const cart = useSelector((state) =>  state.cart);
  const wishlist = useSelector((state) => state.wishlist);
  const {isAuthenticated, user}= useSelector((state) => state.auth);
 
    return(
        <>
    <Navbar expand="lg" className="d-flex justify-content-between" fixed='top' style={{backgroundColor:' #F5F3EF'}}>
      <Container>
        <Link to="/" className='navbar-brand'>Smart Store</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/products" className='nav-link'>Products</Link>
            <Link to="/categories" className='nav-link'>Categories</Link>
            </Nav>
            <Nav>
            <Link to="/wishlist" className='nav-link'>❤️ {wishlist.length}</Link>
            <Link to="/cart" className='nav-link'>🛒 {cart.length}</Link>
            {isAuthenticated ? (<Link to="/profile" className="nav-link">👤<span>Welcome, {user.user_metadata.name}</span></Link>) : 

             (<Link to="/register" className="nav-link">👤</Link>)}
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default AppNavbar;