//styles
import './App.css';
//components
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import PageNotFound from './components/404';
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
import Authentication from './pages/Authentication';
import ProductManagement from './pages/ProductManagement';


function App() {

  return (
    <BrowserRouter>
      <div className="grid-container">
        <Navbar className="navbar" />
        <Sidebar />
        <main className="main">
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/createProduct" component={CreateProduct} exact/>
              <Route path="/updateProduct/:id" component={CreateProduct} exact/>
              <Route path="/productManagement" component={ProductManagement} exact/>
              <Route path="/orderStatus" component={OrderStatus} exact/>
              <Route path="/product/details/:id" component={ProductDetails} exact/>
              <Route path="/cart/:id?" component={Cart} exact/>
              <Route path="/shipping" component={Shipping} exact/>
              <Route path="/placeorder" component={PlaceOrder} exact/>
              <Route path="/signin" component={Authentication} exact/>
              <Route path="/register" component={Authentication} exact/>
              <Route path="/" component={PageNotFound} />
            </Switch>
        </main>
        <Footer className="footer"/>
      </div>
    </BrowserRouter>
  );
}

export default App;
