import React, { useState } from 'react';

function Login() {
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Send login credentials to the server for authentication
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password}),
      });
      if (response.ok) {
        // If authentication is successful, get the token from the response
        const token  =  await response.json();
        // Store the token in local storage
        // localStorage.setItem('token', token);
        localStorage.setItem('token', JSON.stringify(token));

        console.log(token);
        // If authentication is successful, redirect to dashboard or protected route
        window.location.href = '/products';
      } else {
        // Handle authentication failure, e.g., display error message
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="login flex justify-center items-center h-screen">
      <form onSubmit={handleLogin} className='border border-blue-600 p-10 rounded-lg'>
          <h2 className='text-3xl text-center'>Login</h2>
        <div>
          <label>Username:</label>
          <input type="text" value={name} className="block px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm max-w-[220px]" placeholder='Username'
          onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password"  value={password} className="block px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm max-w-[220px]" placeholder='******'
          onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="block px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm max-w-[220px]">Login</button>
      </form>
    </div>
  );
}

export default Login;

// import React from 'react';

// function login(props) {
//     return (
//         <div>
            
//         </div>
//     );
// }

// export default login;