
import React, { useEffect, useState }  from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { sliderItems } from '../data';
const Container = styled.div`
width:100%;
height:100vh;
display:flex;
position: relative;
overflow:hidden;

`
const Arrow = styled.div`
width:50px;
height:50px;
background-color:white;
border-radius:50%;
display:flex;
padding-top:23px;
padding-left:24px;
position:absolute;
top:0;
bottom:0;

left: ${props=>props.direction==="left" && "10px"};
right: ${props=>props.direction==="right" && "10px"};
margin:auto;
cursor:pointer;
opacity:0.5;
z-index:2;
`

const Wrapper = styled.div
`
height:100%;
display:flex;
transition: all   1.5s  ease;
transform:translateX(${props=>props.slideIndex * -100}vw);
`
const Slide=styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color: #${props=>props.bg};
`;
const ImgContainer=styled.div`
height:70%;
width:65%
`
const Image= styled.img`
flex:1;
height:70%;
margin-top:50px;
margin-left:60px;
`
const InfoContainer=styled.div`
flex:1;

margin-left:-90px;
`

const Title= styled.h1`
front-size:70px;
font-weight:200px;

`
const Desc= styled.p`
margin:40px 0px;
font-size:20px;
font-weight:500;
letter-spacing:3px;
`

const Button= styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor:pointer;

`
const Slider = () => {
  const [slideIndex, setSlideIndex]= useState(0);
    const handleClick=(direction)=>{
 if(direction==="left"){
  setSlideIndex(slideIndex > 0 ? slideIndex-1: 2);
 }
 else{
  setSlideIndex(slideIndex<2? slideIndex +1:0);
 }
    };
    return (
        <div>
            <Container>
<Arrow direction="left" onClick={()=>handleClick("left")}>
  <ArrowLeftOutlinedIcon/>
</Arrow>
<Wrapper slideIndex={slideIndex}>
{sliderItems.map((item)=>(



    <Slide bg={item.bg}>
<ImgContainer>
<Image src={item.img}/>
</ImgContainer>
<InfoContainer>
<Title>{item.title}</Title>
<Desc>{item.desc}</Desc>
<Button>SHOP NOW</Button>


</InfoContainer>

</Slide>

))}
</Wrapper>
<Arrow direction="right" onClick={()=>handleClick("right")}>
  <ArrowRightOutlinedIcon/>

</Arrow>
            </Container>
        </div>
    )
}

export default Slider
