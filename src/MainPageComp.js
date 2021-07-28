import { Switch, Route, Link } from 'react-router-dom';
import AllStoriesComp from './stories/AllStoriesComp';
import SingleStoryComp from './stories/SingleStoryComp';
import BooksComp from './books/BooksComp';
import AboutComp from './about/AboutComp';
import ContactComp from './contact/ContactComp';
import './App.css';

function MainPageComp() {

    return (
        <div className="MainPageDiv">
            <div className="header">
               <Link to="/" className="siteHeaderText"> <h1>הגיגי האזרח הותיק</h1></Link>
            </div>
            <div>
                <ul>
                    <li><a className="active" href="/">אודות</a></li>
                    <li><a href="/AllStoriesComp">כל ההגיגים</a></li>
                    <li><a href="/BooksComp">ספרים</a></li>
                    <li><a href="/ContactComp">צור קשר</a></li>
                </ul>
            </div>
            <div className="bodyDiv">
                <Switch>
                    <Route exact path="/" component={AboutComp}/>
                    <Route path="/AllStoriesComp" component={AllStoriesComp} />
                    <Route path="/SingleStoryComp/:id" component={SingleStoryComp} />
                    <Route path="/BooksComp" component={BooksComp}/>
                    <Route path="/ContactComp" component={ContactComp}/>
                </Switch>
            </div>
            <div className="footerDiv">
            <h5>photos by Pixabay.com | website by Omri Altman | altmanomri@gmail.com</h5>
            </div>
        </div>

    )
}
export default MainPageComp;