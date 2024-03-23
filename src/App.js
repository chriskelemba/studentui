import './App.css';
import CourseForm from './components/CourseForm';
import RegForm from './components/RegForm';
import StudentForm from './components/StudentForm';

function App() {
  return (
    <div className="App">
      <RegForm/>
      <StudentForm/>
      <CourseForm/>
    </div>
  );
}

export default App;
