import "../css/Preview.css";
import GradeIcon from "@mui/icons-material/Grade";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart, cartDecQty, cartIncQty } from "../redux/Cart/cart.action";

let url = `https://wild-polo-shirt-calf.cyclic.app/products/`
url = `http://localhost:3000/products/`

const getProduct = (id) => {
  return fetch(
    `${url}${id}`
  ).then((response) => response.json());
};

const Preview = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const [count, setCount] = useState(1)

  const dispatch = useDispatch();

  useEffect(() => {
    getProduct(params.id)
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  let nv = useNavigate()



  return (
    <>
      {product && (
        <div className="preview_container" key={params.id}>
          <div className="image_container">
            <img
              className="product_image"
              src={product.url}
              alt={product.name}
            />
          </div>

          <div className="details_container">
            <h1 className="product_tittle">{product.name}</h1>
            <p className="product_description">{product.description}</p>

            <div className="reward_memeber_container">
              <GradeIcon />
              <p className="reward_member">
                Earn 530 reward points when purchasing this product as a rewards
                member*
              </p>
            </div>

            <p className="product_price">$ {product.price}</p>

            <hr />

            <p className="product_quantity">Quantity</p>

            <p className="min_max_quantity">
              Item limited to a max quantity of 3
            </p>

            <p className="quantity_in_baskect">( 1 item in your basket )</p>

            <div className="item_count_container">
              <div className="increment_decrement">
                <button
                  className="incement_count_decrement"
                  disabled={count === 1}
                  onClick={() => {
                    setCount(count - 1);
                    dispatch(cartDecQty(params.id, product.price, count - 1, localStorage.getItem("token") || "g"))
                  }}
                >
                  <RemoveIcon />
                </button>
                <button className="incement_count_decrement">{count}</button>
                <button
                  disabled={count === 3}
                  className="incement_count_decrement"
                  onClick={() => {
                    setCount(count + 1);
                    dispatch(cartIncQty(params.id, product.price, count + 1, localStorage.getItem("token") || "g"))
                  }}
                >
                  <AddIcon />
                </button>
              </div>
              <div>
                <button className="add_to_cart_button"
                  onClick={() => {
                    dispatch(addCart(product, localStorage.getItem("token") || "g"))
                    nv("/cart");
                  }}
                >ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Preview;
