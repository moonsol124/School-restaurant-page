import '../css/nav.css';
import { Link } from 'react-router-dom';
function Nav(props) {

    return (
        <ul className="nav">
            <li>Hello, {props.user}</li>
            <Link to='/School-restaurant-page'><li> Home </li></Link>
            {(props.userLogged)?<a href=""><li onClick={props.removeToken}> Logout</li></a>:<Link to='/School-restaurant-page/login'><li> Login </li></Link>}            
            {(props.userLogged)?null:<Link to='/School-restaurant-page/register'><li> Register </li></Link>}
        </ul>
    )
}

export default Nav;