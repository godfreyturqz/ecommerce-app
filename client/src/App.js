import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from './pages/Cart';
import Form from './pages/Form';
import SignIn from './pages/SignIn';
//components
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

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
              <Route path="/" exact={true} component={Home}/>
              <Route path="/form" component={Form}/>
              <Route path="/product/:id" component={ProductDetails}/>
              <Route path="/cart/:id?" component={Cart}/>
              <Route path="/signin" component={SignIn}/>
            </Switch>
        </main>
        <Footer className="footer"/>
      </div>
    </BrowserRouter>
  );
}

export default App;
