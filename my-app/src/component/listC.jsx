import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodoName, setNewTodoName] = useState('');
  const [newTodoPrice, setNewTodoPrice] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);
  const [editedTodoName, setEditedTodoName] = useState('');
  const [editedTodoPrice, setEditedTodoPrice] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/user/products');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleNameChange = (event) => {
    setNewTodoName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setNewTodoPrice(event.target.value);
  };

  const handleEditedNameChange = (event) => {
    setEditedTodoName(event.target.value);
  };

  const handleEditedPriceChange = (event) => {
    setEditedTodoPrice(event.target.value);
  };

  const addTodo = async () => {
    try {
      const response = await axios.post('http://localhost:3000/user/products', {
        name: newTodoName,
        price: newTodoPrice,
      });
      if (response.status === 200) {
        fetchTodos();
        setNewTodoName('');
        setNewTodoPrice('');
      } else {
        console.error('Failed to add todo');
      }
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/user/products/${id}`);
      if (response.status === 200) {
        fetchTodos();
      } else {
        console.error('Failed to delete todo');
      }
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const editTodo = (todo) => {
    setEditingTodo(todo.id);
    setEditedTodoName(todo.name);
    setEditedTodoPrice(todo.price);
  };

  const saveEditedTodo = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/user/products/${editingTodo}`, {
        name: editedTodoName,
        price: editedTodoPrice,
      });
      if (response.status === 200) {
        fetchTodos();
        setEditingTodo(null);
        setEditedTodoName('');
        setEditedTodoPrice('');
      } else {
        console.error('Failed to update todo');
      }
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editingTodo === todo.id ? (
              <>
                <input type="text" value={editedTodoName} onChange={handleEditedNameChange} />
                <input type="text" value={editedTodoPrice} onChange={handleEditedPriceChange} />
                <button onClick={saveEditedTodo}>Save</button>
              </>
            ) : (
              <>
                {todo.name} - {todo.price}
                <button onClick={() => editTodo(todo)}>Edit</button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <input type="text" value={newTodoName} onChange={handleNameChange} />
      <input type="text" value={newTodoPrice} onChange={handlePriceChange} />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default TodoList;

//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------


// import React, { useState, useEffect } from 'react';

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);
//   const [newTodoName, setNewTodoName] = useState('');
//   const [newTodoPrice, setNewTodoPrice] = useState('');
//   const [editingTodo, setEditingTodo] = useState(null);
//   const [editedTodoName, setEditedTodoName] = useState('');
//   const [editedTodoPrice, setEditedTodoPrice] = useState('');

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const fetchTodos = async () => {
//     try {
//       const response = await fetch('http://localhost:3000/user/products');
//       const data = await response.json();
//       setTodos(data);
//     } catch (error) {
//       console.error('Error fetching todos:', error);
//     }
//   };

//   const handleNameChange = (event) => {
//     setNewTodoName(event.target.value);
//   };

//   const handlePriceChange = (event) => {
//     setNewTodoPrice(event.target.value);
//   };

//   const handleEditedNameChange = (event) => {
//     setEditedTodoName(event.target.value);
//   };

//   const handleEditedPriceChange = (event) => {
//     setEditedTodoPrice(event.target.value);
//   };

//   const addTodo = async () => {
//     try {
//       const response = await fetch('http://localhost:3000/user/products', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name: newTodoName, price: newTodoPrice }),
//       });
//       if (response.ok) {
//         fetchTodos();
//         setNewTodoName('');
//         setNewTodoPrice('');
//       } else {
//         console.error('Failed to add todo');
//       }
//     } catch (error) {
//       console.error('Error adding todo:', error);
//     }
//   };

//   const deleteTodo = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:3000/user/products/${id}`, {
//         method: 'DELETE',
//       });
//       if (response.ok) {
//         fetchTodos();
//       } else {
//         console.error('Failed to delete todo');
//       }
//     } catch (error) {
//       console.error('Error deleting todo:', error);
//     }
//   };

//   const editTodo = (todo) => {
//     setEditingTodo(todo.id);
//     setEditedTodoName(todo.name);
//     setEditedTodoPrice(todo.price);
//   };

//   const saveEditedTodo = async () => {
//     try {
//       const response = await fetch(`http://localhost:3000/user/products/${editingTodo}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name: editedTodoName, price: editedTodoPrice }),
//       });
//       if (response.ok) {
//         fetchTodos();
//         setEditingTodo(null);
//         setEditedTodoName('');
//         setEditedTodoPrice('');
//       } else {
//         console.error('Failed to update todo');
//       }
//     } catch (error) {
//       console.error('Error updating todo:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Todo List</h2>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             {editingTodo === todo.id ? (
//               <>
//                 <input type="text" value={editedTodoName} onChange={handleEditedNameChange} />
//                 <input type="text" value={editedTodoPrice} onChange={handleEditedPriceChange} />
//                 <button onClick={saveEditedTodo}>Save</button>
//               </>
//             ) : (
//               <>
//                 {todo.name} - {todo.price}
//                 <button onClick={() => editTodo(todo)}>Edit</button>
//                 <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//       <input type="text" value={newTodoName} onChange={handleNameChange} />
//       <input type="text" value={newTodoPrice} onChange={handlePriceChange} />
//       <button onClick={addTodo}>Add Todo</button>
//     </div>
//   );
// };

// export default TodoList;

//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------

// import React, { useState, useEffect } from 'react';

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState('');
//   const [editingTodo, setEditingTodo] = useState(null);
//   const [editedTodoText, setEditedTodoText] = useState({ name: '', price: '' });
// //   const [editedTodoText, setEditedTodoText] = useState('');

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const fetchTodos = async () => {
//     try {
//       const response = await fetch('http://localhost:3000/user/products');
//       const data = await response.json();
//       setTodos(data);
//     } catch (error) {
//       console.error('Error fetching todos:', error);
//     }
//   };

//   const handleInputChange = (event) => {
//     setNewTodo(event.target.value);
//   };

//   const handleEditInputChange = (event) => {
//     setEditedTodoText(event.target.value);
//   };

//   const addTodo = async () => {
//     try {
//       const response = await fetch('http://localhost:3000/user/products', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ text: newTodo }),
//       });
//       if (response.ok) {
//         fetchTodos();
//         setNewTodo('');
//       } else {
//         console.error('Failed to add todo');
//       }
//     } catch (error) {
//       console.error('Error adding todo:', error);
//     }
//   };

//   const deleteTodo = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:3000/user/products/${id}`, {
//         method: 'DELETE',
//       });
//       if (response.ok) {
//         fetchTodos();
//       } else {
//         console.error('Failed to delete todo');
//       }
//     } catch (error) {
//       console.error('Error deleting todo:', error);
//     }
//   };

//   const editTodo = (todo) => {
//     setEditingTodo(todo.id);
//     // setEditedTodoText(todo.text);
//     setEditedTodoName(todo.name);
//     setEditedTodoPrice(todo.price);
//   };

//   const saveEditedTodo = async () => {
//     try {
//       const response = await fetch(`http://localhost:3000/user/products/${editingTodo}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         // body: JSON.stringify({ text: editedTodoText }),
//         body: JSON.stringify({ name: editedTodoName, price: editedTodoPrice }),
//       });
//       if (response.ok) {
//         fetchTodos();
//         setEditingTodo(null);
//         // setEditedTodoText('');
//         setEditedTodoName('');
//         setEditedTodoPrice('');
//       } else {
//         console.error('Failed to update todo');
//       }
//     } catch (error) {
//       console.error('Error updating todo:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Todo List</h2>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             {editingTodo === todo.id ? (
//               <>
//                 {/* <input type="text" value={editedTodoText} onChange={handleEditInputChange} /> */}
//                 <input type="text" value={editedTodoName} onChange={handleEditedNameChange} />
//                 <input type="text" value={editedTodoPrice} onChange={handleEditedPriceChange} />
//                 <button onClick={saveEditedTodo}>Save</button>
//               </>
//             ) : (
//               <>
//                 {todo.name} - {todo.price}
//                 <button onClick={() => editTodo(todo)}>Edit</button>
//                 <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//       <input type="text" value={newTodoName} onChange={handleNameChange} />
//       <input type="text" value={newTodoPrice} onChange={handlePriceChange} />
//       {/* <input type="text" value={newTodo} onChange={handleInputChange} /> */}
//       <button onClick={addTodo}>Add Todo</button>
//     </div>
//   );
// };

// export default TodoList;


// // export default ListC;