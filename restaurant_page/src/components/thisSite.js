import '../css/thisSite.css';
import { Link } from 'react-router-dom';

function Site() {
    return (
        <div className="thisSite-container">
            <div className="thisSite-header">
                <div className="thisSite-texts">
                    <p className="landing-header-title thisSite-texts"> Site info and image sources</p>
                    <p className="this-site-p">Hi, my name is Sol Moon</p> 
                    <p className="this-site-p"> I study ICT at Fontys Hogeschool(Netherlands) and I made this webpage as part of an assignment.</p>
                    <p className="this-site-p">In the original assignment, it's an application involving the use of Flask as a backend and a small arduino to simulate a real restaurant.</p>
                    <p className="this-site-p">But on github I only uploaded the static front end part of the application.</p>
                    <p className="this-site-p">This website is fully responsive.</p>
                    <p className="this-site-p">Thanks for viewing my webpage. I hope you liked it.</p>
                    <p > image sources: </p>
                    <p> landing page: https://www.freepik.com/free-photo/spices-black-background-space-text_9433909.htm#query=pizza%20background&position=21&from_view=search&track=sph
            by: pvproductions </p>
            <p> about page: https://www.freepik.com/free-photo/vegetables-set-left-black-slate_986619.htm#query=pizza%20background&position=9&from_view=search&track=sph">Image by valeria_aksakova</p>
                    <p> menu page: https://www.freepik.com/free-photo/vintage-old-rustic-cutlery-dark_6216945.htm#query=pizza%20background&position=19&from_view=search&track=sph">Image by valeria_aksakova</p>
                    <p> contact page: https://www.freepik.com/free-photo/view-italian-food-composition_9095212.htm#page=2&query=pizza%20background&position=19&from_view=search&track=sph</p>
                    <p> icon images: https://www.flaticon.com/search?type=icon&word=about&license=&color=&shape=&current_section=&author_id=&pack_id=&family_id=&style_id=&choice=&type=icon</p>
                    <p> https://freeicons.io/search/icons?q=menu&iuc=1058605951&page=4 </p>
                </div>
                <div className="thisSite-btn-container">
                    <Link to='/home/'><button className="thisSite-btn"> Back to main</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Site;