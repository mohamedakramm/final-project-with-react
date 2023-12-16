import React from 'react'
import {Card} from 'react-bootstrap';
import { useTranslation } from 'react-i18next'

import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function SingleProduct({product}) {
    const {t}=useTranslation();
  return (
    
        <Col lg='3' md='6' sm='12' className='p-3 '>
                            <Card className='h-100'>
                                <Card.Img className='h-50' variant="top" src={product.thumbnail} />
                                <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                            <Card.Text>
                                                {product.description}
                                            </Card.Text>
                                            <Link to={`./${product.id}`} className='btn btn-primary' >
                                                { t('view Ditiels')}
                                            </Link>
                               
                                </Card.Body>
                            </Card>
         </Col>
    
  )
}
