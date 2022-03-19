import React from 'react';
import { ToDo } from './ToDo';

export const ToDoList = ({ToDos, setToDos,filteredToDos}) => {
  return (
    <div id="todosList">
      <ul>
          {
            filteredToDos.length > 0 && filteredToDos.map(todo => 
                <ToDo key={todo.id} todo={todo}  ToDos={ToDos} setToDos={setToDos}/>
                )
          }
      </ul>
    </div>
  )
}
