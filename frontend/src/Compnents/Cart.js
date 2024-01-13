import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { cartItems, remove } from "../Slices/CartSlice";

const Cart = () => {
  const cartProducts = useSelector(cartItems);
  const dispatch = useDispatch();

  const removeCart = (id) => {
    dispatch(remove(cartProducts.filter((item) => item?.cartId !== id)));
  };

  return (
    <div>
      {cartProducts?.map((product) => {
        return (
          <div
            style={{
              marginTop: "20px",
              marginBottom: "30px",
              marginLeft: "300px",
              textAlign: "center",
              width: "50%",
            }}
          >
            <Card className="h-100">
              <div className="text-center" key={product.id}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{
                    height: "100px",
                    width: "130px",
                  }}
                />
              </div>

              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button
                  variant="danger"
                  onClick={() => removeCart(product?.cartId)}
                >
                  Remove
                </Button>
              </Card.Footer>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
