import '../css/navFooter.css';

function Menu(props) {
    return (
        <>
            <button className='menu-btn' onClick={props.toggleMenu}> Menu </button>
            <button className='home-btn'> Home </button>
        </>
    )
}

export default Menu;