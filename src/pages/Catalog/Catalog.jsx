import { useDispatch, useSelector } from "react-redux";

import CarsList from "../../components/CarsList/CarsList"
import Container from "../../components/reuse/Container/Container";

import { CatalogWrapper, SideBar } from "./Catalog.styled";

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
    <Container>
      <CatalogWrapper>
        <SideBar>sidebar</SideBar>
        <CarsList />
      </CatalogWrapper>
    </Container>
  )
}

export default Catalog