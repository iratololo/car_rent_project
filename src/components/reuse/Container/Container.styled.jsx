import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 100%;
    max-width: 320px;
    padding: 0 30px;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 30px;
    }

    @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 120px;
    }
`;

