import React, { useState, useEffect } from 'react';

export function MainContent() {
    const [posts, setPosts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [newPost, setNewPost] = useState({ name: '' , price:''});

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch('http://localhost:3000/user/products');
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    //----------------------------------------------------------------
    const handleSubmit = async (event) => {
        try {
            const response = await fetch('http://localhost:3000/user/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPost),
            });
            if (!response.ok) {
                throw new Error('Failed to add post');
            }
            // Assuming the backend returns the updated list of posts
            const data = await response.json();
            setPosts(data);
            // Update the posts state by adding the new post to the existing list
            // setPosts([...posts, data]);
            setNewPost({ name: '', price: '' });
            // Fetch the updated posts
            fetchPosts();
        } catch (error) {
            console.error('Error adding post:', error);
        }
    };
    //----------------------------------------------------------------


    const handleEdit = (product) => {
        setSelectedProduct(product);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPost({ ...newPost, [name]: value });
        setSelectedProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setNewPost({ ...newPost, [name]: value });
    // };

    const handleUpdate = async () => {
        try {
            const response = await fetch(`http://localhost:3000/user/products/${selectedProduct.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(selectedProduct),
            });
            if (!response.ok) {
                throw new Error('Failed to update product');
            }
            fetchPosts(); // Refresh the product list after updating
            setSelectedProduct(null); // Clear the selected product after updating
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <>
        <form onSubmit={handleSubmit} className='formAddNewPost'>
            <p>Name</p>
            <input
                type="text"
                name="name"
                value={newPost.name}
                onChange={handleInputChange}
            />
            <p>Price</p>
            <input
                type="text"
                name="price"
                value={newPost.price}
                onChange={handleInputChange}
            />
        <button type="submit">Add Post</button>
    </form>
            <div className='postContainer'>
                {posts.map(post => (
                    <div className='post' key={post.id} onClick={() => handleEdit(post)}>
                        <h4>{post.name}</h4>
                        <h5>{post.price}</h5>
                    </div>
                ))}
            </div>
            {selectedProduct && (
                <div className="editForm">
                    <h2>Edit Product</h2>
                    <input
                        type="text"
                        name="name"
                        value={selectedProduct.name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="price"
                        value={selectedProduct.price}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleUpdate}>Update</button>
                </div>
            )}
            <pre>{JSON.stringify(posts, null, 2)}</pre>
        </>
    );
}