import './App.css';
import CourseForm from './components/CourseForm';
import RegForm from './components/RegForm';
import StudentForm from './components/StudentForm';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/StudentForm">
            <StudentForm/>
          </Route>
          <Route path="/CourseForm">
            <CourseForm/>
          </Route>
          <Route path="/RegForm">
            <RegForm/>
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
