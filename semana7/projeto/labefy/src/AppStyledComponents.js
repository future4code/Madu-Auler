import styled from 'styled-components'
import img from './img/music2.jpg';
import logo from './img/spotify.png'

/*
COLORS:

Light green: #7ed56f
Medium green: #55c57a
Dark green: #28b485

*/


export const MainContainer = styled.body`
font-family: "Lato", sans - serif;
font-weight: 400;
font-size: 16px;
line-height: 1.7;
color: black;
padding: 30px;

`

export const LittleContainer = styled.div`
 text-align: center;
 padding: 150px;
 
  `

export const Header = styled.header`
height: 95vh;
background-image: linear-gradient(
  to right bottom, #7ed56fcb,
       #28b485c9),
  url(${img});
background-size: cover;
background-position: top;
clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
position: relative;
`

export const Logo = styled.div`
position: absolute;
top: 40px;
left: 40px;
`

export const LogoImg = styled.img`
  height: 60px;
  width:60px;
`

export const Button = styled.button`
  padding: 15px 40px;
  border-radius: 100px;
  background-color: #fff;
  color: #777;
`
export const ButtonDC = styled.button`
padding: 10px 10px;
background-color: #fff;
color: #777;
border-radius: 100px;

`
export const Input = styled.input`
border-radius: 10%;
`






