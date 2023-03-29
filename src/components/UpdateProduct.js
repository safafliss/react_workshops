import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { editProduct, getallProducts } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";
function UpdateProduct() {
  const { id } = useParams();

  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  console.log(product);

  const getProducts = useCallback(async () => {
    const { data } = await getallProducts(id);
    setProduct(data);
  }, [id]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const handleSubmit = (event) => {
    event.preventDefault();
    UpdateProducts();
    navigate("/products");
  };
  const UpdateProducts = async () => {
    const response = await editProduct(id, product);
    console.log(response.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          value={product.name || ""}
          onChange={(e) =>
            setProduct((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={product.description || ""}
          onChange={(e) =>
            setProduct((prev) => ({ ...prev, description: e.target.value }))
          }
        />
      </label>
      <label>
        price:
        <input
          type="integer"
          value={product.price || ""}
          onChange={(e) =>
            setProduct((prev) => ({ ...prev, price: e.target.value }))
          }
        />
      </label>
      <label>
        quantity:
        <input
          type="integer"
          value={product.quantity || ""}
          onChange={(e) =>
            setProduct((prev) => ({ ...prev, quantity: e.target.value }))
          }
        />
      </label>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Control
          onChange={(e) =>
            setProduct((prev) => ({ ...prev, img: e.target.files[0].name }))
          }
          type="file"
        />
      </Form.Group>

      <input type="submit" />
    </form>
  );
}

export default UpdateProduct;
