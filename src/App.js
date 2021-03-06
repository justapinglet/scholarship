import './App.css';
import Home from './Pages/Home';
import Info from './Pages/Info';
import Alert from './Pages/Alert';
import {Route, Link} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Map from './Components/Map';
import Graph from './Components/Graph';

function App() {

  return (
    <div className="App">
        <Navbar />
        <div className="parent">
          <Header />
          <div className="page-content" id='pageContent'>
            <Route exact path="/">
              <Home>
                <Map/>
              </Home>
            </Route>
            <Route exact path="/alert" component={Alert} />
            <Route exact path="/info" component={Info} />
            <Route exact path={["/ML", "/MG", "/SMG", "/ST", "/PC"]}  component={Graph} />
          </div>
        </div>
    </div>

  );
}

export default App;
