import './App.css';
import {useState, useEffect} from 'react';
import {ToDoForm} from './components/ToDoForm';
import {ToDoList} from './components/ToDoList';

function App() {
  const [ToDos, setToDos] = useState([]);
  const [Status, setStatus] = useState('all');
  let filteredToDos;

  useEffect(() => {
    getFromLocalStorage();
   }, [])

 
   useEffect(() => {
    setInLocalStorage('react-todos', ToDos);
   }, [ToDos]);

   

const filterToDos = (status) => {
  switch(status){
    case ('uncompleted'):
      filteredToDos = ToDos.filter(todo => !todo.status);
      break;
    case ('completed'):
      filteredToDos = ToDos.filter(todo => todo.status);
      break;
    default:
      filteredToDos = ToDos;
      break;
    }
}
  filterToDos(Status);

   
  const getFromLocalStorage = () => {
    let storageTodos = localStorage.getItem('react-todos');
    if(storageTodos === null){
       setInLocalStorage(`react-todos`, []);
    }else{
       setToDos(JSON.parse(storageTodos));
    }
  }


  const setInLocalStorage = (name, value) => {
      localStorage.setItem(name, JSON.stringify(value));
  }


  const addTodo = (input) => {
    // Add Chronologically
    setToDos([input, ...ToDos]);
    // or
    // let newToDos = [...ToDos, input];
    // newToDos.reverse();
    // setToDos(newToDos);
  }


  return (
    <div className="todo-app p-2 p-sm-3 p-md-4 text-center text-light">
     <h2 className="m-1 m-sm-2 p-1">My plans</h2>
     <ToDoForm Status={Status} setStatus={setStatus} onSubmit={addTodo}/>
     <ToDoList ToDos={ToDos} setToDos={setToDos} filteredToDos={filteredToDos}/>
    </div>
  );
}

export default App;
