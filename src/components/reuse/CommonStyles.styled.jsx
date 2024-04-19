import styled, { css } from 'styled-components';

export const CommonStyleBtn = css`
  padding: 16px 32px;
  font-weight: 500;
  line-height: 150%;
  border-radius: 200px;
  transition: var(--primary-transition);
`;

export const CommonStyleMainBtn = css`
    border:none;
    background-color:var(--primary-accent-color);
    color:var(--white-color);
    min-width:166px;
    &:hover{
        background-color:#e03333;
    }
`;


export const CommonStyleTitle = css`
    color: var(--primary-dark);
    font-size: 24px;
    font-weight: 600;
`;

export const ContentExtraInfo = styled.div`
    display: flex;
    align-items: center;
    gap:16px;
    line-height:150%;
    color:var(--primary-dark);
`;

export const Reviews = styled.p`
    border-bottom: 1px solid var(--primary-dark);
`;