import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './Cards';

function Home() {
    const [Products, setProducts] = useState([]);
    useEffect(() => {
        fetchProducts();
      }, []);
    
      const fetchProducts = async () => {
        try {
          const response = await axios.get('http://localhost:3000/user/products');
          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching todos:', error);
        }
      };
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to the home page!</p>
            <div className='flex justify-center items-center flex-wrap'>
                {Products.map(product=>(
                    <>
                    <Cards name={product.name} price={product.price}/>
                    {/* <Cards key={product.id} id={product.id} name={product.name} price={product.price} /> */}
                    </>
                ))}
            </div>
        </div>
    );
}

export default Home;