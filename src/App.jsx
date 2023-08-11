import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Pizza from "./components/Pizza";
import pizzaData from "./data";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />

      <ul className="pizzas">
        {pizzaData.map((pizza, index) => {
          return <Pizza key={index} id={index} {...pizza} />;
        })}
      </ul>

      <Footer />
    </div>
  );
}

export default App;
