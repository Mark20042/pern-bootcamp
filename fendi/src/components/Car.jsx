import { useEffect } from "react";
import useCars from "@/hooks/useCars";
import { Button } from "@/components/ui/button";

const Car = () => {
  const { cars, fetchCars } = useCars();

  useEffect(() => {
    fetchCars();
  }, []);

  if (!Array.isArray(cars)) return <div>Loading...</div>;

  return (
    <div className="p-10 space-y-4">
      <h1 className="text-4xl font-black">Garage Inventory</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div
            key={car.id}
            className="
              p-4 
              bg-blue-300 
              border-2 border-blue-900 
              shadow-[4px_4px_0px_0px_#1e3a8a] 
            "
          >
            <h2 className="text-xl font-bold text-blue-950">
              {car.make} {car.model}
            </h2>
            <p className="text-blue-900 mb-4 font-medium">
              {car.year} • ${car.price}
            </p>

            <Button
              className="
              w-full 
              font-bold 
              bg-white text-blue-900     
              border-2 border-blue-900   
              shadow-[4px_4px_0px_0px_#1e3a8a]
              
              hover:translate-x-0.5
              hover:translate-y-0.5 
              hover:shadow-none 
              hover:bg-blue-50
              transition-all
            "
            >
              View Details
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Car;
