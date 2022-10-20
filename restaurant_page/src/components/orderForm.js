function menuItemForm(props) {
    return (
        <div className="menu-item-container">
            <div className='menu-order-item-name'>
                <p className='menu-item-name-title'> {props.name} </p>
                <p>  {props.price} € </p>
                <p className="menu-item-type">  {props.type} </p>
                <div className="order-checkbox-container">
                    <label htmlFor={props.name}></label>
                    <input type='checkbox' name={[props.name, props.price]} id={props.name} value={props.name}></input>
                </div>
            </div>
            <div className='menu-item-ingredients'>
                {props.ingredients}
            </div>
        </div>
    )
}

export default menuItemForm;