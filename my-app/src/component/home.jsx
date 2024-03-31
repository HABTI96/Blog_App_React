import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './Cards';
import Button from './Button';
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
            <p className='text-center text-3xl p-5'>Welcome to the home page!</p>
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