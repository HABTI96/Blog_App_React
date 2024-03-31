import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductsList from './component/listC';
import Home from './component/home';
import Login from './component/login';
import Register from './component/register';
import Navbar from './component/navbar';
import './App.css'
function App() {
return (<>
    <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<ProductsList />} />
    </Routes>
  </>

































  );
}

export default App;


// import { useState } from 'react';
// // import { Router, Route, Switch } from 'react-router-dom';
// import { Routes, Route} from 'react-router-dom';
// import TodoList from './component/listC';
// // import Crs from './component/crs';
// import Home from './component/home';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     // <Router>
//     //   <Switch>
//     //     <Route exact path="/">
//     //       <TodoList />
//     //     </Route>
//     //     <Route path="/crs">
//     //       <Crs />
//     //     </Route>
//     //   </Switch>
//     // </Router>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/user/products" element={<TodoList />} />
//     </Routes>
//       // <>
//         // <TodoList />
//         // <Crs />
//       // </>
//   );
// }

// export default App;
