import styled from 'styled-components';

import { CommonStyleBtn } from "../../components/reuse/CommonStyles.styled"

export const CatalogWrapper = styled.div`
    padding:60px 0 100px;
    display: flex;
    gap:64px;
`;

export const SideBar = styled.div`
    flex: 0 0 360px;
`;

export const ListWrap = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  gap:50px;
`;

export const LoadMore = styled.button`
  ${CommonStyleBtn};
  background-color: transparent;
  border: 1px solid var(--card-border-color);
  &:hover{
        border: 1px solid var(--primary-accent-color);
    }
`;