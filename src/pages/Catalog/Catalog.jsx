import { useDispatch, useSelector } from "react-redux";

import { selectorCars } from "../../redux/cars/selectors";
import { useEffect } from "react";
import { getCarsThunk } from "../../redux/cars/thunks";

const Catalog = () => {
  const cars = useSelector(selectorCars);
  const dispatch = useDispatch();
  console.log('cars :>> ', cars);

  useEffect(() => {
    dispatch(getCarsThunk());
    }, [dispatch]);
  return (
    <div>Catalog</div>
  )
}

export default Catalog