import { Link } from 'react-router-dom';

function ToggledMenu(props) {
    function navigateHome(element) {
        props.closeMenu();
        let offsetTop  = document.querySelector(`.${element}`).offsetTop;
        window.scrollTo({
            top: offsetTop, 
            behavior: "smooth"
        });

    }

    return (
        <div className="toggled-menu">
            <ul className="toggled-menu-ul">
                <li className="toggled-menu-item">
                    <div className="menu-home" onClick={()=>{navigateHome('landing')}}></div>
                </li>
                <li className="toggled-menu-item">
                    <div className="menu-about" onClick={()=>{navigateHome('about')}}></div>
                </li>
                <li className="toggled-menu-item">
                    <div className="menu-menu" onClick={()=>{navigateHome('main')}}></div>
                </li>
                <li className="toggled-menu-item">
                    <div className="menu-contact" onClick={()=>{navigateHome('contact')}}></div>
                </li>
                <li className="toggled-menu-item">
                    <Link to='/School-restaurant-page/site_info'><div className="menu-this-site"></div></Link>
                </li>
            </ul>
        </div>
    )
}

export default ToggledMenu;