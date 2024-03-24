import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Header'
import { Footer } from './Footer/Footer'
import { MainContent } from './MainCnt/MainContent'
function App() {

  
  // Function to add a new post to the posts array
  const navbar = [
    {link:"#", linkText:"Home"},
    {link:"#", linkText:"About"},
    {link:"#", linkText:"Contact"},
  ]
  // const posts =[
  //   {title:"products 1",description:"lorem Ips crctly"},
  //   {title:"products 2",description:"lorem Ips crctly"},
  //   {title:"products 3",description:"lorem Ips crctly"},
  //   {title:"products 4",description:"lorem Ips crctly"},
  //   {title:"products 5",description:"lorem Ips crctly"},
  //   {title:"products 6",description:"lorem Ips crctly"},
  // ]
  const [posts, setPosts] = useState([]);
  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  
  return (
    <>
      <Header links={navbar} title="new project" backgroundColor={""} color={''}/>
      <MainContent posts={posts} addPost={addPost}/>
      <Footer/>
    </>
  )
}
  
export default App
