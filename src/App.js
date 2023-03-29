import "./App.css";
import { Routes, Route } from "react-router-dom";
import Products1 from "./components/Products1";
import NavigationBar from "./components/NavigationBar";
import NotFound from "./components/NotFound";
import ProductDetail from "./components/ProductDetail";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct"
import React, { Suspense } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/slices/productsSlice";
function App() {
  const dispatch = useDispatch();

  //const UpdateProduct = React.lazy(() => import("./components/UpdateProduct"));
  
  return (
    <>
      <NavigationBar />
      <Suspense fallback={<>Loading.........</>}>
      <Routes>
        <Route path="/products" >
          <Route index element={<Products1 />} loader={dispatch(fetchProducts())}/>
          <Route path=":id" element={<ProductDetail/>}/>
          <Route path="add" element={<AddProduct/>}/>
          <Route path="update/:id" element={<UpdateProduct />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </>
  );
}

export default App;
