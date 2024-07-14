import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from 'react'
import SearchItem from "./SearchItem";

function App() {

  const[items, setItems] =useState(JSON.parse(localStorage.getItem('Todo_list'))
    )


    const [newItem, setNewItem] = useState('')
    const [search, setSearch] =useState(' ')

    
    const addItem=(item)=>{
      const id = items.length ? items[items.length -1].id +1 :1
      const addNewItem = {id,checked:false , item}
      const listItems =[...items , addNewItem]
      setItems(listItems)
      localStorage.setItem("Todo_list",JSON.stringify
      (listItems))
    }
    const handleCheck = (id)=>{
        const listItems = items.map((item)=>
        item.id===id ?{...item,checked:!item.checked}:
        item)
        setItems(listItems)
        localStorage.setItem("Todo_list",JSON.stringify
        (listItems))

    }

    const handleDelete =(id) =>{
        const listItems = items.filter((item) => 
        item.id!==id)

        setItems(listItems)
        localStorage.setItem("Todo_list",JSON.stringify
        (listItems))
        
    }
    const handelSubmit = (e)=>{
      e.preventDefault()
      console.log(newItem)
      if(!newItem) return
      addItem(newItem)
      setNewItem('')


    }
 
  return (
    <div className="App" >
      <Header title= "To do list"/>
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handelSubmit = {handelSubmit}
      />
      <SearchItem 
      search ={search}
      setSearch ={setSearch }
      />
      <Content 
      items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
      <Footer 
      length={items.length}
      />
    </div>
   
  );
}

export default App;