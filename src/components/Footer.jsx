import styled from "styled-components"
import React from 'react'
import { Facebook, Instagram, Twitter, Pinterest, Room, MailOutline, Phone,Payments } from "@mui/icons-material"

const Container = styled.div`
display:flex;

`
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;

`
const Logo = styled.h1`
margin:20px 190px;
`

const Desc = styled.p`
margin:20px 10px;


`
const SocailContainer = styled.div`
display:flex;
margin:20px 190px;
`

const SocailIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:#${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;

`



const Center = styled.div`
flex:1;
padding: 20px;
`
const Title=styled.h3`
margin-bottom:30px;


`
const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
margin-bottom:50px;

`;
const ListItem = styled.li`
width:50%;
margin-bottom:10px;

`;
const Right = styled.div`
flex:1;
padding: 20px;
`;
const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
align-items:center;

`;
const Payment = styled.img`
 width:50%;

`;

const Footer = () => {
    return (
     <Container>
<Left>
<Logo> ITC Training</Logo>
<Desc>    Best it training institute in gurgaon, aws training, java training institute, python training, big data hadoop training, Selenium training for all IT courses and basics computer courses. We provide best faculty for IT classes in gurgaon.  </Desc>
<SocailContainer>

<SocailIcon color="385999">
<Facebook/>

</SocailIcon>
<SocailIcon color="E4405F">
<Instagram/>

</SocailIcon>
<SocailIcon color="55ACEE">
<Twitter/>

</SocailIcon>
<SocailIcon color="385999">
<Pinterest/>

</SocailIcon>
</SocailContainer>
</Left>
    <Center>
<Title>
  Usefull Links  
    
    </Title>
    <List>
        <ListItem>
      Home
        </ListItem>
        <ListItem>
      Cart
        </ListItem>
        <ListItem>
      Men
        </ListItem>
        <ListItem>
      Woman Fashion
        </ListItem>
        <ListItem>
      Accessories
        </ListItem>
        <ListItem>
      Order Tracking
        </ListItem>
        <ListItem>
      Wishlist
        </ListItem>
        <ListItem>
      Terms
        </ListItem>

    </List>
    </Center>
<Right>
<Title>
Contact
</Title>
<ContactItem> <Room style={{marginRight:"10px"}}/>
Reg. off: House No 1746, Sector 45, Gurgaon, Haryana(India).

</ContactItem>
<ContactItem> <Phone  style={{marginRight:"10px"}}/>
Call us at : +91 7289908088

</ContactItem>
<ContactItem> <MailOutline  style={{marginRight:"10px"}}/>
parveen@ittrainingclasses.in

</ContactItem>
<Payment src="https://www.ana.co.jp/cont-image/common/logo/0058-lang-multi.jpg"/>
</Right>
     </Container>
    )
}

export default Footer
