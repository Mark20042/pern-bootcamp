import { useEffect } from "react";
import useCars from "./../hooks/useCars";

const Car = () => {
  const { cars, fetchCars } = useCars();

  useEffect(() => {
    fetchCars();
  }, []);

  if (!Array.isArray(cars)) {
    return (
      <div className="p-4 bg-red-100 border border-red-400 text-red-700">
        <h3 className="font-bold">Debug Error</h3>
        <p>
          Expected an array, but got: <strong>{typeof cars}</strong>
        </p>
        <p>Value: {JSON.stringify(cars)}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>List of Cars</h1>
      <div className="">
        {cars.map((car) => (
          <div key={car.id}>
            <p>Make: {car.make}</p>
            <p>Model: {car.model}</p>
            <p>Year: {car.year}</p>
            <p>Price: {car.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Car;
