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
        window.location.href = '/';
      } else {
        // Handle authentication failure, e.g., display error message
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input type="text" value={name}  onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
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