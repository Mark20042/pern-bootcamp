import { useContext } from "react";
import CarsContext from "../store/cars-context";

const useCars = () => {
  const context = useContext(CarsContext);

  // Optional Safety Check:
  // This ensures you don't accidentally use the hook outside the Provider
  if (!context) {
    throw new Error("useCars must be used within a CarsProvider");
  }
  return context;
};

export default useCars;
