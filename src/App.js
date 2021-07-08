import './App.css';
import Content from './components/Content.js';
import Nav from './components/Nav';
import Carousel from './components/carousel';
import Footer from './components/footer';

function App() {

  return (
    <diV className="body">
      <Nav/>
      <Carousel></Carousel>
      <Content/>
      <Footer></Footer>
    </diV>
  );
}

export default App;
