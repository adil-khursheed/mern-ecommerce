import Navbar from "../components/navbar/Navbar";
import ProductList from "../features/product/ProductList";

const Home = () => {
  return (
    <div>
      <Navbar>
        <ProductList />
      </Navbar>
    </div>
  );
};

export default Home;
