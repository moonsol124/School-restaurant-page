import '../css/main.css';
import MenuItem from './menuItem';

function Main(props) {

    return (
        <div className="main">
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
                            return <MenuItem name={item.name} price={item.price} ingredients={item.ingredients} type={item.type}/>;
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
                            return <MenuItem name={item.name} price={item.price} ingredients={item.ingredients} type={item.type}/>;
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
                            return <MenuItem name={item.name} price={item.price} ingredients={item.ingredients} type={item.type}/>;
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
                            return <MenuItem name={item.name} price={item.price} ingredients={item.ingredients}/>;
                        })}
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Main