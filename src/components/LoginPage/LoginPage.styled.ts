import styled from 'styled-components';

export const LoginPageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 120px);
    min-width: 100vw;
`;

export const BackgroundLogo = styled.div`
    background-image: url("/src/assets/logo.jpg");
    background-size:     contain;
    background-repeat:   no-repeat;
    background-position: center center;  
    width: 250px;
    margin-left: 10px;
    margin-right: 10px;
`;
