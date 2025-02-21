import React from "react";
import { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';





const Products = (props) => {
    const [Products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://127.0.0.1:3001`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className="container-fluid bg-light-gray">
            <article className="row justify-content-center ">
                <h1 className="text-center display-4 mt-5 mb-5 bg-light-red">Products</h1>
                <div className="row">
                    {Products.map(product => (

                        <div className="col-md-4">
                            <div className=" bg-light-red br3 pa3 ma2 grow bw2 shadow-5" key={product.Rid}>
                                <h2 className="text-center">{product.Rid}</h2>
                                <p>{product.regionev}</p>
                                <p>Régi Érték: {product.regio_tipusa}$</p>

                            </div>
                        </div>

                    ))}
                </div>
            </article>
        </div>
    );
}

export default Products;