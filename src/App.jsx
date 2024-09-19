import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import FormSec from './components/FormSec'
import Items from './components/Items'
import Stats from './components/Stats'

function App() {
  const [items, setItems] = useState([])
  const [packed, setPacked] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const itemQuantity = e.target[0].value;
    const itemName = e.target[1].value;
    setItems([...items, { quantity: itemQuantity, name: itemName }])
    e.target.reset()
  }

  const deleteItem = (i) => {
    items.splice(i, 1)
    setItems([...items])
  }

  const handleCheck = (ind) => {
    const newItems = items.map((item, i) =>
      i === ind ? { ...item, checked: !item.checked } : item
    );
    setItems(newItems);

    const updatedCheckedItems = newItems.filter(item => item.checked);
    setPacked(updatedCheckedItems);
  }

  const clearList = () => {
    confirm('Are you sure you want to clear all items?') && (setItems([], setPacked([])))
  }

  return (
    <>
      <NavBar />
      <FormSec submission={handleSubmit} />
      <Items items={items} dele={deleteItem} clear={clearList} ch={handleCheck} />
      <Stats items={items} packed={packed} />
    </>
  )
}

export default App
