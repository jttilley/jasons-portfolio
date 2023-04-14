// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Portfolio from './pages/portfolio';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"><Portfolio /></Route>  {/* component={Portfolio} */}
          <Route exact path="/jasons-portfolio"><Portfolio /></Route>  {/* component={Portfolio} */}
          <Route path="/about"><About /></Route>  {/* component={About}  /> */}
          <Route path="/contact"><Contact /></Route>  {/* component={Contact} /> */}
          <Route path="/jasons-portfolio/about"><About /></Route>  {/* component={About}  /> */}
          <Route path="/jasons-portfolio/contact"><Contact /></Route>  {/* component={Contact} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

    // <Link to="/">Home</Link>
    // <Link to="/about">About</Link>
    // <Link to="/dashboard">Dashboard</Link> 
    // <Switch>
    //   <Route exact path="/">
    //     <Home />
    //   </Route>
    //   <Route path="/about">
    //     <About />
    //   </Route>
    //   <Route path="/dashboard">
    //     <Dashboard />
    //   </Route>
    // </Switch>