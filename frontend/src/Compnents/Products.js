import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Slices/CartSlice";
import { productsData } from "../Slices/ProductSlice";
import { cartItems } from "../Slices/CartSlice";
import { useState } from "react";

const Products = () => {
  const products = useSelector(productsData);
  const cartItems1 = useSelector(cartItems);
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredItems, setFilteredItems] = useState(products);
  const [searchInput, setSearchInput] = useState("");

  const Add_to_cart = (product) => {
    dispatch(
      add([
        ...cartItems1,
        ...[{ ...product, cartId: cartItems1.length, quantity: 1 }],
      ])
    );
  };

  const getFilteredItems = (e) => {
    if (selectedCategory === "All") {
      setFilteredItems(products);
    } else {
      setFilteredItems(
        products.filter((item) => item.category === selectedCategory)
      );
    }
  };

  const filterSearch = (search) => {
    const results = products.filter((items) => {
      return items.title.toLowerCase().includes(search);
    });
    setFilteredItems(results);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    filterSearch(searchInput);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <div style={{ width: "72%", display: "flex" }}>
          <h1>Products</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              marginTop: "10px",
              marginLeft: "200px",
            }}
          >
            <h4>Search: </h4>
            <input
              style={{ width: "230px", height: "35px", marginLeft: "10px" }}
              type="search"
              placeholder="Search here"
              onChange={handleSearch}
              value={searchInput}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "right",
            marginTop: "5px",
          }}
        >
          <h4
            style={{
              marginTop: "8px",
              marginLeft: "10px",
            }}
          >
            Filter:
          </h4>
          <select
            style={{
              width: "130px",
              height: "30px",
              marginTop: "8px",
              marginLeft: "10px",
            }}
            defaultValue="All"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="men's clothing">men's clothing</option>
            <option value="electronics">electronics</option>
          </select>
        </div>
        <Button
          variant="primary"
          onClick={getFilteredItems}
          style={{
            height: "30px",
            width: "70px",
            marginTop: "12px",
            marginLeft: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          ok
        </Button>
      </div>
      <div className="row" style={{ marginRight: "0px" }}>
        {filteredItems?.map((product) => {
          return (
            <div
              key={product.id}
              className="col-md-3"
              style={{
                marginBottom: "10px",
                textAlign: "center",
                paddingTop: "10px",
                paddingLeft: "20px",
                paddingRight: "25px",
              }}
            >
              <Card className="h-100">
                <div className="text-center">
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
                    variant="primary"
                    onClick={() => Add_to_cart(product)}
                  >
                    Add to cart
                  </Button>
                </Card.Footer>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Products;
