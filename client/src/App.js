//styles
import './App.css';
//components
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
//router dependencies
import { BrowserRouter, Switch, Route } from "react-router-dom";
//pages
import Cart from './pages/Cart';
import CreateProduct from './pages/CreateProduct';
import Home from "./pages/Home";
import PlaceOrder from './pages/PlaceOrder';
import OrderStatus from './pages/OrderStatus';
import ProductDetails from './pages/ProductDetails';
import Shipping from './pages/Shipping';
import SignIn from './pages/SignIn';
import ProductManagement from './pages/ProductManagement';

function App() {

  function openMenu(){
    document.querySelector('.sidebar').classList.add('open')
  }
  function closeMenu(){
    document.querySelector('.sidebar').classList.remove('open')
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
        <Navbar className="navbar" openMenu={openMenu}/>
        <Sidebar closeMenu={closeMenu}/>
        <main className="main">
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/createProduct" component={CreateProduct}/>
              <Route path="/updateProduct/:id" component={CreateProduct}/>
              <Route path="/productManagement" component={ProductManagement}/>
              <Route path="/product/details/:id" component={ProductDetails}/>
              <Route path="/cart/:id?" component={Cart}/>
              <Route path="/shipping" component={Shipping}/>
              <Route path="/placeorder" component={PlaceOrder}/>
              <Route path="/orderStatus" component={OrderStatus}/>
              <Route path="/signin" component={SignIn}/>
            </Switch>
        </main>
        <Footer className="footer"/>
      </div>
    </BrowserRouter>
  );
}

export default App;
