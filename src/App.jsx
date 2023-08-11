import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Pizza from "./components/Pizza";
import pizzaData from "./data";

function App() {
  const newPizzaData = [...pizzaData];

  console.log(newPizzaData);

  return (
    <div className="container">
      <Header />
      <Menu />

      <ul className="pizzas">
        {newPizzaData.map((pizza, index) => {
          return <Pizza key={index} id={index} {...pizza} />;
        })}
      </ul>

      <Footer />
    </div>
  );
}

export default App;
