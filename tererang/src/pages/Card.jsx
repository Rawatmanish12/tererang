import React from 'react'

export default function Card(props) {
  return (
    <>
         
        <div className="product-grid">
          <div className="product-card">
            <img src={props.image} alt="Product 1" />
            <h3>Product 1</h3>
            <p>₹999</p>
            <button className="btn-add">Add to Cart</button>
          </div>
        </div>
    </>
  )
}
