import ProductForm from "../component/ProductForm";
import ProductList from "../component/ProductList";

const HomePage = () => {
  return (
    <main className="py-16">
      <div className="productWrapper">
        <ProductList></ProductList>
        <ProductForm></ProductForm>
      </div>
    </main>
  );
};
export default HomePage;
