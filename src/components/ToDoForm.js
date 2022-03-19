import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { MdAdd, MdFilterListAlt, MdCheck, MdClose } from 'react-icons/md';

export const ToDoForm = ({Status, setStatus, Edit, setEdit, onSubmit}) => {
    const taskField = useRef();
    const [editVal, setEditVal] = useState(Edit ? Edit.text : '');

    const handleSubmit = (e) => {
     e.preventDefault();
     let text = taskField.current.value.trim();
     if(text){
        if(Edit){
          onSubmit(text);
        }else{
          onSubmit({id: Date.now(), text, status: false});
        }
        
        taskField.current.value = '';
     }
    }

    useEffect(() => {
      taskField.current.focus();
    }, [])


  return (
    <form onSubmit={handleSubmit}>
      {
        Edit ?
        <div className="input-group mb-3">
          <input type="text" className="form-control" ref={taskField} value={editVal} onChange={(e) => {setEditVal(e.target.value)}}/>
          <button type="submit" className="btn  btn-update"><MdCheck/></button>
          <button className="btn  btn-cancel" onClick={() => {setEdit({...Edit, id: null})}}><MdClose/></button>
        </div>
       :
        <>
          <div className="input-group mb-3">
            <input className="form-control" type="text" ref={taskField} />
            <button type="submit" className="btn btn-add"><MdAdd/></button>
          </div>
          <div id="filter-group" className="input-group mb-3 mb-sm-4 mb-md-5" title="filter">
          <label class="input-group-text" htmlFor="filter-select"><MdFilterListAlt/></label>
          <select id="filter-select" className="form-select" value={Status} onChange={(e) => {setStatus(e.target.value)}}>
              <option value="all">All Tasks</option>
              <option value="completed">Completed Tasks</option>
              <option value="uncompleted">Uncompleted Tasks</option>
          </select> 
          </div> 
        </>
      }
    </form>
  )
}
