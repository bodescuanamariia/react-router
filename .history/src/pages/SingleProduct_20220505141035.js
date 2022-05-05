import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.map((product) => product.id === productId);
  const { image, name } = product;

  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h5>{productId}</h5>
      <Link to="/products">back to products</Link>
    </section>
  );
};

export default SingleProduct;
