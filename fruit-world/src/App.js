import logo from './logo.svg';
import './App.css';
import LoginPage from './LandingPage/LoginPage';
import React from "react";
// import ProductCard from './ProductCard.css';
import ProductCard from './TestComponents/ProductCard';


  const products = [
    {
      name: "Yelakki Banana",
      image: "logo192.png",
      price: 21,
      
      weights: ["250g", "500g", "1Kg"]
    },
    {
      name: "Nagpur Orange",
      image: "logo192.png",
      price: 27.36,
      weights: ["250g", "500g", "1Kg"]
    },
    {
      name: "Pomegranate",
      image: "logo192.png",
      price: 229.6,
    
      weights: ["500g", "1Kg"]
    }
  ];
  
function App() {
   return (
    <div className="product-grid">
      {products.map((p, i) => (
        <ProductCard key={i} product={p} />
      ))}
    </div>
  );
}

export default App;
//  <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>