import React, { useEffect, useState } from 'react'

function ProductList() {
    const [products, setProducts] = useState([]);
    console.log(products);

    useEffect(()=>{
      fetch('http://localhost:8000/products')
    .then(response => response.json())
    .then( data => setProducts(data));
    }, []);

  return (
    <div>
        <h1>Product List</h1>
    </div>
  )
}

export default ProductList