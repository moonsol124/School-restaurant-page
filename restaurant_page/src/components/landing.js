import '../css/landing.css';

function Landing() {
    return (
        <div className='landing'>
            <div className="landing-header">
                <div className="landing-header-texts">
                    <p className="landing-header-title"> Mario and Luigi's</p>
                    <p className="landing-header-p">An authentic italian experience</p> 
                </div>
                <div className="landing-hr-container">
                    <div className="landing-hr"></div>
                </div>
                <div className="landing-info">
                    <div className="landing-info-container">
                        <ul className="landing-info-ul-1">
                            <h3 className="landing-info-title"> DINNER </h3>
                            <li> 
                                <p className="opening-time-days landing-info-ul-li">MON-THURS</p>
                                <p className="opening-time-address landing-info-ul-li">5PM-11PM</p>    
                            </li>
                            <li> 
                                <p className="opening-time-days landing-info-ul-li">FRI-SUN</p>
                                <p className="opening-time-address landing-info-ul-li">6pm-12am</p>
                            </li>
                        </ul>
                        <div className="landing-info-vl"></div>
                        <ul className="landing-info-ul-2">
                            <h3 className="landing-info-title"> LOCATION </h3>
                            <li> 
                                <p className="opening-time-address">MARGARITA STREET ST.MARTIN, 5252AH, PIZZALAND</p>
                            </li>
                            <li> 
                                <p className="opening-time-address">TEL: 31625128692</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Landing;