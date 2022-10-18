import '../css/navFooter.css';

function Menu(props) {
    return (
        <>
            <div className='menu-btn' onClick={props.toggleMenu}></div>
            {/* <button className='home-btn'> Home </button> */}
        </>
    )
}

export default Menu;