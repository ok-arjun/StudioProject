import './App.css';
import Content from './components/Content.js';
import Nav from './components/Nav';
import Footer from './components/footer';
import Gallery from './components/gallery';

import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Login from './components/login';


function App() {

  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/home"><Content/></Route>
        <Route path="/gallery"><Gallery/></Route>
        <Route path="/login"><Login/></Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
