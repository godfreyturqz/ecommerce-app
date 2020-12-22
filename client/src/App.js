import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { isAuth } from "./redux/auth/authActions"
//styles
import './App.css'
//components
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import PageNotFound from './components/404'
//dependencies
import { BrowserRouter, Switch, Route } from "react-router-dom"
//pages
import Cart from './pages/Cart'
import CreateProduct from './pages/CreateProduct'
import Home from "./pages/Home"
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import OrderDetails from './pages/Orders/OrderDetails'
import ProductDetails from './pages/ProductDetails'
import Shipping from './pages/Shipping'
import Authentication from './pages/Authentication'
import ProductManagement from './pages/ProductManagement'
import Payment from "./pages/Payment"
import Profile from "./pages/Profile"


const App = () => {
  const authReducer = useSelector(state => state.authReducer)
  const [filteredProducts, setFilteredProducts] = useState('')

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(isAuth())
    
  }, [dispatch])
  
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Navbar className="navbar" authReducer={authReducer} setFilteredProducts={setFilteredProducts}/>
        <Sidebar setFilteredProducts={setFilteredProducts}/>
        <main className="main">
            <Switch>
              <Route path="/" exact>
                <Home filteredProducts={filteredProducts}/>
              </Route>
              <Route path="/product/details/:id" component={ProductDetails} exact/>
              <Route path="/cart/:id?" component={Cart} exact/>
              <Route path="/shipping" component={Shipping} exact/>
              <Route path="/placeorder" component={PlaceOrder} exact/>
              <Route path="/createProduct" component={CreateProduct} exact/>
              <Route path="/updateProduct/:id" component={CreateProduct} exact/>
              <Route path="/productManagement" component={ProductManagement} exact/>
              <Route path="/orders" component={Orders} exact/>
              <Route path="/order/details/:id" component={OrderDetails} exact/>
              <Route path="/order/payment/:id" component={Payment} exact/>
              <Route path="/signin" component={Authentication} exact/>
              <Route path="/register" component={Authentication} exact/>
              <Route path="/profile" component={Profile} exact/>
              <Route path="/" component={PageNotFound} />
            </Switch>
        </main>
        <Footer className="footer"/>
      </div>
    </BrowserRouter>
  );
}

export default App
