import styled from "styled-components";

export const Button = styled.button`
    &:hover {
    transform: translateY(-2px);
}
padding: 5px;
font-weight: 700;
text-transform: uppercase;
font-size: 13px;
text-align: center;
color: rgba(255, 255, 255, 1);
height: 30px;
width: 150px;
border: none;
border-radius: 20px;
cursor: ${props => (props.disabled ? "default" : "pointer")};
opacity: ${props => (props.disabled ? 0.4 : 1)};
background: rgb(51, 153, 255);
transition: all 0.3s ease;
position: absolute;
right: 10px;
top: 40px;
`;