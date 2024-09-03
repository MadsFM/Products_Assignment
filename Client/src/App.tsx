import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState<number[]>([]);

  useEffect(() => {
    fetch('http://localhost:9000/api/products')
        .then((res) => res.json())
        .then((data) => setProducts(data));
  }, []);

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <li key={index}>
                            <h2>{product.name}</h2>
                            <p>Price: {product.price.toFixed(2)} kr.</p>
                            <button>Add to basket</button>
                        </li>
                    ))
                ) : (
                    <p>No products available.</p>
                )}
            </ul>
        </div>
    );
}

export default App;
