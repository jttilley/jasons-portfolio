import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useRoutes} from 'react-router-dom';
import Portfolio from './components/portfolio';
import About from './components/about';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      {/* <Portfolio/> */}
      <Router>
          <Route path="/" component={Portfolio} />
          <Route path="/about" component={About}  />
          <Route path="/contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
