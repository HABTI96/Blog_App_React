// import React from 'react'
// // import './MainContent.css'
// export function MainContent({posts}){

//     return (
//         <>
//             <body>
//                 <div className='post-parent'>
//                     {posts.map(post=>
//                     <div className='post-sct'>
//                         <h4>
//                             {post.title}
//                         </h4>
//                         {post.description}
//                     </div>
//                     )}
//                 </div>
//             </body>
//         </>
//     )
// }

// import React, { useState } from 'react';

// export function MainContent({ posts ,addPost }) {
//   const [newPost, setNewPost] = useState({ title: '', description: '' });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewPost({ ...newPost, [name]: value }); //it is gonna override the value of 'name',
//     console.log(newPost);
//     console.log(e.target);
//     };

//   const handleAddPost = () => {
//       addPost(newPost);
//       setNewPost({ title: '', description: '' });
//   };

//   return (
//     <>
//       <body>
//         <div className='post-parent'>
//           {posts.map(post =>
//             <div className='post-sct' key={post.id}>
//               <h4>
//                 {post.title}
//               </h4>
//               {post.description}
//             </div>
//           )}
//         </div>
//         <div>
//           <h2>Add New Post</h2>
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={newPost.title}
//             onChange={handleInputChange}
//           />
//           {/* <p>{newPost.title}</p> */}
//           <label htmlFor="description">Description:</label>
//           <textarea
//             id="description"
//             name="description"
//             value={newPost.description}
//             onChange={handleInputChange}
//           ></textarea>
//           <button onClick={handleAddPost}>Add Post</button>
//         </div>
//       </body>
//     </>
//   )
// }




import React, { useState, useEffect } from 'react';

export function MainContent() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', description: '' });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleAddPost = async () => {
    // if (newPost.title.trim() !== '' && newPost.description.trim() !== '') {
      try {
        const response = await fetch('http://localhost:3001/api/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newPost)
        });
        if (!response.ok) {
          throw new Error('Failed to add post');
        }
        setNewPost({ title: '', description: '' });
        fetchPosts(); // Refresh posts after adding a new one
      } catch (error) {
        console.error('Error adding post:', error);
      }
    // }
  };

  return (
    <>
      <body>
        <div className='post-parent'>
          {posts.map(post =>
            <div className='post-sct' key={post._id}>
              <h4>
                {post.title}
              </h4>
              {post.description}
            </div>
          )}
        </div>
        <div>
          <h2>Add New Post</h2>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newPost.title}
            onChange={handleInputChange}
          />
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={newPost.description}
            onChange={handleInputChange}
          ></textarea>
          <button onClick={handleAddPost}>Add Post</button>
        </div>
      </body>
    </>
  )
}
