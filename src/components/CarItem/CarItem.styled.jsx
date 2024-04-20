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
    overflow: hidden;
`;

export const Image = styled.img`
    position:absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center; 
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


export const Button = styled.button`
    ${CommonStyleBtn};
    ${CommonStyleMainBtn};
    align-self:flex-start;
`;