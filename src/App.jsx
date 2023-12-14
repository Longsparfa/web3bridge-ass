import "./App.css";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";

const products = [
  { id: 1, name: "Product 1", amount: 20 },
  { id: 2, name: "Product 2", amount: 25 },
  // ... add more products
];

function App() {
  return (
    <>
      <div className="container mx-auto mt-8 ">
        <h1 className="text-3xl font-semibold mb-8">Web3Bridge Assessment</h1>
        <ProductList />
        <ShoppingCart />
      </div>
    </>
  );
}

export default App;
