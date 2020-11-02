import styled, { keyframes } from "styled-components";
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg'

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
text-transform: uppercase;
@media (max-width : 700px) {
    font-size:35px;
}
`
const loadingAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const LoadingScreen = styled.div`
border: 10px solid #CCCCCC;
border-radius: 100%;
border-top-color:#063736;
padding:15px;
align-self:center;
margin-top:40px;
animation: ${loadingAnimation} 2s linear infinite;
`

export const NoNotesText = styled.h3`
    font-size: 20px;
    font-family: Montserrat;
    width: fit-content;
    letter-spacing: 1px;
`


export const StyledForm = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:fit-content;
`

export const ButtonSpan = styled.span`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width:100%;
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
export const SignOutButtonStyle = styled.button`
color :#1C1C1C;
letter-spacing: 1px;
font-family : Righteous;
text-decoration:none;
border-radius: 10px;
font-size:20px;
border:none;
background-color:#FFFFFF;
&:focus{
    outline:none;
}
&:active{
    outline:none;
}
cursor: pointer;
`

export const NotesListUL = styled.ul`
list-style-type: none;
padding: 0;
align-self: center;
display:flex;
flex-direction:column;
align-items:center;
width: 95%;
margin-top:3vh;
@media (max-width : 700px) {
    width:100%;
}
`
export const ListItem = styled.li`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
padding:10px;
margin: 10px 0;
border:3px solid #063736;
width:600px;
box-sizing:border-box;
border-radius: 20px;
@media (max-width : 700px) {
    width:100%;
    border-left:none;
    border-right:none;
    border-radius:0;
    
}
`

export const ListItemText = styled.p`
color:#1C1C1C;
font-family : Roboto;
font-size: 25px;
width:100%;
margin:0;
text-align:center;
padding:5px 0;
`

export const ListItemButtonSpan = styled.span`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
width:100%;
padding:20px;
box-sizing: border-box;
`

export const ListItemButton = styled.button`
color:#1C1C1C;
letter-spacing: 1px;
font-family : Righteous;
font-size:15px;
border:none;
background-color:#FFFFFF;
text-decoration:none;
cursor: pointer;
&:focus{
    outline:none;
}
&:active{
    outline:none;
}
`

export const ListItemDelteButton = styled(ListItemButton)`
width:fit-content;
align-self:flex-end;
height:fit-content;
`

export const DeleteStyle = styled(DeleteIcon)`
fill:#A31621;
width:30px;
height:30px;
`

export const ListItemForm = styled(StyledForm)`
width:90%;
`
export const ListItemInput = styled(StyledInput)`
width:100%;
box-sizing: border-box;
`

export const ListItemSubmitButton = styled(ListItemButton)`
align-self:flex-end;
color :#FFFFFF;
background-color:#063736;
letter-spacing: 1px;
font-family : Righteous;
font-size:15px;
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