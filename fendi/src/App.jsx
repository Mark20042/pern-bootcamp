import Car from "./components/Car";
import RecipeProvider from "./store/cars-provider";
const App = () => {
  return (
    <RecipeProvider>
      <div>
        <h1>Welcome to the Car Store</h1>
        <ul>
          <Car />
        </ul>
      </div>
    </RecipeProvider>
  );
};

export default App;
