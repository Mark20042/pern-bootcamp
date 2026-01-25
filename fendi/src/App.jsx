import Navbar from "@/components/Navbar";
import Car from "@/components/Car";
import CarsProvider from "./store/cars-provider";

const App = () => {
  return (
    <CarsProvider>
      <div className="min-h-screen bg-blue-50">
        <Navbar />
        <main className="container mx-auto py-10">
          <Car />
        </main>
      </div>
    </CarsProvider>
  );
};

export default App;
