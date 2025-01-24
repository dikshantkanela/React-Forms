import React from 'react'
import { useState } from 'react'
import ShoppingListForm from './ShoppingListForm'
export default function ShoppingList() {
    const [items,setItems] = useState([{id:1,product:"apples",quantity:5},{id:2,product:"peanuts",quantity:100}])
    const addProduct = (product,quantity)=>{
        const newProduct = {product:product,quantity:quantity,id:items.length+1}; //create a new product
        setItems((currItems)=>{
          return  [...currItems,newProduct]; // add new product in the array of products
        })
    }
  return (
    <div>
     <h1>All products</h1>
      <ul>
        {items.map((item)=>{
            return <li style={{listStyle:'none'}} key={item.id}>{item.product} - {item.quantity}</li>
        })}
      </ul>
      <ShoppingListForm addProduct = {addProduct}/>
    </div>
  )
}

