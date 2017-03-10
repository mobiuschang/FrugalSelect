import React from 'react';
import { Link } from 'react-router';

export default ({ products }) => {
  return (
    <div>
     { products && products.map(product => (
        <ul key = {product.id}>
          <li> {product.name}</li>
          <li> {product.price}</li>
          <ul key = {product.alternative.id} >
            <li> {product.alternative.name}</li>
            <li> {product.alternative.price}</li>
          </ul>
        </ul>
      ))}
    </div>
  )
}