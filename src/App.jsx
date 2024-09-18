import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import FormSec from './components/FormSec'
import Items from './components/Items'
import Stats from './components/Stats'

function App() {
  const [items, setItems] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    const itemQuantity = e.target[0].value;
    const itemName = e.target[1].value;
    setItems([...items, { quantity: itemQuantity, name: itemName }])
    e.target.reset()
  }
  function deleteItem(i) {
    items.splice(i, 1)
    setItems([...items])
  }

  function packedItems(){
    
  }

  function clearList() {
    confirm('Are you sure you want to clear all items?') ? setItems([]) : ''
  }

  return (
    <>
      <NavBar />
      <hr />
      <FormSec submission={handleSubmit} />
      <hr />
      <Items items={items} dele={deleteItem} clear={clearList} />
      <Stats items={items} />
    </>
  )
}

export default App
