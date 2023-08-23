import logo from './logo.svg';
import './App.css';
import Student from './Student'
import Fruit from './Fruit'

function App() {
  const student = {
    name: 'John',
    age: 25,
    salary:25000
  }
  const fruit = {
    name: 'Apple',
    color: 'Red',
  }
  return (
    <div className="App">
      <Student student={student}/>
      <Fruit fruit={fruit}/>
    </div>
  );
}

export default App;
