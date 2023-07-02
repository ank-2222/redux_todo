import React from 'react'
import "./List.css"
import { deleteTodo } from '../actions'
import { useDispatch } from 'react-redux'
function List(props) {
  const dispatch = useDispatch();
  return (
    <div className='listWrap'>
        <div className='listItem'>
            <h5 className='listName'>{props.title}</h5> 
            {/* <button className='deleteBtn' >-</button> */}
            <i onClick={()=>dispatch(deleteTodo(props.id))} class="deleteBtn fa-solid fa-trash"></i>
        </div>



    </div>
  )
}

export default List