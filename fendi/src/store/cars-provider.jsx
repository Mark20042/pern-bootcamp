import CarsContext from "./cars-context";
import { useState } from "react";
import api from "../utils/axios";
import { API_PATHS } from "../utils/apiPath";

const CarsProvider = (props) => {
  const [cars, setCars] = useState([]);

  const fetchCars = async () => {
    const { data } = await api.get(API_PATHS.GET_CARS);
    setCars(data);
  };

  return (
    <CarsContext.Provider value={{ cars, setCars, fetchCars }}>
      {props.children}
    </CarsContext.Provider>
  );
};

export default CarsProvider;
