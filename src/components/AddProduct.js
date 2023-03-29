import React, { useState} from "react";
import { addProduct } from "../service/api";
function AddProduct() {

    const [product, setProduct] = useState({
      "name": "",
      "price": 0,
      "img": "",
      "like": 0,
      "quantity": 0,
      "description": ""
    });

    const {name, price, img, like, quantity, description} = product;

    const onValueChange = (e) =>{
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }
    const onFileHandle = (e)=>{
        setProduct({
            ...product,
            img: e.target.files[0].name,
        })
    }

    const handleSubmit = async () => {
        const response = await addProduct(product);
        console.log(response.data);
    };
  return (
    <form>
      <h3>Add a New Product</h3>

      <label>Name:</label>
      <input
        type="text"
        onChange={(e) => onValueChange(e)}
        name="name"
        value={name}
      />
      <label>Description:</label>
      <textarea
        type="text"
        onChange={(e) => onValueChange(e)}
        name="description"
        value={description}
      />
      <label>Price:</label>
      <input
        type="number"
        onChange={(e) => onValueChange(e)}
        name="price"
        value={price}
      />
      <label>Quantity:</label>
      <input
        type="number"
        onChange={(e) => onValueChange(e)}
        name="quantity"
        value={quantity}
      />
      <div className="form-outline mb-4">
        <input
          onChange={(e) => onFileHandle(e)}
          type="file"
          name="image"
        />
      </div>
      <button onClick={()=> handleSubmit()}>Add Product</button>
    </form>
  );
}

export default AddProduct;
