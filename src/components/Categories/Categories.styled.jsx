import styled from 'styled-components';

export const CategoriesList = styled.ul`
    display: flex;
    flex-wrap:wrap;
    gap:8px;
    li:nth-of-type(1n+9){
        ${({type}) => type==="list" && 'display:none;'}
    }
`;

export const Category = styled.li`
    border-radius:100px;
    background-color: var(--primary-light);
    padding:12px 18px;
    color: var(--primary-dark);
    font-weight: 500;
    display: flex;
    align-items: center;
    gap:8px;
    svg{
        fill:var(--primary-dark);
        width: 20px;
        height: 20px;
    }
    span{
        text-transform:capitalize;
    }
`;