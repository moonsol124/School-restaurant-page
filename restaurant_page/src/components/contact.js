import '../css/contact.css';

function Contact() {
    return (
        <div className="contact">
            <div className="contact-header">
                <div className="contact-header-texts">
                    <div>
                        <p className='contact-header-title'> Contact</p>
                    </div> 
                    <div className="contact-info-container">
                        <p className="contact-info-detail"> MARGARITA STREET ST.MARTIN, 5252AH, PIZZALAND </p>
                        <p className="contact-info-name">LOCATION</p>
                    </div>
                    <div className="contact-info-container">
                        <p className="contact-info-detail">+31625128692</p>
                        <p className="contact-info-name">RESTAURANT RESERVATION</p> 
                    </div>
                    <div className="contact-info-container">
                        <p className="contact-info-detail">+31625128691</p>
                        <p className="contact-info-name">GROUP RESERVATION</p> 
                    </div>
                    <div className="contact-info-container">
                        <p className="contact-info-detail">ilikemargarita@gmail.com</p>
                        <p className="contact-info-name">INQUIRIES</p> 
                    </div>
                </div>
                <div className="map-container">
                    <iframe title="map" width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-56.25000000000001%2C9.795677582829743%2C65.39062500000001%2C73.87371654457475&amp;layer=mapnik&amp;marker=51.890053935216926%2C4.5703125" className="contact-map"></iframe>
                    <br/>
                    <small>
                        <a href="https://www.openstreetmap.org/?mlat=51.89&amp;mlon=4.57#map=3/51.89/4.57">View Larger Map</a>
                    </small>
                </div>
            </div>
        </div>
    )
}

export default Contact;