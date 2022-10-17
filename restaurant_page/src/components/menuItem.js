function menuItem(props) {
    return (
        <div className="menu-item-container">
            <div className='menu-item-name'>
                <p> {props.name} </p>
                <p>  {props.price}$ </p>
                <p>  {props.type} </p>
            </div>
            <div className='menu-item-ingredients'>
                {props.ingredients}
            </div>
        </div>
    )
}

export default menuItem;