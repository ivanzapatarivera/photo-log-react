import React, { useState, useEffect } from "react";
import pastriesForm from './components/Pastries/form';
import pastriesService from './services/pastriesService';



function App() {
  const [products, setproducts] = useState(null);

  useEffect(() => {
    if(!products) {
      getProducts();
    }
  })

  const getProducts = async () => {
    let response = await productService.getAll();
    console.log(response);
    setproducts(response);
  }

  
  const renderProduct = product => {
    return (
      <li key={product._id} className="list__item product">
        <h3 className="product__name">{product.title}</h3>
        <p className="product__description">{product.description}</p>
      </li>
    );
  };

  return (
    <div className="App">
      <Pastries />
    </div>
  );
}

export default App;
