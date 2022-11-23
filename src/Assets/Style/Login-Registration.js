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
    color: #eb0008;

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
    background: #e03e35;
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
    color: #e03e35;

`;