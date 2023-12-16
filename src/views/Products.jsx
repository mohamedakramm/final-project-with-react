import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next'


import {  Container, Row  } from 'react-bootstrap';

import SingleProduct from '../components/SingleProduct';
import CatedorieSelect from '../components/CatedorieSelect';


export default function Products() {
    const {t}=useTranslation();
    let [products,setProducts]=useState([])
   
let getProducts=()=>{
    fetch("https://dummyjson.com/products")
    .then(json =>json.json())
    .then(res=>setProducts(res.products))
}

useEffect(()=>{
    getProducts();
},[])

  return (
    <div className='m-5 text-center'>
        <h1>{t('Products')}</h1>
        <Container fluid>
         <CatedorieSelect />
            <Row>
                  {  
                    products.map(product=>
                       <SingleProduct product={product}  key={product.id}/>
                    )
                }
            </Row>
        </Container>

      
    </div>
  )
}
