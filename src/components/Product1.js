import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { deleteProduct } from "../service/api";
function Product1(props) {
  const [like, setLike] = useState(props.product.like);
  const addLikes = (e) => {
    e.preventDefault();
    setLike(like + 1);
  };
  const navigate = useNavigate();
  const Del = (event) => {
    event.preventDefault();
    deleteP();
    navigate("/products");
  };
  const deleteP = async () => {
    const response = await deleteProduct(props.product.id);
    console.log(response.data);
  };
  const Update = (event) => {
    event.preventDefault();
    navigate(`/products/update/${props.product.id}`, props.product);
  };
  return (
    <Card style={{ width: "18rem" }} className="text-center" border="secondary">
      <Card.Header>
        <Card.Img
          variant="top"
          src={require("../assets/images/" + props.product.img)}
          alt="Product Img"
          height={200}
        />
      </Card.Header>
      <Card.Body>
        <Card.Title>
          <Link to={`/products/${props.product.id}`}>{props.product.name}</Link>
        </Card.Title>
        <Card.Text>Price : {props.product.price} DT</Card.Text>
        <Card.Text>Quantity :{props.product.quantity}</Card.Text>
        <Card.Text>Likes :{like}</Card.Text>
        <Row>
          <Col md={6}>
            {" "}
            <Button variant="primary" onClick={addLikes}>
              Like
            </Button>
          </Col>
          <Col md={6}>
            <Button
              variant="info"
              onClick={() => props.buyFunction(props.product)}
              disabled={props.product.quantity === 0}
            >
              Buy
            </Button>
            <br></br>
            <div>
              <Button onClick={Update} variant="success">
                Update
              </Button>
              <Button onClick={Del} variant="danger">
                Delete
              </Button>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Product1;
