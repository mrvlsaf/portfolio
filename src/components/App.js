import Navbar from "./Navbar";
import { Switch, Route, Redirect, Router } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Projects from "./Projects";


function App() {
  return (
    <>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
      <footer><h4 className="footer">Copyright &copy; {(new Date().getFullYear())} - Devraj Singh. All Rights Reserved</h4></footer>
      </>
  );
}

export default App;





