import React, { useState } from "react";

export default function ShoppingListForm({addProduct}) {
 const [formData,setFormData] = useState({product:"",quantity:0});
 const handleChange = (e)=>{
  const changedField = e.target.name;
  const changedValue = e.target.value;
  setFormData((currData)=>{
    currData[changedField] = changedValue;
    return {...currData}
  })
 }
 const handleSubmit = (e)=>{
  e.preventDefault();
  addProduct(formData.product,formData.quantity);
 }
  return (
    <div>
      <h1>Add a product</h1>
      <form action="" >
        <label htmlFor="product">Product Name : </label>
        <input type="text" id="product" value={formData.product} name="product" onChange={handleChange} placeholder="samosa" />
        <label htmlFor="quantity">Quantity : </label>
        <input type="number" id="quantity" value={formData.quantity} name="quantity" onChange={handleChange} placeholder="1" />
        <button onClick={handleSubmit}>Order</button>
      </form>
    </div>
  );
}
