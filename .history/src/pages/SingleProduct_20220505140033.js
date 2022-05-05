import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { productId } = useParams();

  return (
    <section className="section product">
      <h2>single product</h2>
    </section>
  );
};

export default SingleProduct;
