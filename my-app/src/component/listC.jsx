import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductsList = () => {
  const [Products, setProducts] = useState([]);
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [editingProduct, setEditingProduct] = useState(null);
  const [editedProductName, setEditedProductName] = useState('');
  const [editedProductPrice, setEditedProductPrice] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/user/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching Products:', error);
    }
  };

  const handleNameChange = (event) => {
    setNewProductName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setNewProductPrice(event.target.value);
  };

  const handleEditedNameChange = (event) => {
    setEditedProductName(event.target.value);
  };

  const handleEditedPriceChange = (event) => {
    setEditedProductPrice(event.target.value);
  };

  const addProduct = async () => {
    try {
      const response = await axios.post('http://localhost:3000/user/products', {
        name: newProductName,
        price: newProductPrice,
      });
      if (response.status === 200) {
        fetchProducts();
        setNewProductName('');
        setNewProductPrice('');
      } else {
        console.error('Failed to add todo');
      }
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/user/products/${id}`);
      if (response.status === 200) {
        fetchProducts();
      } else {
        console.error('Failed to delete todo');
      }
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const editProduct = (todo) => {
    setEditingProduct(todo.id);
    setEditedProductName(todo.name);
    setEditedProductPrice(todo.price);
  };

  const saveEditedProduct = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/user/products/${editingProduct}`, {
        name: editedProductName,
        price: editedProductPrice,
      });
      if (response.status === 200) {
        fetchProducts();
        setEditingProduct(null);
        setEditedProductName('');
        setEditedProductPrice('');
      } else {
        console.error('Failed to update todo');
      }
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };
  const token_val = localStorage.getItem('token')
  return (
    <>
    {token_val?(
    <div>
      <p className='text-center text-3xl p-6 '>My Products List</p>
      <div className='flex justify-center items-center flex-wrap'>
        {Products.map((Product) => (
            <div class="max-w-[300px] rounded overflow-hidden shadow-lg m-3">
                <img class="w-full" src="https://via.placeholder.com/350x150"/>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{Product.name}</div>
                    <p>{Product.price} MAD</p>
                    <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
                    eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                {editingProduct === Product.id ? (
                  <>
                    <input type="text" value={editedProductName} onChange={handleEditedNameChange} />
                    <input type="text" value={editedProductPrice} onChange={handleEditedPriceChange} />
                    <button onClick={saveEditedProduct}>Save</button>
                  </>
                  ) : (
                  <>
                    <button onClick={() => editProduct(Product)}>Edit</button>
                    <button onClick={() => deleteProduct(Product.id)}>Delete</button>
                  </>
                )}
            </div>
        ))}
      </div>
      {/* <ul>
        {Products.map((Product) => (
          <li key={Product.id}>
            {editingProduct === Product.id ? (
              <>
                <input type="text" value={editedProductName} onChange={handleEditedNameChange} />
                <input type="text" value={editedProductPrice} onChange={handleEditedPriceChange} />
                <button onClick={saveEditedProduct}>Save</button>
              </>
            ) : (
              <>
                {Product.name} - {Product.price}
                <button onClick={() => editProduct(Product)}>Edit</button>
                <button onClick={() => deleteProduct(Product.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul> */}
      <input type="text" value={newProductName} onChange={handleNameChange} />
      <input type="text" value={newProductPrice} onChange={handlePriceChange} />
      <button onClick={addProduct}>Add Product</button>
    </div>
        ):(
          <p>you're not loggedin</p>
        )}
    </>
  );
};

export default ProductsList;

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