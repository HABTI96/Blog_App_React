import React from 'react';

function Home(props) {
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to the home page!</p>
            
            <a href='http://localhost:5173/user/products'>
                to products
            </a>
        </div>
    );
}

export default Home;