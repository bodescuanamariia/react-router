import { Link } from "react-router-dom";
import products from "../data";

const Products = () => {
  return (
    <section className="section">
      <h2>products</h2>
      <div className="products">
        {products.map((product) => {
          return (
            <article key={product.id}>
              {" "}
              {product.name}
              <link to={`/products/${product.id}`}>more info</link>{" "}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
