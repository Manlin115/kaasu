import React from 'react'
import { FaPlus } from 'react-icons/fa'
const AddItem = ({newItem , setNewItem , handelSubmit}) => {
  return (
    <form className="addForm" onClick={handelSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input
        autoFocus
        id='addItem'
        type='text'
        placeholder='Add Items'
        required 
        value={newItem}
        onChange={(e)=> setNewItem(e.target.value)}
        />
        <button
            type='submit'
            aria-label='Add Item'
        >
             <FaPlus />
        </button>
    </form>
  )
}

export default AddItem