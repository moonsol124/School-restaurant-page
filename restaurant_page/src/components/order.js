import '../css/main.css';
import OrderItemForm from './orderForm';
import {useNavigate} from 'react-router-dom';

function Order(props) {
    const navigate = useNavigate();

    function sendOrder(e) {
        e.preventDefault();
        const orderList = [];
        for (let i = 0; i < e.target.length; i++) {
            if (e.target[i].checked) {
                const orderInfo = (e.target[i].name).split(',');
                orderList.push({'name': orderInfo[0], 'price': orderInfo[1]});
            }
        }
        
        const url = 'http://localhost:5000/order';
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-type': 'application/json; charset=UTF=8'},
            body: JSON.stringify({
                order: orderList,
            })
        };

        fetch(url, requestOptions)
        .then(data => {
            return data.json();
        })
        .then(res => {
            props.getOrderNumber(res['order_number']);
            navigate('/School-restaurant-page/order/complete');
        })
    }

    return (
        <form className="main" onSubmit={sendOrder}>
            <div className="main-header">
                <div className="main-header-texts">
                    <p className="main-header-tiitle"> Menu </p>
                    <p className="main-header-subtitle"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <div className="main-hr-container">
                        <div className="main-hr"> 
                    </div>
                </div>
                </div>
            </div>
            <div className="main-content">
                <div className="main-menu">
                    <div className="main-menu-name">
                        <div className="main-menu-img-container">
                            <div className="main-menu-img entry">
                            </div>
                        </div>
                        <div>
                            <h3> Entry </h3>
                            <p> To start with</p>
                        </div>
                    </div>
                    <div className="menu-items">
                        {props.entryMenu.map((item) => {
                            return  <OrderItemForm name={item.name} price={item.price} ingredients={item.ingredients} type={item.type} orderType='entry'/>;
                        })}
                    </div>
                </div>
            </div>
            <div className="main-content">
                <div className="main-menu">
                    <div className="main-menu-name">
                        <div className="main-menu-img-container">
                            <div className="main-menu-img pizza">
                            </div>
                        </div>
                        <div>
                            <h3> Pizza </h3>
                            <p> A heavenly taste</p>
                        </div>
                    </div>
                    <div className="menu-items">
                        {props.pizzaMenu.map((item) => {
                            return  <OrderItemForm name={item.name} price={item.price} ingredients={item.ingredients} type={item.type} orderType='pizza'/>;
                        })}
                    </div>
                </div>
            </div>
            <div className="main-content">
                <div className="main-menu">
                    <div className="main-menu-name">
                        <div className="main-menu-img-container">
                            <div className="main-menu-img pasta">
                            </div>
                        </div>
                        <div>
                            <h3> Pasta </h3>
                            <p> A delightful delicacy</p>
                        </div>
                    </div>
                    <div className="menu-items">
                        {props.pastaMenu.map((item) => {
                            return  <OrderItemForm name={item.name} price={item.price} ingredients={item.ingredients} type={item.type} orderType='pasta'/>;
                        })}
                    </div>
                </div>
            </div>
            <div className="main-content">
                <div className="main-menu">
                    <div className="main-menu-name">
                        <div className="main-menu-img-container">
                            <div className="main-menu-img drink">
                            </div>
                        </div>
                        <div>
                            <h3> Drink </h3>
                            <p> A fantastic time</p>
                        </div>
                    </div>
                    <div className="menu-items">
                        {props.drinkMenu.map((item) => {
                            return  <OrderItemForm name={item.name} price={item.price} ingredients={item.ingredients} orderType='drinks'/>;
                        })}
                    </div>
                </div>
            </div>
            <div class='main-btn-container'>
                <button type='submit' className="order-btn-form">SUBMIT ORDER</button>
            </div>
        </form> 
    )
}

export default Order;