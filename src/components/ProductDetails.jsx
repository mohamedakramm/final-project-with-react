import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
  let params=useParams();
  let[product,setProduct]=useState({})

  let getProduct=()=>{
    fetch(`https://dummyjson.com/products/${params.productId}`)
    .then(json=>json.json())
    .then(res=>setProduct(res))
  }
  useEffect(()=>{
    getProduct();
  },)
  return (
    <div className='m-4 text-center'>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.id}  />
      <div>{product.description}</div>
    </div>
  )
}
