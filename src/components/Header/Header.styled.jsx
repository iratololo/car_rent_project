import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 20px 0px;
  border-bottom:1px solid var(--primary-text-color);
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content:space-between;
  gap:15px;
`;

export const PagesNav = styled.div`
  display: flex;
  align-items: center;
  gap:20px;
`;


export const StyledLink = styled(Link)`
  color: var(--primary-dark);
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  svg {
    display: none;
  }
    @media screen and (min-width: 768px) {
      display: flex;
      flex-direction:column;
      gap:5px;
      align-items: center;
    svg {
    display: block;
    width: 60px;
    height:45px;
    fill:var(--primary-dark);
    }
    }

    @media screen and (min-width: 1440px) {
    svg {
    width: 70px;
    height:55px;
    }
    }
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--primary-text-color);
  font-weight: 500;
  transition: var(--primary-transition);
  &:hover{
    color: var(--primary-accent-color);
  }
  &.active{
    color: var(--primary-accent-color);
  }
`;

// export const IconWrapper = styled.svg`
//   width: ${(props) => props.size || '12px'};
//   height: ${(props) => props.size || '12px'};
//   fill: ${(props) => props.color || '#ffffff'};
//   display: inline-block;
//   margin-right: 5px;
//   box-shadow:
//     0 0 5px #00baff,
//     0 0 10px #00baff,
//     0 0 20px #00baff,
//     0 0 40px #00baff,
//     0 0 80px #00baff;
// `;
