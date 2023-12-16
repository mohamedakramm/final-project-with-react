import React from 'react'
import { Dropdown } from 'react-bootstrap';
import { useEffect } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function CatedorieSelect() {
    const{t}=useTranslation()
    let [categories,setCategories]=useState([]);
    let getCategories=()=>{
        fetch("https://dummyjson.com/products/categories")
        .then(json =>json.json())
        .then(res=>setCategories(res))
    }
    useEffect(()=>{
        
        getCategories();
    },[])
  return (
    
         <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {t('Dropdown Button')}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {
                    categories.map(cat=>
                        
                        <Dropdown.Item href="#/action-1" key={Math.random()}>{cat}</Dropdown.Item>
                        )
                }

                
            </Dropdown.Menu>
    </Dropdown>
    
  )
}
