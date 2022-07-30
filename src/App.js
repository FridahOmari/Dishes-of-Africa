import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Header from './components/Header'
import Recipes from './pages/Recipes'
import Recipe from './pages/Recipe'


function App() {

  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Route path="/" exact component={Recipes} />
          <Route path="/recipe/:id" component={Recipe} />
        </div>
      </div>
    </Router>
  );
}

export default App;
