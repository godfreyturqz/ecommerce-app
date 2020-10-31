import './App.css';
// import src from "./images/bike.png";

function App() {

  function openMenu(){
    document.querySelector('.sidebar').classList.add('open')
  }
  function closeMenu(){
    document.querySelector('.sidebar').classList.remove('open')
  }

  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <a href="">Premium wheels</a>
        </div>
        <div className="header-links">
          <a href="">Cart</a>
          <a href="">Sign-in</a>
        </div>
      </header>

      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
          <li><a href="">Pants</a></li>
          <li><a href="">Shirts</a></li>
        </ul>
      </aside>


      <main className="main">
        <div className="content">
          <ul className="products">
            <li>
              <div className="product">
                <img className="product-image" src="./images/bike.png" alt="bike"/>
                <div className="product-name">
                  <a href="product.html">Trail bike</a>
                </div>
                <div className="product-brand">Cannondale</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="./images/bike.png" alt="bike"/>
                <div className="product-name">
                  <a href="product.html">Trail bike</a>
                </div>
                <div className="product-brand">Cannondale</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="./images/bike.png" alt="bike"/>
                <div className="product-name">
                  <a href="product.html">Trail bike</a>
                </div>
                <div className="product-brand">Cannondale</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 reviews)</div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer className="footer">
        All rights reserved 2020
      </footer>
    </div>
  );
}

export default App;
