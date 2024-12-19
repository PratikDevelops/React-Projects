import React, { useEffect, useState } from 'react';
import "./LoadProduct.css";

function LoadProduct() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);

    async function load() {
        setLoading(true);
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${count * 20}`);
            const data = await response.json();
            setProducts((prevProducts) => [...prevProducts, ...data.products]);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    function handleLoad() {
        setCount((prev) => prev + 1);
    }

    useEffect(() => {
        load();
    }, [count]);

    return (
        <div className="load-product-container">
            <h1 className="load-product-title">Products</h1>
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img className="product-image" src={product.thumbnail} alt={product.title} />
                        <h3 className="product-title">{product.title}</h3>
                        <p className="product-description">{product.description}</p>
                    </div>
                ))}
            </div>
            <button 
                className={`load-more-button ${loading ? "disabled" : ""}`} 
                onClick={handleLoad} 
                disabled={loading}
            >
                {loading ? "Loading..." : "Load More"}
            </button>
        </div>
    );
}

export default LoadProduct;
