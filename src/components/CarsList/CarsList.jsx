import CarItem from "../CarItem/CarItem";

import {List} from "./CarsList.styled"

import { selectorAllCars } from "../../redux/cars/selectors";
import { selectorCars } from "../../redux/cars/selectors";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const CarsList = () => {
  const cars = useSelector(selectorCars);
  const [carsList, setCarsList] = useState(cars);

  useEffect(() => {
    setCarsList((prev)=>[...prev, ...cars])
  }, [cars]);
  
  return (
      <List>
      {carsList.length>0 && carsList.map((item) => {
        return <CarItem key={item._id} data={item} />
      })}
      </List>
  )
}

export default CarsList