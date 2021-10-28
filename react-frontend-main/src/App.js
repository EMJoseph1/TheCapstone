import Listpics2 from './components/ListPics2';
import Addpics2 from './components/AddPics2';
import Updatepics2 from './components/UpdatePics2';
import Deletepics2 from './components/DeletePics2';
import Viewpics2 from './components/ViewPics2';

import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import slideshowpage from './components/slideshowpage';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
        <div>
          <Router>
          <Header />
            <div className="container">
              <Switch>
                  <Route path="/" exact component={Listpics2}></Route>
                  <Route path="/pics2" component={Listpics2}></Route>
                  <Route path="/add-pics2" component={Addpics2}></Route>
                  <Route path="/update-pics2/:id" component={Updatepics2}></Route> 
                  <Route path="/delete-pics2/:id" component={Deletepics2}></Route> 
                  <Route path="/view-pics2/:id" component={Viewpics2}></Route> 
                  <Route path="/slideshowpage" component={slideshowpage}></Route>
                  
              </Switch>
            </div>
            <Footer />
            
          </Router>
        </div>
  );
}

export default App;
