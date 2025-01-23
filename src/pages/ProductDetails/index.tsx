import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { useGetProductQuery } from "../../redux/features/product/productApiSlice";
import style from "./ProductDetails.module.scss";
import { FaStar } from "react-icons/fa";
import States from "../../components/States";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useGetProductQuery(id);

  // loading state
  if (!product && isLoading) {
    return (
      <Layout navText="Product">
        <States type="loading" />
      </Layout>
    );
  }

  // error state
  if (isError) {
    return (
      <Layout navText="Product">
        <States type="error" />
      </Layout>
    );
  }

  if (product) {
    return (
      <Layout navText="Product">
        <div className={style.product_wrapper}>
          <div className={style.product}>
            <figure className={style.product_img}>
              <img src={product.image} alt="" />
            </figure>

            <div>
              <p className={style.product_category}>{product.category}</p>

              <h2 className={style.product_title}>
                {product.title}
                <FaStar
                  size={12}
                  color="#FFEB00"
                  style={{ paddingTop: 1, marginInline: 3 }}
                />
                <span>{product.rating.rate}</span>
              </h2>

              <h3 className={style.product_price}>
                {product.price} CAD
                <span>{(product.price * 0.1).toFixed()} CAD commission</span>
              </h3>

              <div className={style.product_desc}>
                <h6>DESCRIPTION</h6>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // empty state
  return (
    <Layout navText="Product">
      <States type="empty" />
    </Layout>
  );
};

export default ProductDetails;
