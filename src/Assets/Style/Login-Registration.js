import styled from "styled-components";

export const Container = styled.div`
    
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;

export const SoonName = styled.h1`
    
    font-family: 'Saira Stencil One', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    margin-bottom: 30px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #FFFFFF;

`;

export const FormField = styled.form`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;

export const InputField = styled.input`
    
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 15px;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;

`;

export const ButtonField = styled.button`
    
    display: flex;
    justify-content: center;
    align-items: center;

    width: 303px;
    height: 45px;
    background: #A0A0A0;
    border: 0px solid;
    border-radius: 5px;
    margin-bottom: 10px;

    font-style: normal;
    font-weight: 700;
    font-size: 20.976px;
    color: #FFFFFF;

`;

export const SpanField = styled.span`
    
    font-style: normal;
    font-weight: bold;

    font-weight: 700;
    font-size: 15px;
    text-decoration-line: underline;
    color: #A0A0A0;

`;