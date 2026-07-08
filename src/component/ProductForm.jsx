import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewProduct } from "../redux/product/actions";

const ProductForm = () => {
  const dispatch = useDispatch();

  const initialProductData = {
    name: "",
    category: "",
    image: "",
    price: "",
    quantity: "",
  };
  const [product, setProduct] = useState(initialProductData);

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewProduct(product));
    setProduct(initialProductData);
  };
  return (
    <div>
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
          className="space-y-4 text-[#534F4F]"
          id="lws-addProductForm"
          onSubmit={handleFormSubmit}
        >
          {/*  product name */}
          <div className="space-y-2">
            <label htmlFor="lws-inputName">Product Name</label>
            <input
              className="addProductInput"
              id="lws-inputName"
              type="text"
              required
              name="name"
              value={product.name}
              onChange={handleFormInput}
            />
          </div>
          {/* product category */}
          <div className="space-y-2">
            <label htmlFor="lws-inputCategory">Category</label>
            <input
              className="addProductInput"
              id="lws-inputCategory"
              type="text"
              required
              name="category"
              value={product.category}
              onChange={handleFormInput}
            />
          </div>
          {/* product image url */}
          <div className="space-y-2">
            <label htmlFor="lws-inputImage">Image Url</label>
            <input
              className="addProductInput"
              id="lws-inputImage"
              type="url"
              // required
              name="image"
              value={product.image}
              onChange={handleFormInput}
            />
          </div>
          {/* price & quantity container */}
          <div className="grid grid-cols-2 gap-8 pb-4">
            {/* price */}
            <div className="space-y-2">
              <label htmlFor="ws-inputPrice">Price</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputPrice"
                required
                name="price"
                value={product.price}
                onChange={handleFormInput}
              />
            </div>
            {/* quantity */}
            <div className="space-y-2">
              <label htmlFor="lws-inputQuantity">Quantity</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputQuantity"
                required
                name="quantity"
                value={product.quantity}
                onChange={handleFormInput}
              />
            </div>
          </div>
          {/*  submit button */}
          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};
export default ProductForm;
