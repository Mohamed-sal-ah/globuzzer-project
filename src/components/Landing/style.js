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

export const FlexArticles = styled.article`
display:flex;
flex-direction:row-reverse;
justify-content:space-around;
align-items:center;
height:100%;
width:100%;
@media (max-width : 700px) {
    flex-direction:column;
    justify-content:space-evenly;
}
`

export const LandingSection = styled.section`
display:flex;
width:50%;
flex-direction:column;
align-items:center;
justify-content:center;
@media (max-width : 700px) {
    width:80%;
}
`

export const LandingImg = styled.img`
width: 90%;
`

export const SectionTitle = styled.h2`
font-family : Roboto;
align-self:flex-start;
font-size: 40px;
margin:0;
padding-left:30px;
@media (max-width : 700px) {
    font-size: 35px;
    padding-left:0;
    align-self:center;
}
`

export const SectionText = styled.p`
font-size:20px;
font-family:Montserrat;
margin:0;
letter-spacing: -0.5px;
padding-left:30px;
text-align: left;
@media (max-width : 700px) {
    padding-left:0;
    font-size:17px;
    text-align:center;
}
`

export const ButtonLink = styled(Link)`
color :#FFFFFF;
background-color:#063736;
font-family : Righteous;
margin-top:20px;
margin-left: 30px;
font-size:20px;
padding:10px 20px;
align-self:flex-start;
text-decoration:none;
border-radius: 10px;
@media (max-width : 700px) {
    align-self:center;
    margin-left:0;
}
`