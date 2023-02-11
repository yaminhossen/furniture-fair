import logo from './logo.svg';
import './App.css';
import Footer from './components/Pages/Shared/Footer';
import Header from './components/Pages/Shared/Header';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import Home from './components/Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Pages/SignIn/Login';
import SignUp from './components/Pages/SignIn/SignUp';
import ContuctUs from './components/Pages/Home/ContuctUs';
import NotFound from './components/Pages/NotFound/NotFound';
import ProductDetails from './components/Pages/ProductDetails/ProductDetails';
import CheckOut from './components/Pages/CheckOut/CheckOut';
import RequirAuth from './components/Pages/RequirAuth/RequirAuth';
import Blog from './components/Pages/Blog/Blog';

function App() {
  return (
    <div>
      <Header></Header>
      {/* <h2>
      https://i.ibb.co/yBDdwjX/furniture-14.jpg
https://i.ibb.co/zS8kGH0/furniture-16.jpg
https://i.ibb.co/Vt9WzVp/furniture-18.jpg
https://i.ibb.co/bKmcBc3/furniture-19.jpg
https://i.ibb.co/0GZnxcw/furniture-20.jpg
https://i.ibb.co/s9w7yXv/furniture-21.jpg
https://i.ibb.co/zZNZvCY/furniture-29.jpg
https://i.ibb.co/RBv1Ymr/furniture-33.jpg
https://i.ibb.co/Cb7PBQ3/furniture-35.jpg
      </h2> */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/contuct' element={<ContuctUs></ContuctUs>}></Route>
        <Route path='/product/:ID' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/checkout' element={
          <RequirAuth>
            <CheckOut></CheckOut>
          </RequirAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
