import { Link } from 'react-router-dom'
import '../styles/nav.css'
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const Navbar = () => {

    const navigate = useNavigate();

    return ( 
        <nav>
            {/* <img src="" alt="logo" /> */}
            <div className="logo" onClick={ () => {navigate('/')} }> <img src={Logo} alt="" /></div>
            <ul className="nav-links">
                <li className="nav-item"><Link className="nav-link" to='/'> Home </Link></li>
                <li className="nav-item"><Link className="nav-link" to='/'> Experience </Link></li>
                <li className="nav-item"><Link className="nav-link" to='/about'> About </Link></li>
                <li className="nav-item"><Link className="nav-link" to='projects'> Projects </Link></li>
                <li className="nav-item"> <button onClick={() => { navigate('/contact')}} className="contact-btn"> Contact Me </button></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;