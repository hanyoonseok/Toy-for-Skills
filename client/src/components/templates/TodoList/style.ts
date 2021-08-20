import styled from "styled-components"
import {Label,Button} from "../../../components"

export const FlowWrapper = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;    
`

export const StyledLabel = styled(Label)`
`

export const TodoWrapper = styled.div`
    background-color:white;
    width:90%;
    display:flex;
    flex-direction:column;
    border-radius:20px;
    padding:10% 5%;
    margin-top:100px;
`;

export const PlusBtn = styled(Button)`
    border-radius:50%;
    width:50px;
    height:50px;
    background-color:green;
    color:white;
    position:absolute;
    bottom:0;
    left:50%;
`
