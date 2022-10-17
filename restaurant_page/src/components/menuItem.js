function menuItem(props) {
    return (
        <div className="menu-item-container">
            <div className='menu-item-name'>
                <p className="menu-item-name"> {props.name} </p>
                <p>  {props.price}$ </p>
                <p className="menu-item-type">  {props.type} </p>
            </div>
            <div className='menu-item-ingredients'>
                {props.ingredients}
            </div>
        </div>
    )
}

export default menuItem;