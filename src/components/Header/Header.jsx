import { NavLink, Link } from "react-router-dom"

import Container from "../reuse/Container/Container"
import {
  HeaderContainer,
  Navigation,
  PagesNav,
  StyledLink,
  StyledNavLink,
} from './Header.styled';
import icons from '../../assets/sprite.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Navigation>
          <StyledLink to='/'>
            <svg>
              <use href={`${icons}#camper`}></use>
            </svg>
            Camper Ukraine</StyledLink>
          <PagesNav>
            <StyledNavLink to='/catalog'>Catalog</StyledNavLink>
            <StyledNavLink to='/favorites'>Favorites</StyledNavLink>
          </PagesNav>
        </Navigation>
      </Container>
    </HeaderContainer>
  )
}

export default Header