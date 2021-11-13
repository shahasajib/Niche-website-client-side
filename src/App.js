import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import AddProducts from './Pages/DashBoard/Add to Products/AddProducts';
import Products from './Pages/Products/Products';
import LogIn from './Pages/Login/Log In/LogIn';
import AuthProvider from './Context/AuthProvider';
import Register from './Pages/Login/Register/Register';
import Purchase from './Pages/Purchase/Purchase';
import MyOrder from './Pages/DashBoard/My Order/MyOrder';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Review from './Pages/DashBoard/Review/Review';
import Header from './Pages/Shared/Header/Header';
import ManageProducts from './Pages/DashBoard/Manage Products/ManageProducts';
function App() {
  return (

    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute path='/addproducts'>
            <AddProducts></AddProducts>
          </PrivateRoute>
          <PrivateRoute path='/products'>
            <Products></Products>
          </PrivateRoute>
          <Route path='/pro/:productId'>
            <Purchase></Purchase>
          </Route>
          <Route path='/login'>
            <LogIn></LogIn>
          </Route>

          <Route path='/review'>
            <Review></Review>
          </Route>
          <Route path='/manageproduct'>
            <ManageProducts></ManageProducts>
          </Route>

          <Route path='/myorder'>
            <MyOrder />
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>

  );
}

export default App;
