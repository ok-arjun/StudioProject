import './App.css';

function App() {
  return (
    <div className="app">
      <nav class="navbar navbar-dark navbar-expand-lg position-fixed">
        <a class="navbar-brand" href="#"><b>O K Arjun</b></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#home">&nbsp;Home&nbsp;</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#Gallery">&nbsp;Gallery&nbsp;</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#Login">&nbsp;Login&nbsp;</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#contact">&nbsp;Contact
                us&nbsp;</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="card">
          <img className="card-img-top" src="https://pbs.twimg.com/media/DIgfVVtUIAAAOLq.jpg" alt="card-img"></img>
          <div className="card-body">
              <h5 className="card-title">Smudge Paintings</h5>
              <button className="btn btn-primary">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
