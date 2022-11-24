import styled from "styled-components"

export default function Loader() {
    return (
        <StyledLoader />
    )
}

const StyledLoader = styled.div`
    margin: 45vh 35vw;
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    animation: spin 1s linear infinite;
    @keyframes spin{
    0% {
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
`