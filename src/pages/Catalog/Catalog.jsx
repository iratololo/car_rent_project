import { useDispatch, useSelector } from "react-redux";

import CarsList from "../../components/CarsList/CarsList"
import Container from "../../components/reuse/Container/Container";

import { CatalogWrapper, SideBar, ListWrap, LoadMore } from "./Catalog.styled";

import { selectorCarsPage } from "../../redux/cars/selectors";
import { useEffect, useState } from "react";
import { getCarsThunk } from "../../redux/cars/thunks";
import { changePage } from '../../redux/cars/sliceCars';

const Catalog = () => {
  const page = useSelector(selectorCarsPage);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(page);
  console.log('currentPage :>> ', currentPage);

  const handleOnClick = () => {
    setCurrentPage((prev) =>  prev + 1);
    // dispatch(changePage(currentPage))
  };

  useEffect(() => {
    dispatch(getCarsThunk());
    // setCurrentPage(page);
    // dispatch(changePage(currentPage))
  }, [dispatch]);

  useEffect(() => {
    dispatch(changePage(currentPage))
  }, [dispatch, currentPage]);
  
  return (
    <Container>
      <CatalogWrapper>
        <SideBar>sidebar</SideBar>
        <ListWrap>
          <CarsList />
         <LoadMore onClick={handleOnClick} type="button">Load more</LoadMore>
        </ListWrap>
      </CatalogWrapper>
    </Container>
  )
}

export default Catalog