import styled from "styled-components"
import React from "react"
import img from "../img/hero.jpg"
import logo from "../img/favicon.png"


export const Header = styled.div`
width: 100%;
height: 15vh;
display: flex;
justify-content: space-around;
align-items: center;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #00000029;
opacity: 1;

`

export const Container = styled.div`
width: 80%;
height: 15vh;
display: flex;
justify-content: space-between;
align-items: center;
`

export const Banner = styled.header`
height: 100vh;
background-image: linear-gradient(
  to right bottom, #7ed56fcb,
       #28b485c9),
  url(${img});
background-size: cover;
background-position: top;
position: relative;
`
export const Logo = styled.img`
height: 100%;
`

export const Logobox = styled.div`
height:80%;
display :flex;
align-items:center;
justify-content:center;
`

export const LogoButton = styled.button`
height: 80%;
background-color: #FFF;
border:0;
&:hover {
    cursor: pointer;
  }
:focus {
  outline: none;
}
`

export const ButtonHeader = styled.button`
text-transform: uppercase;
border: 0;
border-radius: 7px;
opacity: 1;
height: 40px;
font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 16px/25px Poppins;
letter-spacing: var(--unnamed-character-spacing-0);
text-align: center;
font: normal normal normal 16px/25px Poppins;
letter-spacing: 0px;
opacity: 1;
background-color: white;
color: #28b485c9;
text-decoration: none;
padding-bottom: 2px;
margin-right: 20px;
&:hover{
  border-bottom: 2px solid #7ed56fcb;
  transition: 150ms;
  cursor: pointer;
  border-radius: 0px;
}
:focus {
  outline: none;
}
`

export const TextBox = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  
    `

export const HeadingPrimary = styled.div`
    color: #fff;
    text-transform: uppercase;

    backface-visibility: hidden;
    margin-bottom: 60px;
`

export const HeadingMainPrimary = styled.div`
    display: block;
    font-size: 60px;
    font-weight: 400;
    letter-spacing: 35px;


    animation-name: moveInLeft;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    
@keyframes moveInLeft{
    0% {
        opacity: 0;
        transform: translateX(-100px);
    }

    80% {
        transform: translateX(10px);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
}

`


export const HeadingPrimarySub = styled.div`
    display: block;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 19.5px;
    
@keyframes moveInRight{
    0% {
        opacity: 0;
        transform: translateX(100px);
    }

    80% {
        transform: translateX(-10px);
        /* transform: rotate(120deg); */
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
}

    animation: moveInRight 1s ease-out;
`


export const TripContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;

`
export const Trips = styled.div`
height:25%;
width:25%;
color: white;
`
export const Inputs = styled.input`
padding: 10px;
border: none;
margin: 10px;
`
export const Buttons = styled.button`
color: gray;
padding: 10px;
border: none;
border-radius:5%;
margin:10px;
&:hover{
  cursor: pointer;
}
`

