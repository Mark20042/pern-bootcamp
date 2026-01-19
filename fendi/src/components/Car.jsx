import { useEffect } from "react";
import useCars from "./../hooks/useCars";

const Car = () => {
  const { cars, fetchCars } = useCars();

  useEffect(() => {
    fetchCars();
  }, []);

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
