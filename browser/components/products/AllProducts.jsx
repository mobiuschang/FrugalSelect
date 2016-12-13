import React from 'react';
import { Link } from 'react-router';

export default ({ products }) => {
  return (
    <div>
    {
      products.map((product) => {
        <div key = {product.id}>
          <div>{ product.name }</div>
        </div>
      })
    }
    </div>
  )
}