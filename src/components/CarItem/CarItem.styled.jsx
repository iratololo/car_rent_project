import styled from 'styled-components';
import { CommonStyleBtn, CommonStyleMainBtn, CommonStyleTitle } from "../reuse/CommonStyles.styled"

export const ItemWrapper = styled.li`
    border: 1px solid var(--card-border-color);
    border-radius:20px;
    padding:24px;
    display: flex;
    flex-direction:column;
    gap:24px;
     @media screen and (min-width: 768px) {
        flex-direction:row;
     }
`;

export const ImageWrapper = styled.div`
    flex: 0 0 290px;
    position: relative;
    border-radius:10px;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction:column;
    gap:24px;
`;

export const ContentHeader = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    gap:25px;
    margin-bottom:8px;
    h2{
        ${CommonStyleTitle};
    }
`;

export const ContentFavourite = styled.div`
    display: flex;
    align-items: center;
    gap:10px;
    p{
        ${CommonStyleTitle};
    }
`;

export const Description = styled.p`
    line-height: 150%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
`;

export const Categories = styled.div`
    display: flex;
    flex-wrap:wrap;
    gap:8px;
`;

export const Category = styled.div`
    border-radius:100px;
    background-color: var(--primary-light);
    padding:12px 18px;
    color: var(--primary-dark);
    font-weight: 500;
`;


export const Button = styled.button`
    ${CommonStyleBtn};
    ${CommonStyleMainBtn};
    align-self:flex-start;
`;