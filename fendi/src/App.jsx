import Car from "./components/Car";
import CarsProvider from "./store/cars-provider";
const App = () => {
  return (
    <CarsProvider>
      <div>
        <h1>Welcome to the Car Store</h1>
        <ul>
          <Car />
        </ul>
      </div>
    </CarsProvider>
  );
};

export default App;
