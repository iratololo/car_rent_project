import { useDispatch, useSelector } from "react-redux";

import CarsList from "../../components/CarsList/CarsList"
import Container from "../../components/reuse/Container/Container";

import { CatalogWrapper, SideBar, ListWrap, LoadMore } from "./Catalog.styled";

import { selectorCarsPage } from "../../redux/cars/selectors";
import { useEffect, useState } from "react";
import { getCarsThunk } from "../../redux/cars/thunks";
import { changePage } from '../../redux/cars/sliceCars';
import { selectorCars } from "../../redux/cars/selectors";
import { selectorAllCars } from "../../redux/cars/selectors";

const Catalog = () => {
  const page = useSelector(selectorCarsPage);
  const cars = useSelector(selectorCars);
  const total = useSelector(selectorAllCars);
  const dispatch = useDispatch();

  console.log('cars :>> ', cars);
  console.log('total :>> ', total);

  const [currentPage, setCurrentPage] = useState(page);
  const [carsList, setCarsList] = useState(cars);

  const handleOnClick = () => {
    setCurrentPage((prev) =>  prev + 1);
  };

  useEffect(() => {
    dispatch(getCarsThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(changePage(currentPage))
  }, [dispatch, currentPage]);

  useEffect(() => {
    setCarsList((prev)=>[...prev, ...cars])
  }, [cars]);
  
  return (
    <Container>
      <CatalogWrapper>
        <SideBar>sidebar</SideBar>
        <ListWrap>
          <CarsList cars={carsList} />
          {carsList.length<total.length && <LoadMore onClick={handleOnClick} type="button">Load more</LoadMore>}
        </ListWrap>
      </CatalogWrapper>
    </Container>
  )
}

export default Catalog