import { Link } from "react-router-dom";
import styled from "styled-components";

export const FullMainPage = styled.main`
height:100vh;
background-color:#FFFFFF;
overflow:auto;
width:100vw;
display:flex;
flex-direction:column;
align-items:center;
`

export const MainTitle = styled.h1`
color:#2C5777;
font-family : Righteous;
font-size: 50px;
text-align:center;
letter-spacing: 1px;
margin:0;
text-transform: uppercase;
@media (max-width : 700px) {
    font-size:35px;
}
`

export const StyledForm = styled.form`
display:flex;
flex-direction:column;
align-items:center;
width:fit-content;
`

export const StyledInput = styled.input`
padding:10px;
width:400px;
background-color:#FFFFFF;
border:3px solid #2C5777;
font-size:20px;
border-radius: 10px;
margin: 15px 0;
font-family: Roboto;
&::placeholder{
    color: #bfbfbf;
}
&:focus{
    border-color:#307473;
}
&:focus{
    outline:none;
}
@media (max-width : 700px) {
    width:80vw;
}
`

export const SubmitButton = styled.button`
color :#FFFFFF;
background-color:#063736;
letter-spacing: 1px;
font-family : Righteous;
font-size:20px;
border:none;
padding:10px 20px;
text-decoration:none;
border-radius: 10px;
cursor: pointer;
&:focus{
    outline:none;
}
&:active{
    outline:none;
}
&:disabled{
    background-color:#2e8e8c;
    cursor: auto;
}
`


export const ButtonSpan = styled.span`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
width:100%;
`

export const BackLink = styled(Link)`
color :#1C1C1C;
letter-spacing: 1px;
font-family : Righteous;
text-decoration:none;
border-radius: 10px;
font-size:20px;
`