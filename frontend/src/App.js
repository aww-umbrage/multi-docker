import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Fib from "./Fib";
import OtherPage from "./OtherPage";
import logo from "./logo.svg";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>

          <div>
            <Route exact path="/" component={Fib} />
            <Route path="/otherpage" component={OtherPage} />
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
